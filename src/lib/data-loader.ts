import path from "node:path";
import fs from "node:fs";
import { BlogPost, FAQItem, Review, SalonInfo, Service, Staff } from "@/types";

function readJsonFile<T>(filename: string): T {
  const filePath = path.join(process.cwd(), "src", "data", filename);
  const file = fs.readFileSync(filePath, "utf8");
  return JSON.parse(file) as T;
}

export function getServices(): Service[] {
  const data = readJsonFile<Service[]>("services.json");
  return data.sort((a, b) => a.order - b.order);
}

export function getReviews(): Review[] {
  const data = readJsonFile<Review[]>("reviews.json");
  return data.sort((a, b) => a.date.localeCompare(b.date));
}

export function getStaff(): Staff[] {
  const data = readJsonFile<Staff[]>("staff.json");
  return data.sort((a, b) => a.order - b.order);
}

export function getBlogPosts(): BlogPost[] {
  const data = readJsonFile<BlogPost[]>("blog-posts.json");
  return data.filter((post) => post.isPublished).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getFaqItems(): FAQItem[] {
  const data = readJsonFile<FAQItem[]>("faq.json");
  return data.sort((a, b) => a.order - b.order);
}

export function getSalonInfo(): SalonInfo {
  return readJsonFile<SalonInfo>("salon-info.json");
}
