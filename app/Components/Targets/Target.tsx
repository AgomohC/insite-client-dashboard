"use client"
import styles from "./Target.module.css"
import { Group, Center } from "@mantine/core"
import { Desktop, Mobile, Tablet } from "@/public/icons"
import cx from "clsx"
interface IProps {
	active: "desktop" | "tablet" | "mobile"
	changeActive: (newActive: "desktop" | "tablet" | "mobile") => void
}

const targets: {
	value: "desktop" | "tablet" | "mobile"
	icon: React.ReactNode
}[] = [
	{ value: "desktop", icon: <Desktop /> },
	{ value: "mobile", icon: <Mobile /> },
	{ value: "tablet", icon: <Tablet /> },
]
export default function Targets({ active, changeActive }: IProps) {
	return (
		<Group gap='0.8rem'>
			{targets.map(target => (
				<Center
					key={target.value}
					className={cx(styles.target, {
						[styles.targetActive]: target.value === active,
					})}
					onClick={() => {
						if (target.value !== active) {
							changeActive(target.value)
						}
					}}
				>
					{target.icon}
				</Center>
			))}
		</Group>
	)
}
