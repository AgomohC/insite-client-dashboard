import styles from "./CopyLink.module.css"
import { useClipboard } from "@mantine/hooks"
import { Flex, Text } from "@mantine/core"
import { Copy } from "@/public/icons"
export default function CopyLink({ value }: { value: string }) {
	const clipboard = useClipboard({ timeout: 2000 })
	return (
		<Flex
			pl='2.4rem'
			pr='0.8rem'
			align='center'
			justify='space-between'
			className={styles.copyRoot}
		>
			<Text className={styles.copyText}>{value}</Text>

			<Flex
				role='button'
				gap='1rem'
				pt='0.8rem'
				pb='0.8rem'
				pr='1.6rem'
				align='center'
				justify='center'
				pl='1.6rem'
				className={styles.copyBtn}
				h='4rem'
				onClick={() => {
					clipboard.copy(value)
				}}
			>
				<Copy />
				{clipboard.copied ? "Copied" : "Copy link"}
			</Flex>
		</Flex>
	)
}
