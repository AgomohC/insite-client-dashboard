"use client"
import PageHeader from "@/app/Components/PageHeader/PageHeader"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import CardLayout from "./components/CardLayout"
import { Center, Flex, Divider } from "@mantine/core"
import CustomTextInput from "@/app/Components/Inputs/TextInput"
import CustomButton from "@/app/Components/Button/Button"
import CustomTextArea from "@/app/Components/Inputs/TextArea"
import CustomSelect from "@/app/Components/Inputs/Select"
import { Arrow } from "@/public/icons"
import styles from "./components/styles.module.css"
import { useRouter } from "next/navigation"
import { InfoSchemaType, infoSchema } from "./types"

export default function Page() {
	const { push } = useRouter()
	const { handleSubmit, control } = useForm<InfoSchemaType>({
		resolver: zodResolver(infoSchema),
		defaultValues: { title: "", description: "", goal: "" },
	})

	const submitHandler: SubmitHandler<InfoSchemaType> = async values => {
		push("/requests/create/criteria")
	}

	const data = [
		{ label: "Usability evaluation", value: "Usability evaluation" },
		{ label: "User satisfaction", value: "User satisfaction" },
		{
			label: "Task performance analysis",
			value: "Task performance analysis",
		},
		{
			label: "Accessibility assessment",
			value: "Accessibility assessment",
		},
		{
			label: "User behavior",
			value: "User behavior",
		},
	]
	return (
		<Flex
			direction='column'
			gap='2.2rem'
		>
			<PageHeader
				title='Create Request'
				gap='bg'
				subtext='Select preferred criteria for testers'
			/>
			<CardLayout>
				<form onSubmit={handleSubmit(submitHandler)}>
					<Flex
						direction='column'
						gap='1.6rem'
					>
						<CustomTextInput
							name='title'
							placeholder='Request Title'
							control={control}
							label='Request Title'
						/>
						<CustomTextArea
							name='description'
							placeholder='Description'
							control={control}
							label='Description'
						/>
						<CustomSelect
							name='goal'
							placeholder='Goal'
							control={control}
							data={data}
						/>
						<Divider
							mt='1.6rem'
							mb='0.8rem'
							classNames={{ root: styles.divider }}
						/>
						<Flex justify='flex-end'>
							<CustomButton
								title='Choose Source'
								variant='outlined'
								rightSection={
									<Center className={styles.icon}>
										<Arrow />
									</Center>
								}
								type='submit'
							/>
						</Flex>
					</Flex>
				</form>
			</CardLayout>
		</Flex>
	)
}
