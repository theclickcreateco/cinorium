import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { Ghost, Box, PenTool, Tv } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Valoria — Animation Studio",
    description: "Immersive animated stories, world-building, and cinematic productions. Cinematic excellence by Valoria Animation Studio.",
};

export default function ValoriaStudio() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-20 pointer-events-none">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-studio-valoria/40 rounded-full blur-[120px]" />
                </div>

                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-studio-valoria/10 border border-studio-valoria/20 text-studio-valoria text-xs font-bold uppercase tracking-widest mb-6">
                            Valoria
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                            Immersive animated <span className="text-studio-valoria">stories and experiences.</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                            A creative animation studio focused on storytelling, world-building, and cinematic animated productions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 px-6 bg-secondary/30">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Animated Series",
                                desc: "Developing and producing high-quality animated series for digital and traditional broadcasts.",
                                icon: <Tv className="text-studio-valoria" size={32} />
                            },
                            {
                                title: "Character Animation",
                                desc: "Bringing characters to life with personality and expressive movement.",
                                icon: <Ghost className="text-studio-valoria" size={32} />
                            },
                            {
                                title: "Visual Storytelling",
                                desc: "Crafting compelling narratives through cinematic visuals and direction.",
                                icon: <PenTool className="text-studio-valoria" size={32} />
                            },
                            {
                                title: "Cinematic Projects",
                                desc: "Producing cinematic animated content for films, trailers, and specialized productions.",
                                icon: <Box className="text-studio-valoria" size={32} />
                            }
                        ].map((service, i) => (
                            <div key={i} className="p-8 rounded-3xl border border-border bg-card hover:border-studio-valoria/50 transition-colors group">
                                <div className="mb-6 p-3 rounded-2xl bg-studio-valoria/10 w-fit group-hover:scale-110 transition-transform">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Let&apos;s Build a World Together.</h2>
                    <p className="text-xl text-muted-foreground mb-12">
                        Partner with Valoria to create immersive animated stories and cinematic experiences that captivate your audience.
                    </p>
                    <Link href="/contact" className="inline-block px-10 py-5 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:scale-105 hover:bg-primary/90 transition-all">
                        Start a Project →
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
