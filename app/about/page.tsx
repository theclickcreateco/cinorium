import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function About() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <section className="mb-24">
                        <h1 className="text-4xl md:text-6xl font-bold mb-8">Designed to Lead.</h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                            CINORIUM is not just a company; it's a collective of specialized studios, each a master of its own domain. From the precision of code to the artistry of animation, we unite under one ecosystem to build the digital future.
                        </p>
                        <p className="text-lg text-muted-foreground/80 leading-relaxed">
                            Our philosophy is simple: separate expertise, collective impact. By allowing each studio to focus on what they do best, we deliver unparalleled quality across every touchpoint of a brand's digital journey.
                        </p>
                    </section>

                    <section className="mb-24">
                        <h2 className="text-3xl font-bold mb-12">The Collective Philosophy</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-xl font-bold mb-4">Precision First</h3>
                                <p className="text-muted-foreground">We don't believe in "generalized" solutions. Every pixel, line of code, and marketing strategy is engineered for excellence.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4">Integrated Impact</h3>
                                <p className="text-muted-foreground">While our studios work independently, they are connected by a shared creative pipeline, ensuring a seamless experience.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4">Growth Obsessed</h3>
                                <p className="text-muted-foreground">Design and technology are tools to achieve a higher goal: measurable, sustainable growth for our partners.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4">Future-Ready</h3>
                                <p className="text-muted-foreground">The digital landscape evolves daily. We build systems that are not just modern today, but scalable for tomorrow.</p>
                            </div>
                        </div>
                    </section>

                    <section className="py-20 border-t border-border/50 text-center">
                        <h2 className="text-3xl font-bold mb-6">Ready to lead your industry?</h2>
                        <Link href="/contact" className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:bg-primary/90 transition-colors">
                            Let's Talk →
                        </Link>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
