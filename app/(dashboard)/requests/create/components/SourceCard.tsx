import styles from "./styles.module.css"
import { Flex } from "@mantine/core"
export default function SourceCard({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<Flex
			align='center'
			className={styles.sourceCard}
		>
			{children}
		</Flex>
	)
}
