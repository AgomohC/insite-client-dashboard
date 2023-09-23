import styles from "./header.module.css"
import ProfileBar from "../ProfileBar/profilebar"
import { Flex, Input, TextInput } from "@mantine/core"
import { Search } from "@/public/icons"
export default function AppShellHeader() {
	return (
		<Flex
			justify='space-between'
			align='flex-start'
			className={styles.root}
		>
			<TextInput
				leftSection={<Search />}
				placeholder='Search'
				radius='xl'
				variant='unstyled'
				classNames={{
					wrapper: styles.inputroot,
					section: styles.icon,
					input: styles.input,
				}}
			/>
			<ProfileBar />
		</Flex>
	)
}
