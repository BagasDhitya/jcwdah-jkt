import { z as zod } from "zod";

export const blogSchema = zod.object({
  title: zod.string().min(3, "Title must be at least 3 characters"),
  image: zod.url("Image must be a valid URL"),
  content: zod.string().min(10, "Content must be at least 10 characters"),
  category: zod.enum(["finance", "sports", "entertainment", "business"]),
});

export type BlogFormValues = zod.infer<typeof blogSchema>;
