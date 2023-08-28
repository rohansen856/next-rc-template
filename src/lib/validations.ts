import { z } from "zod"

export const ogImageSchema = z.object({
  heading: z.string(),
  type: z.string(),
  mode: z.enum(["light", "dark"]).default("dark"),
})

export const userNameSchema = z.object({
  name: z.string().min(3).max(32),
})
