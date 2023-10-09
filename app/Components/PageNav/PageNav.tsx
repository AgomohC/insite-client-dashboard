"use client"
import { ExpandMore } from "@/public/icons"
import { Group, Box, Text, Flex, Center } from "@mantine/core"
import cx from "clsx"
import styles from "./PageNav.module.css"

interface IProps {
	className?: string
}
const PageNav = ({ className }: IProps) => {
	return (
		<Group
			className={cx(className)}
			gap='0.8rem'
		>
			<Flex
				align='center'
				gap='0.5rem'
				className={styles.textBox}
			>
				<Text
					fz='1.4rem'
					lh='2rem'
					c='var(--mantine-color-brand-4)'
				>
					1 - 8
				</Text>{" "}
				<Text
					c='#A0A0A0'
					fz='1.4rem'
					lh='2rem'
				>
					of 38
				</Text>
			</Flex>
			<Group
				gap='0.6rem'
				align='center'
			>
				<Center
					p='0.4rem'
					className={cx(styles.icon, styles.iconLeft)}
				>
					<ExpandMore />
				</Center>
				<Center
					p='0.4rem'
					className={cx(styles.icon, styles.iconRight)}
				>
					<ExpandMore />
				</Center>
			</Group>
		</Group>
	)
}

export default PageNav
