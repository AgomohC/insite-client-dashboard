import styles from "./header.module.css"
import ProfileBar from "../ProfileBar/profilebar"
import { Flex, TextInput } from "@mantine/core"
import { Logo, Search } from "@/public/icons"
export default function AppShellHeader() {
	return (
		<Flex
			justify='space-between'
			align='center'
			className={styles.root}
		>
			<Flex
				align='center'
				justify='center'
			>
				<Logo />
			</Flex>
			<Flex gap='3.2rem'>
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
		</Flex>
	)
}
