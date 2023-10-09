"use client"
import { Box, Center, Stack, Text, Flex } from "@mantine/core"
import { NumberScale, StarScale, EmojiScale, Check } from "@/public/icons"
import styles from "./PrototypeListItem.module.css"

interface IProps {
	value: "number" | "star" | "experience" | ""
	onChange: (value: "number" | "star" | "experience" | "") => void
}
const RatingCard = ({ value, onChange }: IProps) => {
	return (
		<Flex
			direction='column'
			bg='transparent'
			gap='1.6rem'
			w='100%'
		>
			<Flex
				justify='space-between'
				p='0.8rem'
				align='center'
				bg='white'
				className={styles.root}
			>
				<Flex
					pl='0.4rem'
					pr='0.4rem'
					align='center'
					gap='0.9rem'
				>
					<Box
						className={styles.checkBox}
						onClick={() => {
							onChange("number")
						}}
					>
						{value === "number" ? (
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
					<Stack gap='0.4rem'>
						<Text
							fz='1.6rem'
							fw={500}
							lh='1.66rem'
							className={styles.feedbackCardTitle}
							m={0}
						>
							Number range
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
				</Flex>

				<NumberScale />
			</Flex>

			<Flex
				justify='space-between'
				p='0.8rem'
				align='center'
				bg='white'
				className={styles.root}
			>
				<Flex
					pl='0.4rem'
					pr='0.4rem'
					align='center'
					gap='0.9rem'
				>
					<Box
						className={styles.checkBox}
						onClick={() => {
							onChange("star")
						}}
					>
						{value === "star" ? (
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
					<Stack gap='0.4rem'>
						<Text
							fz='1.6rem'
							fw={500}
							lh='1.66rem'
							className={styles.feedbackCardTitle}
							m={0}
						>
							Star range
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
				</Flex>

				<StarScale />
			</Flex>

			<Flex
				justify='space-between'
				p='0.8rem'
				align='center'
				bg='white'
				className={styles.root}
			>
				<Flex
					pl='0.4rem'
					pr='0.4rem'
					align='center'
					gap='0.9rem'
				>
					<Box
						className={styles.checkBox}
						onClick={() => {
							onChange("experience")
						}}
					>
						{value === "experience" ? (
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
					<Stack gap='0.4rem'>
						<Text
							fz='1.6rem'
							fw={500}
							lh='1.66rem'
							className={styles.feedbackCardTitle}
							m={0}
						>
							Experience range
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
				</Flex>

				<EmojiScale />
			</Flex>
		</Flex>
	)
}

export default RatingCard
