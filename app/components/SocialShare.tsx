"use client";

import { Share2, Twitter, Facebook, Linkedin, Link as LinkIcon, Check } from "lucide-react";
import { useState } from "react";

interface SocialShareProps {
  title: string;
  url: string;
}

export default function SocialShare({ title, url }: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50">Share this article</div>
      <div className="flex flex-wrap items-center gap-3">
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 hover:scale-110"
          title="Share on X (Twitter)"
        >
          <Twitter size={18} />
        </a>
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
          title="Share on Facebook"
        >
          <Facebook size={18} />
        </a>
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all duration-300 hover:scale-110"
          title="Share on LinkedIn"
        >
          <Linkedin size={18} />
        </a>
        <button
          onClick={copyToClipboard}
          className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
          title="Copy Link"
        >
          {copied ? <Check size={18} /> : <LinkIcon size={18} />}
        </button>
      </div>
    </div>
  );
}
