import * as z from "zod"

export const basePrototypeSchema = z.object({
	processName: z
		.string({ required_error: "Process name must be a string" })
		.min(1, { message: "Process name must be a string" }),
	prototypeLink: z
		.string({ required_error: "Prototype Link is required" })
		.min(1, { message: "Prototype Link must be a string" })
		.url({ message: "Prototype Link must be a valid url" }),
	status: z.enum(["complete", "incomplete"]),
	requestType: z
		.string({ required_error: "Request type is required" })
		.min(1, { message: "Request type is required" }),

	prototypeType: z.enum(["figma", "sketch"]),
})
export type BasePrototypeSchemaType = z.infer<typeof basePrototypeSchema>

export const TaskSchema = z.object({
	instructions: z.array(z.string()),
	type: z
		.array(z.enum(["timed", "recorded"]))
		.max(2)
		.min(1),
})

export type TaskSchemaType = z.infer<typeof TaskSchema>

export const ratingsFeedbackSchema = z.object({
	feedbackType: z.literal("Scale"),
	questions: z.array(
		z.object({
			question: z.string(),
			ratingType: z.enum(["number", "star", "experience", ""]),
			lowerLabel: z.string(),
			upperLabel: z.string(),
			scale: z.enum(["5", "10", "15", "20"]),
		})
	),
})
export type ratingsFeedbackSchemaType = z.infer<typeof ratingsFeedbackSchema>

export const interviewsFeedbackSchema = z.object({
	feedbackType: z.literal("Interview"),
	questions: z.array(z.string({ required_error: "Question is required" })),
	recordingOption: z.string({
		required_error: "Recording option is required",
	}),
})

export type interviewsFeedbackSchemaType = z.infer<
	typeof interviewsFeedbackSchema
>

export type PrototypeFlowType =
	| (interviewsFeedbackSchemaType & BasePrototypeSchemaType)
	| (ratingsFeedbackSchemaType & BasePrototypeSchemaType)
	| (TaskSchemaType & BasePrototypeSchemaType)
