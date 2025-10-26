import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "y8l2mbof",
  dataset: "production",
  apiVersion: "2025-07-09",
  useCdn: false,
});