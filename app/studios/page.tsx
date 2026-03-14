import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function StudiosPage() {
    const studios = [
        {
            id: "dev",
            name: "The Click & Create Co. — Development",
            tagline: "Code. Build. Deploy.",
            description: "A development studio dedicated to building modern websites, web applications, and high-performance digital platforms.",
            color: "border-studio-dev/30 hover:border-studio-dev shadow-studio-dev/10",
            accent: "text-studio-dev",
            link: "/studios/dev"
        },
        {
            id: "graphics",
            name: "The Click & Create Co. — Graphics",
            tagline: "Click. Create. Done.",
            description: "A design studio focused on visual identity, brand assets, and digital design systems that make businesses stand out.",
            color: "border-studio-graphics/30 hover:border-studio-graphics shadow-studio-graphics/10",
            accent: "text-studio-graphics",
            link: "/studios/graphics"
        },
        {
            id: "markezo",
            name: "Markezo",
            tagline: "Growth Engineered.",
            description: "A marketing and SEO studio helping businesses increase visibility, attract traffic, and convert audiences into customers.",
            color: "border-studio-markezo/30 hover:border-studio-markezo shadow-studio-markezo/10",
            accent: "text-studio-markezo",
            link: "/studios/markezo"
        },
        {
            id: "blinks",
            name: "BlinksArts",
            tagline: "Motion. Story. Emotion.",
            description: "A motion design studio creating engaging animated visuals that capture attention and communicate ideas effectively.",
            color: "border-studio-blinks/30 hover:border-studio-blinks shadow-studio-blinks/10",
            accent: "text-studio-blinks",
            link: "/studios/blinksArts"
        },
        {
            id: "valoria",
            name: "Valoria",
            tagline: "Animation Studio",
            description: "A creative animation studio focused on storytelling, world-building, and cinematic animated productions.",
            color: "border-studio-valoria/30 hover:border-studio-valoria shadow-studio-valoria/10",
            accent: "text-studio-valoria",
            link: "/studios/valoria"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-20 pointer-events-none">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
                </div>

                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                        Our Studios
                    </h1>
                    <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                        A collective of specialized studios building brands and digital platforms. Designed to lead through specialized creative and technical disciplines.
                    </p>
                </div>
            </section>

            {/* Studios Grid */}
            <section className="py-24 px-6 bg-zinc-950/50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {studios.map((studio) => (
                            <Link href={studio.link} key={studio.id} className="block group">
                                <div className={`p-8 rounded-3xl border bg-card transition-all duration-300 flex flex-col h-full ${studio.color} hover:shadow-2xl`}>
                                    <div className="mb-6 flex justify-between items-start">
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">{studio.name}</h3>
                                            <div className={`text-sm font-semibold tracking-widest uppercase ${studio.accent}`}>{studio.tagline}</div>
                                        </div>
                                        <div className={`p-2 rounded-full bg-secondary/50 group-hover:bg-card ${studio.accent} transition-colors`}>
                                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground text-sm leading-relaxed grow">
                                        {studio.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Not sure which studio fits your needs?</h2>
                    <p className="text-xl text-muted-foreground mb-12">
                        Get in touch with us, and we'll guide you to the right creative or technical discipline for your project.
                    </p>
                    <Link href="/contact" className="inline-block px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform">
                        Contact Us →
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
