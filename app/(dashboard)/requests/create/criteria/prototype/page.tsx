"use client"
import styles from "../../components/styles.module.css"
import CardLayoutWithHead from "../../components/CardLayoutWithHeader"
import CustomButton from "@/app/Components/Button/Button"
import CustomSelect from "@/app/Components/Inputs/Select"
import CustomTextInput from "@/app/Components/Inputs/TextInput"
import CustomTextInputWithSelect from "@/app/Components/Inputs/TextInputWithSelect"
import { useRouter } from "next/navigation"
import {
	Box,
	Center,
	Flex,
	Image as MantineImage,
	Collapse,
	Group,
} from "@mantine/core"
import { useMemo, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, SubmitHandler } from "react-hook-form"
import figma from "@/public/images/figma.png"
import sketch from "@/public/images/sketch.png"
import Image from "next/image"
import cx from "clsx"
import { Arrow, New } from "@/public/icons"
import PrototypeListItem from "@/app/Components/ProtoTypeListItem/PrototypeListItem"
import {
	BasePrototypeSchemaType,
	basePrototypeSchema,
	PrototypeFlowType,
} from "./types"
const data = [
	{
		label: (
			<MantineImage
				component={Image}
				src={figma.src}
				alt='figma'
				height={figma.height}
				width={figma.width}
				className={styles.selectImg}
			/>
		),
		value: "figma",
	},
	{
		label: (
			<MantineImage
				component={Image}
				src={sketch.src}
				alt='sketch'
				height={sketch.height}
				width={sketch.width}
				className={cx(styles.selectImg, styles.sketchImg)}
			/>
		),
		value: "sketch",
	},
]

/**
 *
 * TODO: prevent users for creating flows with similar process names
 */

export default function Page() {
	const { push } = useRouter()
	const [prototypeSource, setPrototypeSource] = useState<"figma" | "sketch">(
		"figma"
	)

	const [active, setActive] = useState<string>("")
	const [open, setOpen] = useState<boolean>(!active)
	const [requests, setRequests] = useState<BasePrototypeSchemaType[]>([])

	const [configuredRequests, setConfiguredRequests] = useState<
		PrototypeFlowType[]
	>([])

	const modifiedRequests = useMemo(() => {
		return requests.map(req => {
			const isReqCompleted = configuredRequests.find(
				request => req.processName === request.processName
			)

			if (isReqCompleted) {
				req.status = "complete"
				return isReqCompleted
			} else {
				return req
			}
		})
	}, [configuredRequests, requests])

	const { handleSubmit, control, setValue, reset, watch, trigger } =
		useForm<BasePrototypeSchemaType>({
			resolver: zodResolver(basePrototypeSchema),
			defaultValues: {
				status: "incomplete",
				processName: "",
				prototypeLink: "",
				prototypeType: prototypeSource,
				requestType: "",
			},
		})
	const submitHandler: SubmitHandler<
		BasePrototypeSchemaType
	> = async values => {
		setRequests(requests => [...requests, values])
		setActive(`${values.processName}${requests.length}`)
		setOpen(false)
		reset()
	}

	const submitWithoutConfigure = async () => {
		const passedValidation = await trigger([
			"processName",
			"prototypeLink",
			"requestType",
		])
		if (passedValidation) {
			setRequests(request => [
				...request,
				{
					processName: watch("processName"),
					prototypeLink: watch("prototypeLink"),
					requestType: watch("requestType"),
					status: "incomplete",
					prototypeType: prototypeSource,
				},
			])
			reset()
		}
	}

	return (
		<CardLayoutWithHead
			type='prototype'
			headerText='Add Flows'
			href='/requests/create/criteria/prototype/target'
		>
			<Flex
				gap='2.4rem'
				direction='column'
				className={styles.targetLayout}
			>
				{modifiedRequests.map((request, idx) => {
					return (
						<PrototypeListItem
							key={request.processName}
							processName={request.processName}
							requestType={request.requestType}
							prototypeType={request.prototypeType}
							prototypeLink={request.prototypeLink}
							status={request.status}
							active={`${request.processName}${idx}` === active}
							onClick={() => {
								if (active === `${request.processName}${idx}`) {
									setActive("")
									setOpen(true)
									return
								}
								if (request.status === "complete") {
									return
								}
								setActive(`${request.processName}${idx}`)
								setOpen(false)
							}}
							onSave={val => {
								setActive("")
								setConfiguredRequests(requests => [...requests, val])
								setOpen(
									!Boolean(
										configuredRequests.every(
											request =>
												request.status === "complete" &&
												configuredRequests.length > 0 &&
												val.status === "complete" &&
												(configuredRequests.length ===
													requests.length - 1 ||
													configuredRequests.length ===
														requests.length)
										)
									)
								)
							}}
						/>
					)
				})}
				<Collapse in={open}>
					<Box
						component='form'
						className={styles.prototypeForm}
						onSubmit={handleSubmit(submitHandler)}
					>
						<CustomTextInput
							name='processName'
							placeholder='Process Name'
							control={control}
							label='Process Name'
							value={watch("processName")}
						/>
						<CustomTextInputWithSelect
							name='prototypeLink'
							defaultSelectValue='figma'
							selectOptions={data}
							selectValue={prototypeSource}
							control={control}
							placeholder='Prototype Link'
							onSelectChange={(src: "figma" | "sketch") => {
								setPrototypeSource(src)
								setValue("prototypeType", src)
							}}
							label='Prototype Link'
						/>
						<CustomSelect
							name='requestType'
							control={control}
							data={[
								{ label: "", value: "" },
								{ label: "Tasks", value: "Tasks" },
								{ label: "Feedbacks", value: "Feedbacks" },
							]}
							placeholder='Request Type'
						/>
						<Flex
							align='center'
							justify='flex-end'
						>
							<CustomButton
								title='Configure'
								type='submit'
								variant='outlined'
								rightSection={
									<Center className={styles.icon}>
										<Arrow />
									</Center>
								}
							/>
						</Flex>
					</Box>
				</Collapse>
				{
					// requests.every(request => request.status === "complete") &&
					requests.length > 0 && !open ? (
						<Group justify='space-between'>
							<CustomButton
								title='New Process'
								variant='outlined'
								type='button'
								rightSection={
									<Center className={styles.iconFill}>
										<New />
									</Center>
								}
								action={() => {
									setActive("")
									setOpen(true)
								}}
							/>
							<CustomButton
								title='Complete'
								variant='filled'
								type='button'
								action={() => {
									push("/requests/create/criteria/prototype/testers")
								}}
								disabled={
									!requests.every(
										request => request.status === "complete"
									)
								}
								rightSection={
									<Center className={styles.icon}>
										<Arrow />
									</Center>
								}
							/>
						</Group>
					) : (
						<Collapse
							in={Boolean(
								watch("processName") &&
									watch("prototypeLink") &&
									watch("requestType")
							)}
						>
							<CustomButton
								title='Add Process Flows'
								type='button'
								variant='outlined'
								fullWidth
								action={submitWithoutConfigure}
								rightSection={
									<Center className={styles.iconFill}>
										<New />
									</Center>
								}
							/>
						</Collapse>
					)
				}
			</Flex>
		</CardLayoutWithHead>
	)
}
