import CardLayoutWithHead from "../../../../components/CardLayoutWithHeader"
import { Flex, Text } from "@mantine/core"
import styles from "../../../../components/styles.module.css"
import { Controlled, Arrow } from "@/public/icons"
import DragAndDrop from "@/app/Components/DragAndDrop/DragAndDrop"
import CustomButton from "@/app/Components/Button/Button"
export default function Page() {
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
						<Controlled />
						<Text className={styles.testersHeadText}>
							Controlled Targeted Testers
						</Text>
					</Flex>
					<Flex
						className={styles.testersBody}
						direction='column'
						gap='2.4rem'
						p='2.4rem'
					></Flex>
				</Flex>
			</Flex>
		</CardLayoutWithHead>
	)
}

// With aside
