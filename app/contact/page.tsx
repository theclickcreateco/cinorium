"use client";

import { useState } from "react";
import { Twitter, Instagram, Facebook, CheckCircle2, AlertCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            studio: formData.get("studio"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const resData = await response.json();
                throw new Error(resData.error || "Oops! Something went wrong.");
            }

            setStatus("success");
            (e.target as HTMLFormElement).reset();
        } catch (error: unknown) {
            console.error("Contact form error:", error);
            setStatus("error");
            const message = error instanceof Error ? error.message : "Oops! Something went wrong. Please try again later.";
            setErrorMessage(message);
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-8">Start a Project.</h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                            Whether you&apos;re building a new brand, a high-performance platform, or looking for continuous growth, our studios are ready to partner with you.
                        </p>

                        <div className="space-y-8">
                            <div>
                                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">New Inquiries</div>
                                <div className="text-2xl font-medium">admin@cinorium.com</div>
                            </div>
                            <div>
                                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">General Inquiries</div>
                                <div className="text-2xl font-medium">projects@cinorium.com</div>
                            </div>
                            <div>
                                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Follow Us</div>
                                <div className="flex gap-6 mt-4 text-muted-foreground">
                                    <a
                                        href="https://x.com/cinorium_"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-white transition-colors"
                                        aria-label="X (Twitter)"
                                    >
                                        <Twitter size={24} />
                                    </a>
                                    <a
                                        href="https://www.facebook.com/cinorium"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-white transition-colors"
                                        aria-label="Facebook"
                                    >
                                        <Facebook size={24} />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/cinorium_/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-white transition-colors"
                                        aria-label="Instagram"
                                    >
                                        <Instagram size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="bg-card shadow-2xl shadow-black/50 border border-border p-8 md:p-12 rounded-[40px] relative overflow-hidden">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Name</label>
                                    <input required id="name" name="name" type="text" className="w-full bg-background border border-border rounded-2xl px-6 py-4 outline-none focus:border-primary transition-colors" placeholder="John Doe" disabled={status === "loading"} />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Email</label>
                                    <input required id="email" name="email" type="email" className="w-full bg-background border border-border rounded-2xl px-6 py-4 outline-none focus:border-primary transition-colors" placeholder="john@example.com" disabled={status === "loading"} />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="studio" className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Studio of Interest</label>
                                <select id="studio" name="studio" className="w-full bg-background border border-border rounded-2xl px-6 py-4 outline-none focus:border-primary transition-colors appearance-none" disabled={status === "loading"}>
                                    <option value="">Select a Studio</option>
                                    <option value="Development">Development</option>
                                    <option value="Graphics & Design">Graphics & Design</option>
                                    <option value="Marketing & SEO">Marketing & SEO</option>
                                    <option value="Motion Design">Motion Design</option>
                                    <option value="Storytelling & Animation">Storytelling & Animation</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Message</label>
                                <textarea required id="message" name="message" rows={5} className="w-full bg-background border border-border rounded-2xl px-6 py-4 outline-none focus:border-primary transition-colors resize-none" placeholder="Tell us about your project..." disabled={status === "loading"}></textarea>
                            </div>

                            {status === "error" && (
                                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-xl flex items-center gap-3 text-destructive animate-fade-in">
                                    <AlertCircle size={20} className="shrink-0" />
                                    <span className="text-sm font-medium">{errorMessage}</span>
                                </div>
                            )}

                            {status === "success" && (
                                <div className="p-4 bg-studio-markezo/10 border border-studio-markezo/20 rounded-xl flex items-center gap-3 text-studio-markezo animate-fade-in">
                                    <CheckCircle2 size={20} className="shrink-0" />
                                    <span className="text-sm font-medium">Message sent successfully! We&apos;ll be in touch soon.</span>
                                </div>
                            )}

                            <button type="submit" disabled={status === "loading"} className="w-full py-5 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:bg-primary/90 active:scale-[0.98] transition-all disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2">
                                {status === "loading" ? "Sending..." : "Send Message →"}
                            </button>
                        </form>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
