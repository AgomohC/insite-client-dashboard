import { StaticImageData } from "next/image"
import styles from "./TestingGroupItem.module.css"
import { Box, Avatar, Group, AvatarGroup, Text } from "@mantine/core"
import cx from "clsx"
interface IProps {
	item: {
		name: string
		number: number
		images: StaticImageData[]
	}
}
export default function TestingGroupItem({ item }: IProps) {
	return (
		<Group
			justify='space-between'
			className={styles.itemRoot}
		>
			<Text className={styles.itemText}>{item.name}</Text>
			<Group gap='0.4rem'>
				<AvatarGroup spacing='1.4rem'>
					{item.images.map((img, idx) => {
						return (
							<Avatar
								src={img.src}
								alt={item.name}
								key={idx}
								radius={"xl"}
								size='2.8rem'
								classNames={{
									root: cx(styles.avatar, styles[`avatar${idx}`]),
								}}
							/>
						)
					})}
				</AvatarGroup>
				<Text className={styles.itemAvatarText}>+ {item.number}</Text>
			</Group>
		</Group>
	)
}
