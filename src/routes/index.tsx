import img from "../../assets/security.svg";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import {
    ArrowRight,
    CheckCircle,
    Fingerprint,
    Lock,
    Shield,
    User,
    Volume2,
} from "lucide-react";

export const Route = createFileRoute("/")({
    component: App,
});

function App() {
    return (
        <div className="flex min-h-screen flex-col ">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mx-auto">
                <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 mx-auto">
                    <div className="flex gap-6 md:gap-10">
                        <Link to="/" className="flex items-center space-x-2">
                            <Shield className="h-6 w-6" />
                            <span className="inline-block font-bold">
                                SecureGuard
                            </span>
                        </Link>
                        <nav className="hidden gap-6 md:flex">
                            <Link
                                to="/"
                                className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
                            >
                                Features
                            </Link>
                            <Link
                                to="/"
                                className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
                            >
                                How It Works
                            </Link>
                            <Link
                                to="/"
                                className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
                            >
                                Benefits
                            </Link>
                        </nav>
                    </div>
                    <div className="flex flex-1 items-center justify-end space-x-4">
                        <nav className="flex items-center space-x-2">
                            <Button
                                variant="outline"
                                size="sm"
                                className="hidden sm:flex"
                            >
                                Log in
                            </Button>
                            <Button size="sm">Get Started</Button>
                        </nav>
                    </div>
                </div>
            </header>
            <main className="flex-1 mx-auto">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                        Advanced Security with Voice & Face
                                        Recognition
                                    </h1>
                                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                        Protect what matters most with our
                                        cutting-edge biometric security
                                        solutions. Experience next-level
                                        protection with voice and facial
                                        recognition technology.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Button size="lg" className="gap-1">
                                        Get Started
                                        <ArrowRight className="h-4 w-4" />
                                    </Button>
                                    <Button size="lg" variant="outline">
                                        Learn More
                                    </Button>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
                                    <img
                                        src={img}
                                        alt="Security System"
                                        className="rounded-lg object-cover"
                                        width={500}
                                        height={500}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="features"
                    className="w-full bg-muted py-12 md:py-24 lg:py-32"
                >
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Advanced Security Features
                                </h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Our comprehensive security system combines
                                    multiple biometric technologies for
                                    unparalleled protection.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                                <div className="rounded-full bg-primary/10 p-4">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold">
                                    Facial Recognition
                                </h3>
                                <p className="text-center text-muted-foreground">
                                    Advanced AI-powered facial recognition that
                                    works in various lighting conditions.
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                                <div className="rounded-full bg-primary/10 p-4">
                                    <Volume2 className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold">
                                    Voice Authentication
                                </h3>
                                <p className="text-center text-muted-foreground">
                                    Unique voice pattern analysis that can't be
                                    fooled by recordings.
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                                <div className="rounded-full bg-primary/10 p-4">
                                    <Fingerprint className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold">
                                    Multi-Factor Authentication
                                </h3>
                                <p className="text-center text-muted-foreground">
                                    Combine biometrics with traditional security
                                    methods for maximum protection.
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                                <div className="rounded-full bg-primary/10 p-4">
                                    <Lock className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold">
                                    Encrypted Data
                                </h3>
                                <p className="text-center text-muted-foreground">
                                    All biometric data is encrypted and stored
                                    securely on our protected servers.
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                                <div className="rounded-full bg-primary/10 p-4">
                                    <Shield className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold">
                                    24/7 Monitoring
                                </h3>
                                <p className="text-center text-muted-foreground">
                                    Continuous system monitoring with instant
                                    alerts for unauthorized access attempts.
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                                <div className="rounded-full bg-primary/10 p-4">
                                    <ArrowRight className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold">
                                    Easy Integration
                                </h3>
                                <p className="text-center text-muted-foreground">
                                    Seamlessly integrates with your existing
                                    security infrastructure.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="how-it-works"
                    className="w-full py-12 md:py-24 lg:py-32"
                >
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    How It Works
                                </h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Our advanced security system is easy to use
                                    while providing maximum protection.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
                            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                                    1
                                </div>
                                <h3 className="text-xl font-bold">Register</h3>
                                <p className="text-center text-muted-foreground">
                                    Set up your account and register your
                                    biometric data securely through our app.
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                                    2
                                </div>
                                <h3 className="text-xl font-bold">Install</h3>
                                <p className="text-center text-muted-foreground">
                                    Our technicians install the hardware
                                    components and configure the system to your
                                    needs.
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                                    3
                                </div>
                                <h3 className="text-xl font-bold">Secure</h3>
                                <p className="text-center text-muted-foreground">
                                    Enjoy peace of mind with multi-layered
                                    biometric security protecting your property.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="benefits"
                    className="w-full bg-muted py-12 md:py-24 lg:py-32"
                >
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Why Choose Us
                                </h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Our biometric security solutions offer
                                    advantages that traditional systems can't
                                    match.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-2">
                            <div className="flex flex-col space-y-2">
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="h-5 w-5 text-primary" />
                                    <h3 className="font-bold">
                                        Impossible to Duplicate
                                    </h3>
                                </div>
                                <p className="text-muted-foreground">
                                    Unlike keys or cards, biometric identifiers
                                    can't be lost, stolen, or duplicated.
                                </p>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="h-5 w-5 text-primary" />
                                    <h3 className="font-bold">Convenience</h3>
                                </div>
                                <p className="text-muted-foreground">
                                    No need to remember passwords or carry
                                    access cards - you are the key.
                                </p>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="h-5 w-5 text-primary" />
                                    <h3 className="font-bold">
                                        Enhanced Security
                                    </h3>
                                </div>
                                <p className="text-muted-foreground">
                                    Multiple biometric factors create a security
                                    system that's virtually impenetrable.
                                </p>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="h-5 w-5 text-primary" />
                                    <h3 className="font-bold">
                                        Real-time Alerts
                                    </h3>
                                </div>
                                <p className="text-muted-foreground">
                                    Instant notifications on your mobile device
                                    for any security events.
                                </p>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="h-5 w-5 text-primary" />
                                    <h3 className="font-bold">
                                        Detailed Access Logs
                                    </h3>
                                </div>
                                <p className="text-muted-foreground">
                                    Complete records of who accessed your
                                    property and when.
                                </p>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="h-5 w-5 text-primary" />
                                    <h3 className="font-bold">
                                        Scalable Solutions
                                    </h3>
                                </div>
                                <p className="text-muted-foreground">
                                    From single homes to large corporate
                                    facilities, our systems scale to your needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Ready to Upgrade Your Security?
                                </h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Contact us today for a free consultation and
                                    security assessment.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Button size="lg" className="gap-1">
                                    Get Started
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                                <Button size="lg" variant="outline">
                                    Contact Sales
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="w-full border-t bg-background py-6 md:py-8 mx-auto">
                <div className="container flex flex-col items-center justify-between gap-4 md:flex-row mx-auto">
                    <div className="flex items-center gap-2">
                        <Shield className="h-6 w-6" />
                        <p className="text-sm text-muted-foreground">
                            © 2025 SecureGuard. All rights reserved.
                        </p>
                    </div>
                    <nav className="flex gap-4 sm:gap-6">
                        <Link
                            to="/"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground"
                        >
                            Terms
                        </Link>
                        <Link
                            to="/"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground"
                        >
                            Privacy
                        </Link>
                        <Link
                            to="/"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground"
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
            </footer>
        </div>
    );
}

export default App;
