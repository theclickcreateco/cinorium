import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { Code, Layout, Zap, Smartphone } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Development Studio",
    description: "High-performance digital platforms, custom web applications, and pixel-perfect UI implementation by the CINORIUM Development Studio.",
};

export default function DevStudio() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-20 pointer-events-none">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-studio-dev/40 rounded-full blur-[120px]" />
                </div>

                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-studio-dev/10 border border-studio-dev/20 text-studio-dev text-xs font-bold uppercase tracking-widest mb-6">
                            The Click & Create Co. — Development
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                            Powerful, fast, and scalable <span className="text-studio-dev">digital platforms.</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                            A development studio dedicated to building modern websites, web applications, and high-performance digital platforms.
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
                                title: "Website Development",
                                desc: "Custom-built, high-performance websites optimized for speed and SEO.",
                                icon: <Layout className="text-studio-dev" size={32} />
                            },
                            {
                                title: "Web Applications",
                                desc: "Complex, scalable web applications built with modern frameworks and architectures.",
                                icon: <Code className="text-studio-dev" size={32} />
                            },
                            {
                                title: "UI Implementation",
                                desc: "Turning complex designs into pixel-perfect, responsive, and accessible user interfaces.",
                                icon: <Smartphone className="text-studio-dev" size={32} />
                            },
                            {
                                title: "Performance Optimization",
                                desc: "Advanced optimization techniques to ensure lightning-fast load times and smooth interactions.",
                                icon: <Zap className="text-studio-dev" size={32} />
                            }
                        ].map((service, i) => (
                            <div key={i} className="p-8 rounded-3xl border border-border bg-card hover:border-studio-dev/50 transition-colors group">
                                <div className="mb-6 p-3 rounded-2xl bg-studio-dev/10 w-fit group-hover:scale-110 transition-transform">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="py-24 px-6 border-y border-border/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Technology Ecosystem</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            We use the most advanced and reliable technologies to build digital platforms that are ready for the future.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                        {/* You can add real tech logos here later */}
                        {["Next.js", "React", "TypeScript", "Tailwind", "Node.js", "PostgreSQL", "Vercel"].map((tech) => (
                            <div key={tech} className="text-xl font-bold tracking-tighter">{tech}</div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Build Your Next Project?</h2>
                    <p className="text-xl text-muted-foreground mb-12">
                        Let&apos;s collaborate to bring your digital vision to life with expert development and performance-first engineering.
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
