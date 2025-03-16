import { useEffect, useRef, useState } from "react";
import {createFileRoute} from '@tanstack/react-router'

const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "She sells seashells by the seashore.",
    "How can a clam cram in a clean cream can?",
    "I saw a kitten eating chicken in the kitchen.",
    "Four fine fresh fish for you.",
    "Fred fed Ted bread and Ted fed Fred bread.",
    "He threw three free throws.",
    "The blue bird blinks bravely.",
    "Crisp crusts crackle crunchily.",
    "Mix, mix, mix the batter up."
];

export const Route = createFileRoute('/train-us')({
    component: RouteComponent,
})

function RouteComponent() {
    const [randomLines, setRandomLines] = useState<string[]>([]);
    const [currentLine, setCurrentLine] = useState<number>(0);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const [isRecording, setIsRecording] = useState(false);

    useEffect(() => {
        setRandomLines(sentences.sort(() => 0.5 - Math.random()).slice(0, 10));
    }, []);

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

    const startRecording = () => {
        setIsRecording(true);
        mediaRecorderRef.current?.start();
    };

    const stopRecording = () => {
        setIsRecording(false);
        mediaRecorderRef.current?.stop();
    };

    const nextSentence = () => {
        if (currentLine < 9) {
            setCurrentLine(currentLine + 1);
        }
    };

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

                await fetch("/api/train-biometrics", { method: "POST", body: formData });
                window.location.href = "/verify";
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center p-6">
            <h1 className="text-3xl font-bold mb-4">🎤 Voice & Face Training</h1>
            <p className="text-lg text-gray-300 mb-4">Read each sentence aloud and then capture your photo.</p>

            <div className="w-full max-w-lg bg-gray-800 p-4 rounded-lg shadow-md border border-gray-600">
                <p className="text-lg font-semibold text-yellow-400">{randomLines[currentLine]}</p>
                <p className="text-gray-400 text-sm mt-2">({currentLine + 1}/10)</p>
            </div>

            <div className="mt-6 flex gap-4">
                <button
                    onClick={startRecording}
                    disabled={isRecording}
                    className="px-6 py-3 text-lg bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition disabled:opacity-50"
                >
                    🎙 Start Recording
                </button>
                <button
                    onClick={stopRecording}
                    disabled={!isRecording}
                    className="px-6 py-3 text-lg bg-red-600 hover:bg-red-700 rounded-lg shadow-md transition disabled:opacity-50"
                >
                    ⏹ Stop Recording
                </button>
            </div>

            <button
                onClick={nextSentence}
                disabled={currentLine >= 9}
                className="mt-4 px-6 py-3 text-lg bg-yellow-500 hover:bg-yellow-600 rounded-lg shadow-md transition disabled:opacity-50"
            >
                Next Sentence ➡️
            </button>

            <div className="mt-6 relative w-80 h-80 bg-gray-800 rounded-xl overflow-hidden border-2 border-gray-600 shadow-lg">
                <video ref={videoRef} autoPlay className="w-full h-full object-cover" />
            </div>

            <button
                onClick={handleSave}
                disabled={currentLine < 9}
                className="mt-6 px-6 py-3 text-lg bg-green-600 hover:bg-green-700 rounded-lg shadow-md transition disabled:opacity-50"
            >
                ✅ Save & Continue
            </button>
        </div>
    )
}
