"use client"
import CardLayoutWithHead from "../../../../components/CardLayoutWithHeader"
import styles from "../../../../components/styles.module.css"
import { Flex, Stack, Text, Drawer } from "@mantine/core"
import { LogoSmall, New } from "@/public/icons"
import { useDisclosure } from "@mantine/hooks"
import avatar1 from "@/public/images/avatar-1.png"
import avatar2 from "@/public/images/avatar-2.png"
import avatar3 from "@/public/images/avatar-3.png"
import TestingGroupItem from "../components/TestingGroupItem/TestingGroupItem"

const testingGroups = [
	{ name: "Students", number: 34, images: [avatar1, avatar2] },
	{ name: "Undergraduates", number: 34, images: [avatar1, avatar3] },
	{ name: "18 - 24", number: 34, images: [avatar2, avatar3] },
	{ name: "24 -35", number: 34, images: [avatar1, avatar2] },
	{ name: "Bankers", number: 34, images: [avatar1, avatar3] },
	{ name: "Designers", number: 34, images: [avatar2, avatar3] },
]
export default function Page() {
	const [opened, { open, close }] = useDisclosure()
	return (
		<CardLayoutWithHead
			type='prototype'
			headerText='Choose Testers'
			href='/requests/create/criteria/prototype/testers'
		>
			<Flex
				gap='1.6rem'
				direction='column'
				className={styles.targetLayout}
			>
				<Flex
					className={styles.testersLayout}
					direction='column'
				>
					<Flex
						className={styles.testersHead}
						gap='1.6rem'
						align='center'
					>
						<LogoSmall />
						<Text className={styles.testersHeadText}>
							Insite Pro Testers
						</Text>
					</Flex>
					<Flex
						className={styles.testersBody}
						direction='column'
						gap='2.4rem'
						p='2.4rem'
					>
						<Stack
							className={styles.testersAdd}
							onClick={() => {
								open()
							}}
						>
							<New className={styles.iconFill} />
							<Text className={styles.testersAddText}>
								New Group Request
							</Text>
						</Stack>
						<Stack gap='1.6rem'>
							<Text className={styles.testersAvailableText}>
								Available Testing Groups
							</Text>
							<Flex
								rowGap='0.8rem'
								columnGap='1.6rem'
								justify='space-between'
								wrap='wrap'
							>
								{testingGroups.map(item => (
									<TestingGroupItem
										key={item.name}
										item={item}
									/>
								))}
							</Flex>
						</Stack>
					</Flex>
				</Flex>
			</Flex>
			<Drawer
				opened={opened}
				onClose={close}
				title='Testers'
				position='right'
				withinPortal={false}
			></Drawer>
		</CardLayoutWithHead>
	)
}
