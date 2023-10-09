"use client"
import { Box, Center, Group, Stack, Text, Flex } from "@mantine/core"
import {
	Check,
	Interview,
	InterviewFilled,
	Scale,
	ScaleFilled,
} from "@/public/icons"
import styles from "./PrototypeListItem.module.css"

interface IProps {
	value: "Interview" | "Scale" | ""
	onChange: (e: "Interview" | "Scale" | "") => void
}
const FeedbackCard = ({ value, onChange }: IProps) => {
	return (
		<Flex gap={"1.6rem"}>
			<Flex
				direction='column'
				bg='white'
				p='0.8rem'
				gap='1.45rem'
				className={styles.feedbackCard}
			>
				<Group
					justify='space-between'
					pl='0.4rem'
					pr='0.4rem'
				>
					<Stack gap='0.4rem'>
						<Text
							fz='1.6rem'
							fw={500}
							lh='1.66rem'
							className={styles.feedbackCardTitle}
							m={0}
						>
							Interview
						</Text>
						<Text
							fz='1.2rem'
							lh='1.6rem'
							className={styles.feedbackCardTitle}
							m={0}
							display={!!value ? "none" : "inline"}
						>
							How would you rate this app
						</Text>
					</Stack>

					<Box
						className={styles.checkBox}
						onClick={() => {
							onChange("Interview")
						}}
					>
						{value === "Interview" ? (
							<Center className={styles.check}>
								<Check />
							</Center>
						) : (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
							>
								<rect
									x='0.196568'
									y='0.196629'
									width='23.6068'
									height='23.6067'
									rx='11.8034'
									fill='#FAFAFA'
								/>
								<rect
									x='0.196568'
									y='0.196629'
									width='23.6068'
									height='23.6067'
									rx='11.8034'
									stroke='#E4E4E4'
									stroke-width='0.393258'
								/>
							</svg>
						)}
					</Box>
				</Group>
				{value === "Interview" ? <InterviewFilled /> : <Interview />}
			</Flex>

			<Flex
				direction='column'
				bg='white'
				p='0.8rem'
				gap='1.45rem'
			>
				<Group
					justify='space-between'
					pl='0.4rem'
					pr='0.4rem'
				>
					<Stack gap='0.4rem'>
						<Text
							fz='1.6rem'
							fw={500}
							lh='1.66rem'
							className={styles.feedbackCardTitle}
							m={0}
						>
							Scale
						</Text>
						<Text
							fz='1.2rem'
							lh='1.6rem'
							className={styles.feedbackCardTitle}
							m={0}
							display={!!value ? "none" : "inline"}
						>
							How would you rate this app
						</Text>
					</Stack>

					<Box
						className={styles.checkBox}
						onClick={() => {
							onChange("Scale")
						}}
					>
						{value === "Scale" ? (
							<Center className={styles.check}>
								<Check />
							</Center>
						) : (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
							>
								<rect
									x='0.196568'
									y='0.196629'
									width='23.6068'
									height='23.6067'
									rx='11.8034'
									fill='#FAFAFA'
								/>
								<rect
									x='0.196568'
									y='0.196629'
									width='23.6068'
									height='23.6067'
									rx='11.8034'
									stroke='#E4E4E4'
									stroke-width='0.393258'
								/>
							</svg>
						)}
					</Box>
				</Group>
				{value === "Scale" ? <ScaleFilled /> : <Scale />}
			</Flex>
		</Flex>
	)
}

export default FeedbackCard
