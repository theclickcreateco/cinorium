import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  const studios = [
    {
      id: "dev",
      name: "The Click & Create Co. — Development",
      tagline: "Code. Build. Deploy.",
      description: "A development studio dedicated to building modern websites, web applications, and high-performance digital platforms.",
      whatWeDo: ["Website development", "Web applications", "UI implementation", "performance optimization"],
      outcome: "Powerful, fast, and scalable digital platforms.",
      cta: "Explore Development →",
      color: "border-studio-dev/30 hover:border-studio-dev shadow-studio-dev/10",
      accent: "text-studio-dev"
    },
    {
      id: "graphics",
      name: "The Click & Create Co. — Graphics",
      tagline: "Click. Create. Done.",
      description: "A design studio focused on visual identity, brand assets, and digital design systems that make businesses stand out.",
      whatWeDo: ["Brand identity", "social media design", "marketing materials", "brochures & presentations"],
      outcome: "Professional visuals that strengthen brand recognition.",
      cta: "Explore Design →",
      color: "border-studio-graphics/30 hover:border-studio-graphics shadow-studio-graphics/10",
      accent: "text-studio-graphics"
    },
    {
      id: "markezo",
      name: "Markezo",
      tagline: "Growth Engineered.",
      description: "A marketing and SEO studio helping businesses increase visibility, attract traffic, and convert audiences into customers.",
      whatWeDo: ["SEO strategy", "content marketing", "local SEO", "digital campaigns"],
      outcome: "Higher visibility and measurable business growth.",
      cta: "Explore Marketing →",
      color: "border-studio-markezo/30 hover:border-studio-markezo shadow-studio-markezo/10",
      accent: "text-studio-markezo"
    },
    {
      id: "blinks",
      name: "BlinksArts",
      tagline: "Motion. Story. Emotion.",
      description: "A motion design studio creating engaging animated visuals that capture attention and communicate ideas effectively.",
      whatWeDo: ["motion graphics", "animated explainers", "brand animations", "social media motion content"],
      outcome: "Dynamic visuals that bring brands and stories to life.",
      cta: "Explore Motion →",
      color: "border-studio-blinks/30 hover:border-studio-blinks shadow-studio-blinks/10",
      accent: "text-studio-blinks"
    },
    {
      id: "valoria",
      name: "Valoria",
      tagline: "Animation Studio",
      description: "A creative animation studio focused on storytelling, world-building, and cinematic animated productions.",
      whatWeDo: ["animated series", "character animation", "visual storytelling", "cinematic animation projects"],
      outcome: "Immersive animated experiences and stories.",
      cta: "Explore Studio →",
      color: "border-studio-valoria/30 hover:border-studio-valoria shadow-studio-valoria/10",
      accent: "text-studio-valoria"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-20 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-studio-dev/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-studio-graphics/30 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-studio-dev font-semibold tracking-wider uppercase text-sm mb-6 animate-fade-in">CINORIUM — Designed to Lead.</h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            A collective of specialized studios building brands and digital platforms.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            From branding and development to marketing, motion design, and animation — CINORIUM connects creativity and technology to help businesses build powerful digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/studios" className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-white/5 inline-flex justify-center items-center">
              Explore Our Studios →
            </Link>
            <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-secondary text-secondary-foreground border border-border rounded-full font-semibold hover:bg-accent transition-all inline-flex justify-center items-center">
              Start a Project →
            </Link>
          </div>
        </div>
      </section>

      {/* Our Studios Section */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Five Studios. One Digital Ecosystem.</h2>
            <p className="text-muted-foreground text-lg">
              Each CINORIUM studio focuses on a specific part of the digital world. Together, they create complete digital systems for businesses and brands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studios.map((studio) => (
              <Link
                href={`/studios/${studio.id}`}
                key={studio.id}
                className={`p-8 rounded-3xl border bg-card transition-all duration-300 flex flex-col h-full group ${studio.color} hover:shadow-2xl`}
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-foreground transition-colors">{studio.name}</h3>
                  <div className={`text-sm font-semibold tracking-widest uppercase ${studio.accent}`}>{studio.tagline}</div>
                </div>

                <p className="text-muted-foreground mb-8 text-sm leading-relaxed grow">
                  {studio.description}
                </p>

                <div className="space-y-6">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground/50 mb-3">What we do</div>
                    <ul className="space-y-2">
                      {studio.whatWeDo.map((item, i) => (
                        <li key={i} className="text-sm flex items-center gap-2">
                          <span className={`w-1 h-1 rounded-full ${studio.accent.replace('text-', 'bg-')}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-border/50">
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground/50 mb-2">Outcome</div>
                    <p className="text-sm font-medium">{studio.outcome}</p>
                  </div>

                  <div className={`mt-4 text-sm font-bold flex items-center gap-2 transition-transform group-hover:translate-x-1 ${studio.accent}`}>
                    {studio.cta}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-24 px-6 relative overflow-hidden bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">The CINORIUM Digital Ecosystem</h2>
            <p className="text-muted-foreground text-lg">
              Every project within CINORIUM moves through a connected creative pipeline — from concept and design to technology, growth, and storytelling.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 -z-10" />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {[
                { name: "Brand Identity", icon: "✨", colorVar: "var(--color-studio-graphics)", textClass: "text-studio-graphics" },
                { name: "Digital Platforms", icon: "💻", colorVar: "var(--color-studio-dev)", textClass: "text-studio-dev" },
                { name: "Marketing & SEO", icon: "📈", colorVar: "var(--color-studio-markezo)", textClass: "text-studio-markezo" },
                { name: "Motion Design", icon: "🎬", colorVar: "var(--color-studio-blinks)", textClass: "text-studio-blinks" },
                { name: "Animation & Storytelling", icon: "🎨", colorVar: "var(--color-studio-valoria)", textClass: "text-studio-valoria" }
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center group relative w-full cursor-default">
                  
                  {/* The Box */}
                  <div 
                    className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center text-2xl mb-4 relative z-10 transition-all duration-500 group-hover:scale-110"
                  >
                     <div 
                       className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                       style={{ 
                         boxShadow: `0 0 30px -5px ${step.colorVar}`,
                         border: `1px solid ${step.colorVar}` 
                       }}
                     />
                    <span className={`relative z-10 transition-transform duration-500 group-hover:scale-110 ${step.textClass}`}>{step.icon}</span>
                  </div>

                  {/* Connecting Line */}
                  {i < 4 && (
                    <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-[2px] bg-border/50 -translate-y-1/2 z-0 overflow-hidden rounded-full">
                      {/* Expanding glowing line */}
                      <div 
                        className="absolute top-0 left-0 h-full w-0 transition-all duration-700 ease-in-out group-hover:w-full"
                        style={{
                           background: `linear-gradient(90deg, transparent, ${step.colorVar})`,
                           boxShadow: `0 0 10px ${step.colorVar}`
                        }}
                      />
                    </div>
                  )}

                  {/* Glowing Arrow head that travels */}
                  {i < 4 && (
                    <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-[2px] -translate-y-1/2 z-0 pointer-events-none">
                       <div 
                         className="absolute top-1/2 -translate-y-1/2 -translate-x-full left-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out group-hover:left-[100%] w-5 h-5 flex items-center justify-center"
                       >
                         <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" style={{ color: step.colorVar, filter: `drop-shadow(0 0 8px ${step.colorVar})` }}>
                           <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                         </svg>
                       </div>
                    </div>
                  )}

                  <div className="text-sm font-bold text-center group-hover:text-foreground transition-colors">{step.name}</div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center mt-12 text-muted-foreground italic">
            This system allows brands to build complete digital experiences under one ecosystem.
          </p>
        </div>
      </section>

      {/* Selected Work Section */}
      {/* <section className="py-24 px-6 bg-zinc-950/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Across Our Studios</h2>
              <p className="text-muted-foreground">Explore some of the digital projects created by the CINORIUM studios.</p>
            </div>
            <button className="text-sm font-bold flex items-center gap-2 hover:translate-x-1 transition-transform">
              View More Projects →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Brand Identity + Website", category: "Graphics + Dev", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
              { title: "Marketing Campaign", category: "Markezo", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
              { title: "Motion Explainer Video", category: "BlinksArts", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800" },
              { title: "Animated Story Project", category: "Valoria", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" }
            ].map((work, i) => (

              <div key={i} className="group relative rounded-3xl overflow-hidden aspect-video cursor-pointer">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end">
                  <div className="text-xs font-bold uppercase tracking-widest mb-2 opacity-70">{work.category}</div>
                  <h3 className="text-2xl font-bold">{work.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Why CINORIUM Section */}
      <section className="py-24 px-6 border-y border-border/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Why Businesses Partner With CINORIUM</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: "Specialized Studios", desc: "Each brand focuses on a specific discipline to deliver expert results." },
              { title: "Creative + Technical Balance", desc: "Design, development, marketing, and storytelling working together." },
              { title: "Growth-Focused Approach", desc: "Every project aims to create measurable impact and long-term value." },
              { title: "Future-Ready Systems", desc: "Built for scalability, performance, and evolving digital landscapes." }
            ].map((point, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center font-bold text-sm bg-secondary">0{i + 1}</div>
                <h3 className="text-xl font-bold">{point.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Growth Partnership Section */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Continuous Digital Growth</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our studios also provide ongoing support to maintain and improve digital platforms, marketing performance, and creative assets.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "website maintenance",
                "SEO optimization",
                "marketing creatives",
                "social media visuals",
                "performance analytics"
              ].map((service, i) => (
                <div key={i} className="flex items-center gap-3 text-sm font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-studio-markezo" />
                  {service}
                </div>
              ))}
            </div>
            <Link href="/contact" className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:bg-primary/90 transition-colors">
              Join Our Growth Partnership →
            </Link>
          </div>
          <div className="lg:w-1/2 w-full aspect-square relative rounded-3xl overflow-hidden border border-border bg-card/50 flex items-center justify-center p-12">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-studio-markezo/50 rounded-full blur-[100px]" />
            </div>
            <div className="text-center">
              <div className="text-6xl mb-6">🚀</div>
              <div className="text-4xl font-bold mb-2">Growth Engineered.</div>
              <div className="text-muted-foreground uppercase tracking-widest text-xs font-bold">Markezo & Co.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-studio-dev/20 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-studio-graphics/20 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Let’s Build Something Exceptional.</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Partner with CINORIUM to design, build, and grow your digital presence with a connected ecosystem of creative studios.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="w-full sm:w-auto px-10 py-5 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:scale-105 transition-transform inline-flex justify-center items-center">
              Start Your Project →
            </Link>
            <Link href="/studios" className="w-full sm:w-auto px-10 py-5 bg-secondary text-secondary-foreground border border-border rounded-full font-bold text-lg hover:bg-accent transition-colors inline-flex justify-center items-center">
              Explore Our Studios →
            </Link>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}


