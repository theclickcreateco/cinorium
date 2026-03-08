import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-8">Start a Project.</h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                            Whether you're building a new brand, a high-performance platform, or looking for continuous growth, our studios are ready to partner with you.
                        </p>

                        <div className="space-y-8">
                            <div>
                                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">New Inquiries</div>
                                <div className="text-2xl font-medium">projects@cinorium.com</div>
                            </div>
                            <div>
                                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">General Inquiries</div>
                                <div className="text-2xl font-medium">hello@cinorium.com</div>
                            </div>
                            <div>
                                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Follow Us</div>
                                <div className="flex gap-6 mt-4">
                                    <span className="text-sm font-bold uppercase tracking-tighter hover:text-studio-dev cursor-pointer transition-colors">LinkedIn</span>
                                    <span className="text-sm font-bold uppercase tracking-tighter hover:text-studio-graphics cursor-pointer transition-colors">Instagram</span>
                                    <span className="text-sm font-bold uppercase tracking-tighter hover:text-studio-blinks cursor-pointer transition-colors">Twitter</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card shadow-2xl shadow-black/50 border border-border p-8 md:p-12 rounded-[40px]">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Name</label>
                                    <input type="text" className="w-full bg-background border border-border rounded-2xl px-6 py-4 outline-none focus:border-white transition-colors" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Email</label>
                                    <input type="email" className="w-full bg-background border border-border rounded-2xl px-6 py-4 outline-none focus:border-white transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Studio of Interest</label>
                                <select className="w-full bg-background border border-border rounded-2xl px-6 py-4 outline-none focus:border-white transition-colors appearance-none">
                                    <option>Select a Studio</option>
                                    <option>Development</option>
                                    <option>Graphics & Design</option>
                                    <option>Marketing & SEO</option>
                                    <option>Motion Design</option>
                                    <option>Storytelling & Animation</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Message</label>
                                <textarea rows={5} className="w-full bg-background border border-border rounded-2xl px-6 py-4 outline-none focus:border-white transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
                            </div>
                            <button className="w-full py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-transform">
                                Send Message →
                            </button>
                        </form>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
