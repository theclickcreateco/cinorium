"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const isAboutActive = pathname === "/about";
    const isContactActive = pathname === "/contact";

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tight">CINORIUM</Link>
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                    <Link
                        href="/about"
                        className={`transition-colors hover:text-foreground ${isAboutActive ? "text-foreground font-semibold" : ""}`}
                    >
                        About
                    </Link>
                    {/* <Link href="/" className="hover:text-foreground transition-colors">Work</Link> */}
                    <Link href="/studios" className="hover:text-foreground transition-colors">Studios</Link>
                    <Link
                        href="/contact"
                        className={`px-4 py-2 border rounded-full transition-all ${isContactActive
                                ? "bg-white text-black border-white font-bold"
                                : "border-border hover:border-white hover:text-foreground"
                            }`}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}

