"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { Home, LayoutGrid, Info, Mail } from "lucide-react";

export default function Navbar() {
    const pathname = usePathname();

    const navLinks = [
        { name: "Home", href: "/", icon: Home },
        { name: "Studios", href: "/studios", icon: LayoutGrid },

        { name: "About", href: "/about", icon: Info },
        { name: "Contact", href: "/contact", icon: Mail },
    ];

    return (
        <>
            {/* Top Navbar */}
            <nav className="fixed top-0 w-full z-50 border-b border-border/5 bg-background/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
                    <Link href="/" className="text-xl font-bold tracking-tight text-foreground">CINORIUM</Link>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                        <Link
                            href="/about"
                            className={`transition-colors hover:text-foreground ${pathname === "/about" ? "text-foreground font-semibold" : ""}`}
                        >
                            About
                        </Link>
                        <Link 
                            href="/studios" 
                            className={`transition-colors hover:text-foreground ${pathname.startsWith("/studios") ? "text-foreground font-semibold" : ""}`}
                        >
                            Studios
                        </Link>

                        <Link
                            href="/contact"
                            className={`px-4 py-2 border rounded-full transition-all ${pathname === "/contact"
                                    ? "bg-primary text-primary-foreground border-primary font-bold"
                                    : "border-border hover:border-foreground hover:text-foreground"
                                }`}
                        >
                            Contact
                        </Link>
                        <ThemeToggle />
                    </div>

                    {/* Mobile Theme Toggle (visible only on mobile in header) */}
                    <div className="md:hidden">
                        <ThemeToggle />
                    </div>
                </div>
            </nav>

            {/* Mobile Bottom Dock (Floating) */}
            <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-sm">
                <nav className="bg-card/95 backdrop-blur-lg border border-border/50 shadow-xl rounded-full p-2 flex items-center justify-around">
                    {navLinks.map((link) => {
                        const Icon = link.icon;
                        const isActive = link.href === "/" 
                            ? pathname === "/" 
                            : pathname.startsWith(link.href);
                        
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`flex flex-col items-center justify-center py-2 px-4 rounded-full transition-all duration-300 ${
                                    isActive 
                                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105" 
                                    : "text-muted-foreground hover:text-foreground"
                                }`}
                            >
                                <Icon size={20} />
                                <span className={`text-[10px] mt-1 font-bold uppercase tracking-wider ${isActive ? "opacity-100" : "opacity-60"}`}>
                                    {link.name}
                                </span>
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </>
    );
}

