import * as z from "zod"

export const infoSchema = z.object({
	title: z
		.string({ required_error: "Title is required" })
		.min(1, { message: "Title is required" }),
	description: z
		.string({ required_error: "Description is required" })
		.min(1, { message: "Description is required" }),
	goal: z
		.string({ required_error: "Goal is required" })
		.min(1, { message: "Goal is required" }),
})
export type InfoSchemaType = z.infer<typeof infoSchema>
