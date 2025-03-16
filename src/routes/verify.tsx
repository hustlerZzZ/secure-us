import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/verify")({
    component: RouteComponent,
});

function RouteComponent() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);

    useEffect(() => {
        async function initCamera() {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            if (videoRef.current) videoRef.current.srcObject = stream;

            const audioStream = new MediaRecorder(stream);
            mediaRecorderRef.current = audioStream;

            let audioChunks: BlobPart[] = [];
            audioStream.ondataavailable = (event) => audioChunks.push(event.data);
            audioStream.onstop = () => setAudioBlob(new Blob(audioChunks, { type: "audio/wav" }));
        }

        initCamera();
    }, []);

    const handleSave = async () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (videoRef.current && ctx) {
            ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
            const imageBlob = await new Promise<Blob | null>((resolve) =>
                canvas.toBlob((blob) => resolve(blob), "image/jpeg")
            );

            if (imageBlob && audioBlob) {
                const formData = new FormData();
                formData.append("face", imageBlob, "face.jpg");
                formData.append("voice", audioBlob, "voice.wav");

                await fetch("/api/save-biometrics", { method: "POST", body: formData });
                window.location.href = "/sign-in";
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
            <h1 className="text-3xl font-bold mb-6">Verify Your Identity</h1>

            {/* Video Feed */}
            <div className="relative w-80 h-80 bg-gray-800 rounded-xl overflow-hidden border-2 border-gray-600 shadow-lg">
                <video ref={videoRef} autoPlay className="w-full h-full object-cover" />
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-col gap-4 w-full max-w-sm">
                <button
                    onClick={() => mediaRecorderRef.current?.start()}
                    className="w-full py-3 text-lg bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition"
                >
                    🎙 Start Recording
                </button>
                <button
                    onClick={() => mediaRecorderRef.current?.stop()}
                    className="w-full py-3 text-lg bg-red-600 hover:bg-red-700 rounded-lg shadow-md transition"
                >
                    ⏹ Stop Recording
                </button>
                <button
                    onClick={handleSave}
                    className="w-full py-3 text-lg bg-green-600 hover:bg-green-700 rounded-lg shadow-md transition"
                >
                    ✅ Save & Continue
                </button>
            </div>
        </div>
    );
}
