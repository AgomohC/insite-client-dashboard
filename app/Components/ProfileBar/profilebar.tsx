import { Avatar, Flex, Text } from "@mantine/core"
import styles from "./profilebar.module.css"
import { ExpandMore } from "@/public/icons"
import avatar from "@/public/images/avatar.png"

export default function ProfileBar() {
	return (
		<Flex
			className={styles.profile}
			gap='1.2rem'
			align='center'
		>
			<Flex
				gap='0.8rem'
				align='center'
			>
				<Avatar
					src={avatar.src}
					alt='avatar image'
					classNames={{ root: styles.avatar }}
				/>
				<Text
					fz='1.6rem'
					className={styles.text}
				>
					jsmith@gmail.com
				</Text>
			</Flex>
			<ExpandMore className={styles.icon} />
		</Flex>
	)
}
