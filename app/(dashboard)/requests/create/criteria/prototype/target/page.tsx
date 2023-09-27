"use client"
import Link from "next/link"
import CardLayoutWithHead from "../../../components/CardLayoutWithHeader"
import { Center, Flex, Text, Box } from "@mantine/core"
import Targets from "@/app/Components/Targets/Target"
import { useState } from "react"
import CustomButton from "@/app/Components/Button/Button"
import { useRouter } from "next/navigation"
import { Arrow } from "@/public/icons"
import styles from "../../../components/styles.module.css"

export default function Page() {
	const [active, setActive] = useState<"desktop" | "tablet" | "mobile">(
		"desktop"
	)
	const { push } = useRouter()

	const changeActive = (newActive: "desktop" | "tablet" | "mobile") => {
		setActive(newActive)
	}
	return (
		<CardLayoutWithHead
			type='prototype'
			headerText='From Prototype'
			href='/requests/create/criteria'
		>
			<Flex
				gap='2.4rem'
				direction='column'
				className={styles.targetLayout}
			>
				<Flex
					gap='2rem'
					direction='column'
					pb='2.4rem'
					className={styles.targetLayoutHead}
				>
					<Text
						component='h1'
						className={styles.targetLayoutHeadText}
					>
						Choose Device Target
					</Text>
					<Targets
						active={active}
						changeActive={changeActive}
					/>
				</Flex>
				<Box w='fit-content'>
					<CustomButton
						type='button'
						title='Add Process Flows'
						variant='outlined'
						rightSection={
							<Center className={styles.icon}>
								<Arrow />
							</Center>
						}
						action={() => {
							push("/requests/create/criteria/prototype")
						}}
					/>
				</Box>
			</Flex>
		</CardLayoutWithHead>
	)
}
