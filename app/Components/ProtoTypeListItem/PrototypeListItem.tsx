import {
	Flex,
	Stack,
	Text,
	Group,
	Image as MantineImage,
	Collapse,
	Center,
	Box,
	Divider,
} from "@mantine/core"
import styles from "./PrototypeListItem.module.css"
import figma from "@/public/images/figma.png"
import sketch from "@/public/images/sketch.png"
import cx from "clsx"
import Image from "next/image"
import { PrototypeFlowType } from "@/app/(dashboard)/requests/create/criteria/prototype/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, SubmitHandler } from "react-hook-form"
import CustomSwitch from "../CustomSwitch/CustomSwitch"
import CustomButton from "../Button/Button"
import CustomTextInput from "../Inputs/TextInput"
import CustomSelect from "../Inputs/Select"
import * as z from "zod"
import { useMemo, useState } from "react"
import {
	Timed,
	HelpCircle,
	Record,
	Rename,
	New,
	Hourglass,
	Complete,
	Arrow,
	ExpandMore,
	NumberScale,
	StarScale,
	EmojiScale,
} from "@/public/icons"
import FeedbackCard from "./FeedbackCard"
import RatingCard from "./RatingCard"

interface IProps {
	requestType: string
	processName: string
	prototypeType: "figma" | "sketch"
	prototypeLink: string
	status: "complete" | "incomplete"
	active: boolean
	onClick: () => void
	onSave: (val: PrototypeFlowType) => void
}

const interviewsFormSchema = z.object({
	feedbackType: z.literal("Interview"),
	question: z
		.string({ required_error: "Question is required" })
		.min(1, { message: "Question is required" }),
})

type interviewsFormSchemaType = z.infer<typeof interviewsFormSchema>

const TaskFormSchema = z.object({
	instruction: z.string().min(1, {
		message: "Instruction must be a string",
	}),
	type: z
		.array(z.enum(["timed", "recorded"]))
		.min(1)
		.max(2),
})
type TaskSchemaFormType = z.infer<typeof TaskFormSchema>

export const ratingsFormSchema = z.object({
	feedbackType: z.literal("Scale"),
	question: z.string(),
	ratingType: z.enum(["number", "star", "experience", ""]),
	lowerLabel: z.string(),
	upperLabel: z.string(),
	scale: z.enum(["5", "10", "15", "20"]),
})
export type ratingsFormSchemaType = z.infer<typeof ratingsFormSchema>

