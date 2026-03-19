"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { ratePost } from "../blog/actions";

interface BlogRatingProps {
  postId: string;
  initialRatingSum: number;
  initialRatingCount: number;
}

export default function BlogRating({ postId, initialRatingSum, initialRatingCount }: BlogRatingProps) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const averageRating = initialRatingCount > 0 
    ? (initialRatingSum / initialRatingCount).toFixed(1) 
    : "0.0";

  const handleRate = async (value: number) => {
    if (submitted || isSubmitting) return;
    
    setIsSubmitting(true);
    setRating(value);
    
    try {
      const result = await ratePost(postId, value);
      if (result.success) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Error submitting rating:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-8 border-y border-border/50 my-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div>
        <h3 className="text-lg font-bold mb-1">Was this helpful?</h3>
        <p className="text-sm text-muted-foreground">
          {initialRatingCount} {initialRatingCount === 1 ? "person" : "people"} rated this article • Average: {averageRating}/5.0
        </p>
      </div>

      <div className="flex items-center gap-2">
        {submitted ? (
          <div className="text-primary font-bold animate-fade-in flex items-center gap-2">
            <span>✨</span> Thank you for your feedback!
          </div>
        ) : (
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className={`transition-all duration-200 ${isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:scale-120 active:scale-95"}`}
                onClick={() => handleRate(star)}
                onMouseEnter={() => !isSubmitting && setHover(star)}
                onMouseLeave={() => !isSubmitting && setHover(0)}
                disabled={isSubmitting}
              >
                <Star
                  size={28}
                  className={`transition-colors duration-200 ${
                    (hover || rating) >= star 
                      ? "fill-primary text-primary" 
                      : "text-muted-foreground/30"
                  }`}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
