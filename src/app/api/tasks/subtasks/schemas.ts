import { z } from "zod";

export const SubtaskSchema = z.object({
  taskId: z.string(),
  description: z.string(),
});
