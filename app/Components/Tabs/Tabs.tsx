"use client"
import { Box, Flex } from "@mantine/core"
import classes from "./Tabs.module.css"
import Link from "next/link"
import cx from "clsx"
import { useState } from "react"

const Tabs = [
	{
		label: "Information",
		href: "#",
	},
	{
		label: "Customize",
		href: "#",
	},
	{
		label: "Testers",
		href: "#",
	},
	{
		label: "Agreements",
		href: "#",
	},
]

export default function CustomTabs() {
	const [active, setActive] = useState("Information")
	const items = Tabs.map(tab => (
		<Box
			key={tab.label}
			component={Link}
			href={tab.href}
			onClick={event => {
				event.preventDefault()
				setActive(tab.label)
			}}
			className={cx(classes.link, {
				[classes.linkActive]: active === tab.label,
			})}
		>
			{tab.label}
		</Box>
	))
	return (
		<Flex
			gap='1.6rem'
			direction='column'
			className={classes.group}
		>
			{items}
		</Flex>
	)
}
