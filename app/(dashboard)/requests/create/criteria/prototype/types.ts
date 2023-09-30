import * as z from "zod"

export const basePrototypeSchema = z.object({
	processName: z.string().min(1, { message: "Process name must be a string" }),
	prototypeLink: z
		.string()
		.min(1, { message: "Prototype Link must be a string" })
		.url({ message: "Prototype Link must be a valid url" }),
	status: z.enum(["complete", "incomplete"]),
	requestType: z.enum(["Tasks", "Feedbacks"]),
	prototypeType: z.enum(["figma", "sketch"]),
})
export type BasePrototypeSchemaType = z.infer<typeof basePrototypeSchema>

export const TaskSchema = z.object({
	instructions: z.array(z.string()),
	type: z.enum(["timed", "recorded"]),
})

export type TaskSchemaType = z.infer<typeof TaskSchema>

export const ratingsFeedbackSchema = z.object({
	feedbackType: z.literal("Rating"),
	questions: z.array(
		z.object({
			question: z.string(),
			ratingType: z.enum(["number", "star"]),
			lowerLabel: z.string(),
			upperLabel: z.string(),
			scale: z.enum(["5", "10", "15", "20"]),
		})
	),
})
export type ratingsFeedbackSchemaType = z.infer<typeof ratingsFeedbackSchema>

export const interviewsFeedbackSchema = z.object({
	feedbackType: z.literal("Interview"),
	questions: z.array(
		z.object({
			recordingOption: z.enum(["video", "audio"]),
			question: z.string(),
		})
	),
})

export type interviewsFeedbackSchemaType = z.infer<
	typeof interviewsFeedbackSchema
>

export type PrototypeFlowType =
	| (interviewsFeedbackSchemaType & BasePrototypeSchemaType)
	| (ratingsFeedbackSchemaType & BasePrototypeSchemaType)
	| (TaskSchemaType & BasePrototypeSchemaType)
