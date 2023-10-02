import styles from "./FileItem.module.css"
import { Trash } from "@/public/icons"
import { Flex, Group, Text, Center } from "@mantine/core"
import { Excel } from "@/public/icons"

export default function FileItem({
	title,
	onDelete,
}: {
	title: string
	onDelete: () => void
}) {
	return (
		<Flex
			justify='space-between'
			p='1.6rem'
			align='center'
			className={styles.itemRoot}
		>
			<Group
				align='center'
				gap='1.6rem'
			>
				<Center>
					<Excel />
				</Center>
				<Text className={styles.itemText}>{title}</Text>
			</Group>
			<Trash
				style={{
					cursor: "pointer",
				}}
				onClick={() => {
					onDelete()
				}}
			/>
		</Flex>
	)
}
