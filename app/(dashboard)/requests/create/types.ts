import * as z from "zod"

export const infoSchema = z.object({
	// title: z.string().min(1, { message: "TItle is required" }),
	// description: z.string().min(1, { message: "Description is required" }),
	// goal: z.string().min(1, { message: "Goal is required" }),
})
export type InfoSchemaType = z.infer<typeof infoSchema>
