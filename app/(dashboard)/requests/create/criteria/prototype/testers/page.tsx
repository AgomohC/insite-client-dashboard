"use client"
import { Flex, Text, Group, Box, Center } from "@mantine/core"
import CardLayoutWithHead from "../../../components/CardLayoutWithHeader"
import styles from "../../../components/styles.module.css"
import TestersCard from "./components/TestingCardLayout/TestersCardLayout"
import { useState } from "react"
import CustomButton from "@/app/Components/Button/Button"
import { useRouter } from "next/navigation"
import { Collapse } from "@mantine/core"
import { Arrow } from "@/public/icons"

export default function Page() {
	const [active, setActive] = useState<"insite" | "controlled" | "">("")

	const { push } = useRouter()
	return (
		<CardLayoutWithHead
			type='prototype'
			headerText='Choose Testers'
			href='/requests/create/criteria/prototype'
		>
			<Flex
				gap='1.6rem'
				direction='column'
				className={styles.targetLayout}
			>
				<Text className={styles.targetLayoutHeadText}>Testers Type</Text>
				<Group gap='2.4rem'>
					<TestersCard
						active={active === "insite"}
						type='insite'
						onChange={() => {
							if (active === "insite") {
								setActive("")
							} else {
								setActive("insite")
							}
						}}
					/>
					<TestersCard
						active={active === "controlled"}
						type='controlled'
						onChange={() => {
							if (active === "controlled") {
								setActive("")
							} else {
								setActive("controlled")
							}
						}}
					/>
				</Group>
				<Collapse in={!!active}>
					<Flex justify='flex-end'>
						<CustomButton
							variant='filled'
							title='Continue'
							type='button'
							rightSection={
								<Center className={styles.icon}>
									<Arrow />
								</Center>
							}
							action={() => {
								push(
									`/requests/create/criteria/prototype/testers/${active}`
								)
							}}
						/>
					</Flex>
				</Collapse>
			</Flex>
		</CardLayoutWithHead>
	)
}
