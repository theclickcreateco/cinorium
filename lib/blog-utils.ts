export function calculateReadTime(content: string): string {
  const wordsPerMinute = 200; // Average reading speed
  const text = content.trim();
  const wordCount = text.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / wordsPerMinute);
  
  if (readTime <= 1) {
    return "1 min read";
  }
  
  return `${readTime} min read`;
}
