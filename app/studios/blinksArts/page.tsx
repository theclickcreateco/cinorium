import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { Film, PlayCircle, Move, Sparkles } from "lucide-react";

export default function BlinksArtsStudio() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-20 pointer-events-none">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-studio-blinks/40 rounded-full blur-[120px]" />
                </div>

                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-studio-blinks/10 border border-studio-blinks/20 text-studio-blinks text-xs font-bold uppercase tracking-widest mb-6">
                            BlinksArts
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                            Dynamic visuals that <span className="text-studio-blinks">bring stories to life.</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                            A motion design studio creating engaging animated visuals that capture attention and communicate ideas effectively.
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
                                title: "Motion Graphics",
                                desc: "Creating visually stunning motion graphics for digital platforms and broadcasts.",
                                icon: <Move className="text-studio-blinks" size={32} />
                            },
                            {
                                title: "Animated Explainers",
                                desc: "Simplified complex ideas through engaging and effective animated storytelling.",
                                icon: <PlayCircle className="text-studio-blinks" size={32} />
                            },
                            {
                                title: "Brand Animations",
                                desc: "Adding motion to your brand identity for a more dynamic and memorable presence.",
                                icon: <Sparkles className="text-studio-blinks" size={32} />
                            },
                            {
                                title: "Social Media Motion",
                                desc: "Eye-catching short-form animations optimized for social media engagement.",
                                icon: <Film className="text-studio-blinks" size={32} />
                            }
                        ].map((service, i) => (
                            <div key={i} className="p-8 rounded-3xl border border-border bg-card hover:border-studio-blinks/50 transition-colors group">
                                <div className="mb-6 p-3 rounded-2xl bg-studio-blinks/10 w-fit group-hover:scale-110 transition-transform">
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
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Add Motion to Your Brand?</h2>
                    <p className="text-xl text-muted-foreground mb-12">
                        Let's collaborate to bring your ideas to life with high-impact motion design and animated storytelling.
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