export default function PrototypeListItem({
	processName,
	requestType,
	prototypeType,
	prototypeLink,
	status,
	active,
	onClick,
	onSave,
}: IProps) {
	const [instructions, setInstructions] = useState<string[]>([])
	const [addNew, setAddNew] = useState<boolean>(true)
	const [interviewQuestions, setInterviewQuestions] = useState<string[]>([])
	const [savedInterviewQuestions, setSavedInterviewQuestions] = useState<
		string[]
	>([])
	const [recordingOption, setRecordingOption] = useState<
		"" | "video" | "audio"
	>("")

	const [ratingQuestions, setRatingQuestions] = useState<
		ratingsFormSchemaType[]
	>([])

	const modifiedFeedback = useMemo(() => {
		const modifiedInterview = savedInterviewQuestions.map(interview => ({
			question: interview,
			type: "Interview",
		}))
		const modifiedRating = ratingQuestions.map(rating => ({
			...rating,
			question: rating.question,
			type: "Scale",
		}))

		return [...modifiedInterview, ...modifiedRating]
	}, [savedInterviewQuestions, ratingQuestions])

	const [feedback, setFeedback] = useState<"Interview" | "Scale" | "">("")
	const [ratingType, setRatingType] = useState<
		"" | "number" | "star" | "experience"
	>("")
	const {
		handleSubmit: handleTaskSubmit,
		control: TaskControl,
		setValue: TaskSetValue,
		reset: TaskReset,
		getValues,
		watch: watchTaskValues,
	} = useForm<TaskSchemaFormType>({
		resolver: zodResolver(TaskFormSchema),
		defaultValues: { instruction: "", type: [] },
	})

	const {
		handleSubmit: handleInterviewSubmit,
		control: InterviewControl,
		reset: InterviewReset,
	} = useForm<interviewsFormSchemaType>({
		resolver: zodResolver(interviewsFormSchema),
		defaultValues: {
			question: "",
			feedbackType: "Interview",
		},
	})

	const {
		handleSubmit: handleRatingSubmit,
		control: RatingControl,
		reset: RatingReset,
		setValue: RatingSetValue,
		watch: RatingWatchValue,
	} = useForm<ratingsFormSchemaType>({
		resolver: zodResolver(ratingsFormSchema),
		defaultValues: {
			feedbackType: "Scale",
			ratingType: "",
			question: "",
			lowerLabel: "",
			upperLabel: "",
			scale: "5",
		},
	})

	const taskSubmitHandler: SubmitHandler<
		TaskSchemaFormType
	> = async values => {
		const { type } = values

		const prototypeTask: PrototypeFlowType = {
			type,
			instructions,
			processName,
			prototypeLink,
			prototypeType,
			status: "complete",
			requestType,
		}
		onSave(prototypeTask)
		TaskReset()
	}

	const interviewSubmitHandler: SubmitHandler<
		interviewsFormSchemaType
	> = async values => {
		const { question } = values

		setInterviewQuestions(oldQuestions => [...oldQuestions, question])
		InterviewReset()
	}

	const ratingSubmitHandler: SubmitHandler<
		ratingsFormSchemaType
	> = async values => {
		setRatingQuestions(question => [...question, values])
		setFeedback("")
		setRatingType("")
		RatingReset()
	}

	return (
		<Flex
			className={styles.root}
			direction='column'
		>
			<Flex
				onClick={() => onClick()}
				className={cx(styles.head, {
					[styles.headActive]: active,
				})}
				align='center'
				justify='space-between'
			>
				<Stack gap='0rem'>
					<Text
						component='h6'
						className={styles.headTitle}
					>
						{processName}
					</Text>
					<Text
						component='p'
						className={styles.headSubtext}
					>
						{requestType}
					</Text>
				</Stack>
				<Group gap='1.6rem'>
					<Group
						gap='1rem'
						className={styles.headLink}
					>
						<MantineImage
							component={Image}
							src={prototypeType === "sketch" ? sketch : figma}
							alt='icon'
							height={24}
							width={24}
							className={cx(styles.headLinkImg, {
								[styles.sketchImg]: prototypeType === "sketch",
							})}
						/>
						<Text
							component='p'
							className={styles.headLinkText}
						>
							{prototypeLink}
						</Text>
					</Group>
					<Group
						className={cx(styles.icon, {
							[styles.incomplete]: status === "incomplete",
							[styles.pending]: active,
							[styles.complete]: status === "complete",
							[styles.tasks]:
								requestType === "Feedbacks" && status === "complete",
						})}
						gap='0.8rem'
						align='center'
						justify='center'
					>
						{status === "complete" ? (
							<>
								{requestType === "Feedbacks" ? (
									<Text className={styles.tasksText}>{3}</Text>
								) : null}
								<Complete />
							</>
						) : (
							<Hourglass
								className={cx({
									[styles.incompleteIcon]: status === "incomplete",
									[styles.pendingIcon]: active,
								})}
							/>
						)}
					</Group>
				</Group>
			</Flex>
			<Collapse in={active}>
				{requestType === "Tasks" ? (
					<form
						className={styles.formActive}
						onSubmit={handleTaskSubmit(taskSubmitHandler)}
					>
						{instructions.length > 0
							? instructions.map(instruction => (
									<Flex
										align='center'
										justify='space-between'
										key={instruction}
										className={styles.instruction}
									>
										<Group gap='1.6rem'>
											<Rename className={styles.newIcon} />
											<Text className={styles.instructionText}>
												{instruction}
											</Text>
										</Group>
										<Record className={styles.helpIcon} />
									</Flex>
							  ))
							: null}
						<CustomTextInput
							name='instruction'
							placeholder='Instruction'
							label='Instruction'
							control={TaskControl}
							rightSection={<HelpCircle className={styles.helpIcon} />}
						/>
						<Flex
							className={styles.taskTypeRoot}
							justify='space-between'
						>
							<Flex
								className={styles.taskType}
								justify='space-between'
							>
								<Group gap='0.8rem'>
									<Timed className={styles.taskTypeIcon} />
									<Text className={styles.taskTypeText}>
										Timed Task
									</Text>
								</Group>
								<CustomSwitch
									label='timed'
									active={
										watchTaskValues("type").indexOf("timed") > -1
									}
									onChange={() => {
										const type = getValues("type")
										if (type.indexOf("timed") === -1) {
											TaskSetValue("type", ["timed", ...type])
										} else {
											TaskSetValue(
												"type",
												type.filter(t => t !== "timed")
											)
										}
									}}
								/>
							</Flex>

							<Flex
								className={styles.taskType}
								justify='space-between'
							>
								<Group gap='0.8rem'>
									<Record className={styles.taskTypeIcon} />
									<Text className={styles.taskTypeText}>
										Recorded Task
									</Text>
								</Group>
								<CustomSwitch
									active={
										watchTaskValues("type").indexOf("recorded") > -1
									}
									label='recorded'
									onChange={() => {
										const type = getValues("type")
										if (type.indexOf("recorded") === -1) {
											TaskSetValue("type", ["recorded", ...type])
										} else {
											TaskSetValue(
												"type",
												type.filter(t => t !== "recorded")
											)
										}
									}}
								/>
							</Flex>
						</Flex>
						<Group justify='space-between'>
							<CustomButton
								title='Add Instructions'
								variant='outlined'
								type='button'
								rightSection={<New className={styles.newIcon} />}
								disabled={
									!watchTaskValues("instruction") ||
									watchTaskValues("type").length < 1
								}
								action={() => {
									if (!watchTaskValues("instruction")) {
										return
									}

									const newInstruction = getValues("instruction")
									setInstructions(instruction => [
										...instruction,
										newInstruction,
									])
									TaskReset()
								}}
							/>
							<CustomButton
								title='Save'
								variant='outlined'
								type='button'
								disabled={Boolean(
									instructions.length < 1 || !watchTaskValues("type")
								)}
								action={() => {
									const type = getValues("type")
									const prototypeTask: PrototypeFlowType = {
										type,
										instructions,
										processName,
										prototypeLink,
										prototypeType,
										status: "complete",
										requestType,
									}
									onSave(prototypeTask)
									TaskReset()
								}}
								rightSection={
									<Center className={styles.arrowIcon}>
										<Arrow />
									</Center>
								}
							/>
						</Group>
					</form>
				) : null}

				{requestType === "Feedbacks" ? (
					<>
						<Collapse in={addNew}>
							<Flex className={styles.formActive}>
								{/* <CustomSelect
									name='FeedbackType'
									data={[
										{ label: "Interview", value: "Interview" },
										{ label: "Scale", value: "Scale" },
									]}
									placeholder='Feedback Type'
									value={feedback}
									onChange={value => {
										setFeedback(value as "" | "Interview" | "Scale")
										setAddNew(false)
									}}
								/> */}
								<FeedbackCard
									value={feedback}
									onChange={e => {
										if (e === feedback) {
											setFeedback("")
										} else {
											setFeedback(e)
										}
									}}
								/>
								<Collapse in={!!feedback}>
									<Flex
										w='100%'
										pt='1.6rem'
										justify='center'
									>
										<CustomButton
											title='Select Option'
											variant='outlined'
											type='button'
											action={() => {
												setAddNew(false)
											}}
											rightSection={
												<Center className={styles.arrowIcon}>
													<Arrow />
												</Center>
											}
										/>
									</Flex>
								</Collapse>
							</Flex>
						</Collapse>

						<Collapse
							in={
								modifiedFeedback.length > 0 &&
								!addNew &&
								feedback === ""
							}
						>
							<Box className={styles.formActive}>
								{modifiedFeedback.map(question => {
									return (
										<Flex
											align='center'
											justify='space-between'
											key={question.question}
											className={styles.instruction}
										>
											<Group gap='1.6rem'>
												<Rename className={styles.newIcon} />
												<Text className={styles.instructionText}>
													{question.question}
												</Text>
											</Group>
											<Record className={styles.helpIcon} />
										</Flex>
									)
								})}
								<Group justify='space-between'>
									<CustomButton
										title='Add Feedback'
										variant='outlined'
										type='button'
										rightSection={<New className={styles.newIcon} />}
										action={() => {
											setAddNew(true)
										}}
									/>
									<CustomButton
										title='Save'
										variant='outlined'
										type='button'
										action={() => {
											if (savedInterviewQuestions.length > 0) {
												const interviewsParsed: PrototypeFlowType =
													{
														processName,
														prototypeLink,
														status: "complete",
														requestType,
														prototypeType,
														feedbackType:
															"Interview" as "Interview",
														questions: savedInterviewQuestions,
														recordingOption,
													}
												onSave(interviewsParsed)
												InterviewReset()
											}

											if (ratingQuestions.length > 0) {
												const ratingParsed: PrototypeFlowType = {
													processName,
													prototypeLink,
													status: "complete",
													requestType,
													prototypeType,
													feedbackType: "Scale" as "Scale",
													questions: ratingQuestions.map(q => ({
														question: q.question,
														ratingType: q.ratingType,
														lowerLabel: q.lowerLabel,
														upperLabel: q.upperLabel,
														scale: q.scale,
													})),
												}
												onSave(ratingParsed)
												RatingReset()
												setRecordingOption("")
											}
										}}
										rightSection={
											<Center className={styles.arrowIcon}>
												<Arrow />
											</Center>
										}
									/>
								</Group>
							</Box>
						</Collapse>

						<Collapse in={feedback === "Interview" && !addNew}>
							<form
								className={styles.formActive}
								onSubmit={handleInterviewSubmit(interviewSubmitHandler)}
							>
								<Group
									onClick={() => {
										setFeedback("")
										setAddNew(true)
									}}
									gap='1rem'
									className={styles.formHead}
								>
									<ExpandMore className={styles.formHeadIcon} />
									<Text className={styles.formHeadText}>
										{feedback}
									</Text>
								</Group>
								<Divider />
								{interviewQuestions.map(question => {
									return (
										<Flex
											align='center'
											justify='space-between'
											key={question}
											className={styles.instruction}
										>
											<Group gap='1.6rem'>
												<Rename className={styles.newIcon} />
												<Text className={styles.instructionText}>
													{question}
												</Text>
											</Group>
											<Record className={styles.helpIcon} />
										</Flex>
									)
								})}
								<Stack
									p='1.6rem'
									gap='1.6rem'
									bg='white'
									className={styles.questionCard}
								>
									<CustomTextInput
										name='question'
										placeholder='Question'
										label='Question'
										control={InterviewControl}
										rightSection={
											<HelpCircle className={styles.helpIcon} />
										}
									/>
									<CustomButton
										title='Add  Question'
										// type='button'
										variant='outlined'
										fullWidth
										type='submit'
										// action={submitWithoutConfigure}
										rightSection={
											<Center className={styles.iconFill}>
												<New />
											</Center>
										}
									/>
								</Stack>
								<CustomSelect
									data={[
										{ label: "Video", value: "video" },
										{ label: "Audio", value: "audio" },
									]}
									name='recordingOption'
									placeholder='Recording Option'
									value={recordingOption}
									onChange={e =>
										setRecordingOption(e as "audio" | "video" | "")
									}
								/>
								<Group justify='flex-end'>
									<CustomButton
										title='Save'
										variant='outlined'
										// type='submit'
										type='button'
										disabled={
											recordingOption.length < 1 ||
											interviewQuestions.length < 1
										}
										rightSection={
											<Center className={styles.arrowIcon}>
												<Arrow />
											</Center>
										}
										action={() => {
											// setRecordingOption("")
											setInterviewQuestions([])
											setSavedInterviewQuestions(o => [
												...o,
												...interviewQuestions,
											])
											setFeedback("")
										}}
									/>
								</Group>
							</form>
						</Collapse>
						<Collapse in={feedback === "Scale" && !addNew}>
							<form
								className={styles.formActive}
								onSubmit={handleRatingSubmit(ratingSubmitHandler)}
							>
								<Group
									onClick={() => {
										setFeedback("")
										setAddNew(true)
									}}
									gap='1rem'
									className={styles.formHead}
								>
									<ExpandMore className={styles.formHeadIcon} />
									<Text className={styles.formHeadText}>
										{feedback}
									</Text>
								</Group>
								<Divider />

								<Collapse in={RatingWatchValue("ratingType") === ""}>
									<RatingCard
										value={ratingType}
										onChange={value => {
											if (value === ratingType) {
												setRatingType("")
											} else {
												setRatingType(value)
											}
										}}
									/>
									<Group
										justify='flex-end'
										mt='1.6rem'
									>
										<CustomButton
											title='Save'
											variant='outlined'
											type='button'
											disabled={ratingType.length < 1}
											rightSection={
												<Center className={styles.arrowIcon}>
													<Arrow />
												</Center>
											}
											action={() => {
												if (ratingType === "") return
												RatingSetValue("ratingType", ratingType)
											}}
										/>
									</Group>
								</Collapse>
								<Collapse in={RatingWatchValue("ratingType") !== ""}>
									<Stack gap='1.6rem'>
										<CustomTextInput
											name='question'
											label='Question'
											placeholder='Question'
											control={RatingControl}
											rightSection={
												<HelpCircle className={styles.helpIcon} />
											}
										/>

										<CustomSelect
											data={[
												{ label: "5 points", value: "5" },
												{ label: "10 points", value: "10" },
												{ label: "15 points", value: "15" },
												{ label: "20 points", value: "20" },
											]}
											name='scale'
											control={RatingControl}
											placeholder='Scale'
										/>

										<Group gap='1.6rem'>
											<CustomTextInput
												name='lowerLabel'
												placeholder='Lower Label'
												control={RatingControl}
												label='Lower Label'
											/>
											<CustomTextInput
												name='upperLabel'
												placeholder='Upper Label'
												control={RatingControl}
												label='Upper Label'
											/>
										</Group>
										<Group justify='flex-end'>
											<CustomButton
												title='Save'
												variant='outlined'
												type='submit'
												rightSection={
													<Center className={styles.arrowIcon}>
														<Arrow />
													</Center>
												}
											/>
										</Group>
									</Stack>
								</Collapse>
							</form>
						</Collapse>
					</>
				) : null}
			</Collapse>
		</Flex>
	)
}
