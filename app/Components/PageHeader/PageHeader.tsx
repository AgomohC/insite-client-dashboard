"use client"
import { Box, Flex, Text } from "@mantine/core"
import styles from "./PageHeader.module.css"

interface IProps {
	title: string
	subtext?: string
	icon?: React.ReactNode
	iconAction?: () => void
	gap: "sm" | "bg"
}

const PageHeader = ({ title, subtext, icon, iconAction, gap }: IProps) => {
	return (
		<Flex
			direction='column'
			gap={gap === "sm" ? "0.8rem" : "1.6rem"}
		>
			<Text
				component='h1'
				className={styles.headerTitle}
			>
				{title}
				{icon ? (
					<Box
						onClick={() => {
							if (iconAction) {
								iconAction()
							}
						}}
						className={styles.headerIcon}
					>
						{icon}
					</Box>
				) : null}
			</Text>
			{subtext ? (
				<Text
					component='p'
					className={styles.headerSubtext}
				>
					{subtext}
				</Text>
			) : null}
		</Flex>
	)
}

export default PageHeader
