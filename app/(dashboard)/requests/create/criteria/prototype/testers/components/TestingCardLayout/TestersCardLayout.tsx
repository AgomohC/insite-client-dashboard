import { Flex, Group, Stack, Text, Box, Center } from "@mantine/core"
import styles from "./TestersCardLayout.module.css"
import { Controlled, LogoSmall } from "@/public/icons"
import cx from "clsx"
import { Check } from "@/public/icons"

interface IProps {
	type: "insite" | "controlled"
	active: boolean
	onChange: (type: string) => void
}

export default function TestersCard({ type, active, onChange }: IProps) {
	return (
		<Flex
			direction='column'
			justify='space-between'
			className={cx(styles.cardRoot, {
				[styles.cardRootActive]: active,
			})}
			onClick={() => onChange(type)}
		>
			<Group justify='space-between'>
				{type === "controlled" ? <Controlled /> : <LogoSmall />}

				<Box className={styles.checkBox}>
					{active ? (
						<Box className={styles.check}>
							<Check />
						</Box>
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
			<Stack gap={0}>
				<Text className={styles.cardHeadText}>
					{type === "insite"
						? `INSITEPRO© Registered Users`
						: "Controlled Targeted Testers"}
				</Text>
				<Text className={styles.cardBodyText}>
					{type === "insite"
						? "Our verified and diverse testing group"
						: "Share test to In-house or prepared testers"}
				</Text>
			</Stack>
		</Flex>
	)
}
