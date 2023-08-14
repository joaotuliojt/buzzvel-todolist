import { z } from "zod";

export const TaskSchema = z.object({
  description: z.string(),
});
