import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { Palette, Feather, Layers, MousePointer2 } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Graphics Studio",
    description: "Visual identity, brand assets, and digital design systems. Professional design services by the CINORIUM Graphics Studio.",
};

export default function GraphicsStudio() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-20 pointer-events-none">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-studio-graphics/40 rounded-full blur-[120px]" />
                </div>

                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-studio-graphics/10 border border-studio-graphics/20 text-studio-graphics text-xs font-bold uppercase tracking-widest mb-6">
                            The Click & Create Co. — Graphics
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                            Professional visuals that <span className="text-studio-graphics">strengthen brands.</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                            A design studio focused on visual identity, brand assets, and digital design systems that make businesses stand out.
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
                                title: "Brand Identity",
                                desc: "Creating unique and memorable identities that reflect your brand's core values.",
                                icon: <Palette className="text-studio-graphics" size={32} />
                            },
                            {
                                title: "Social Media Design",
                                desc: "Engaging and consistent visual content for all your social platforms.",
                                icon: <MousePointer2 className="text-studio-graphics" size={32} />
                            },
                            {
                                title: "Marketing Materials",
                                desc: "High-quality designs for digital and print marketing collateral.",
                                icon: <Feather className="text-studio-graphics" size={32} />
                            },
                            {
                                title: "Design Systems",
                                desc: "Scalable and consistent design systems for digital products and platforms.",
                                icon: <Layers className="text-studio-graphics" size={32} />
                            }
                        ].map((service, i) => (
                            <div key={i} className="p-8 rounded-3xl border border-border bg-card hover:border-studio-graphics/50 transition-colors group">
                                <div className="mb-6 p-3 rounded-2xl bg-studio-graphics/10 w-fit group-hover:scale-110 transition-transform">
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
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Elevate Your Visuals?</h2>
                    <p className="text-xl text-muted-foreground mb-12">
                        Let&apos;s collaborate to create a powerful visual identity and design assets that make your brand unmistakable.
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
