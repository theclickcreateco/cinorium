import { Twitter, Instagram, Facebook } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-20 px-6 border-t border-border">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div className="lg:col-span-1">
                    <div className="text-2xl font-bold mb-4 tracking-tighter">CINORIUM</div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        Designed to Lead.
                    </p>
                    <div className="text-xs text-muted-foreground/50 italic">
                        © {new Date().getFullYear()} CINORIUM. All rights reserved.
                    </div>
                </div>

                <div>
                    <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-muted-foreground">Studios</h4>
                    <ul className="space-y-4 text-sm text-muted-foreground">
                        <li className="hover:text-white transition-colors text-xs font-medium uppercase tracking-tight">
                            <Link href="/studios/dev">The Click & Create Co. — Dev</Link>
                        </li>
                        <li className="hover:text-white transition-colors text-xs font-medium uppercase tracking-tight">
                            <Link href="/studios/graphics">The Click & Create Co. — Graphics</Link>
                        </li>
                        <li className="hover:text-white transition-colors text-xs font-medium uppercase tracking-tight">
                            <Link href="/studios/markezo">Markezo</Link>
                        </li>
                        <li className="hover:text-white transition-colors text-xs font-medium uppercase tracking-tight">
                            <Link href="/studios/blinksArts">BlinksArts</Link>
                        </li>
                        <li className="hover:text-white transition-colors text-xs font-medium uppercase tracking-tight">
                            <Link href="/studios/valoria">Valoria</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-muted-foreground">Links</h4>
                    <ul className="space-y-4 text-sm text-muted-foreground">
                        <li className="hover:text-white transition-colors cursor-pointer">About</li>
                        {/* <li className="hover:text-white transition-colors cursor-pointer">Work</li> */}
                        <li className="hover:text-white transition-colors cursor-pointer">Studios</li>
                        <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-muted-foreground">Connect</h4>
                    <div className="flex gap-6 text-muted-foreground">
                        <a
                            href="https://x.com/cinorium_"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                            aria-label="X (Twitter)"
                        >
                            <Twitter size={20} />
                        </a>
                        <a
                            href="https://www.facebook.com/cinorium"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                            aria-label="Facebook"
                        >
                            <Facebook size={20} />
                        </a>
                        <a
                            href="https://www.instagram.com/cinorium_/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                            aria-label="Instagram"
                        >
                            <Instagram size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

