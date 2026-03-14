import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { TrendingUp, Search, FileText, BarChart3 } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Markezo — Marketing & SEO",
    description: "Engineer your digital growth with SEO strategies, content marketing, and data-driven campaigns by Markezo.",
};

export default function MarkezoStudio() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-20 pointer-events-none">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-studio-markezo/40 rounded-full blur-[120px]" />
                </div>

                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-studio-markezo/10 border border-studio-markezo/20 text-studio-markezo text-xs font-bold uppercase tracking-widest mb-6">
                            Markezo
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                            Higher visibility and <span className="text-studio-markezo">measurable growth.</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                            A marketing and SEO studio helping businesses increase visibility, attract traffic, and convert audiences into customers.
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
                                title: "SEO Strategy",
                                desc: "Comprehensive SEO audits and strategies to improve your organic search rankings.",
                                icon: <Search className="text-studio-markezo" size={32} />
                            },
                            {
                                title: "Content Marketing",
                                desc: "Creating valuable, relevant content to attract and engage your target audience.",
                                icon: <FileText className="text-studio-markezo" size={32} />
                            },
                            {
                                title: "Digital Campaigns",
                                desc: "Data-driven marketing campaigns designed to deliver measurable business results.",
                                icon: <TrendingUp className="text-studio-markezo" size={32} />
                            },
                            {
                                title: "Performance Analytics",
                                desc: "In-depth tracking and analysis to optimize your marketing performance and ROI.",
                                icon: <BarChart3 className="text-studio-markezo" size={32} />
                            }
                        ].map((service, i) => (
                            <div key={i} className="p-8 rounded-3xl border border-border bg-card hover:border-studio-markezo/50 transition-colors group">
                                <div className="mb-6 p-3 rounded-2xl bg-studio-markezo/10 w-fit group-hover:scale-110 transition-transform">
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
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Grow Your Business?</h2>
                    <p className="text-xl text-muted-foreground mb-12">
                        Partner with Markezo to engineer your digital growth and build a powerful online presence that converts.
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
