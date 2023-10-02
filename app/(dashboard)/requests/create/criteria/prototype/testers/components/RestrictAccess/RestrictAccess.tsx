"use client"
import styles from "./RestrictAccess.module.css"
import CustomSwitch from "@/app/Components/CustomSwitch/CustomSwitch"
import { Flex, Group, Text } from "@mantine/core"
import { useState } from "react"
import { Lock } from "@/public/icons"

interface IProps {
	active: boolean
	setActive: () => void
}
export default function RestrictAccess({ active, setActive }: IProps) {
	return (
		<Flex
			className={styles.restrictRoot}
			gap='1rem'
			align='center'
			p='1.6rem'
			justify='space-between'
		>
			<Group
				gap='0.8rem'
				align='center'
			>
				<Lock className={styles.restrictIcon} />
				<Text className={styles.restrictText}>Restrict Access</Text>
			</Group>
			<CustomSwitch
				label='Restrict Access'
				active={active}
				onChange={() => {
					setActive()
				}}
			/>
		</Flex>
	)
}
