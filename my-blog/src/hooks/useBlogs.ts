import { useState, useEffect } from "react";
import axiosInstance from "../utils/api";

export type Blog = {
  objectId?: string; // backendless default id
  title: string;
  image: string;
  content: string;
  category: "finance" | "sports" | "entertainment" | "business";
};

export function useBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // GET : ambil data dari blogs
  async function fetchBlogs() {
    setLoading(true);
    try {
      const response = await axiosInstance.get<Blog[]>("api/data/blogs");
      setBlogs(response.data);
      setError(null);
    } catch (error: any) {
      setError(error.message || "Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  }

  // POST : bikin konten baru
  async function createBlog(data: Blog) {
    try {
      const response = await axiosInstance.post<Blog>("api/data/blogs", data);
      setBlogs((prev) => [...prev, response.data]);
      return response.data;
    } catch (error: any) {
      throw new Error(error.message || "Failed to create blog");
    }
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  return { blogs, loading, error, createBlog };
}
