"use server";

import prisma from "../../lib/prisma";
import { revalidatePath } from "next/cache";

export async function ratePost(postId: string, rating: number) {
  if (rating < 1 || rating > 5) {
    throw new Error("Invalid rating score. It must be between 1 and 5.");
  }

  try {
    await prisma.post.update({
      where: { id: postId },
      data: {
        ratingSum: { increment: rating },
        ratingCount: { increment: 1 },
      },
    });

    revalidatePath("/blog");
    revalidatePath(`/blog/[slug]`, "page");
    
    return { success: true };
  } catch (error) {
    console.error("Failed to rate post:", error);
    return { success: false, error: "Failed to submit rating." };
  }
}
