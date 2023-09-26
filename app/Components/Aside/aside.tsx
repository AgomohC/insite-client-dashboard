"use client"
import cx from "clsx"
import { Flex, NavLink } from "@mantine/core"
import styles from "./aside.module.css"
import Link from "next/link"
import { useSubApp } from "@/app/hooks/useSubApp"
import {
	Home,
	Schedule,
	Requests,
	Testers,
	Settings,
	Help,
} from "@/public/icons"

const NavLinks = [
	{ text: "Home", icon: Home, href: "home" },
	{ text: "Schedule", icon: Schedule, href: "schedule" },
	{ text: "Requests", icon: Requests, href: "requests" },
	{ text: "Testers", icon: Testers, href: "testers" },
]
const FooterLinks = [
	{ text: "Settings", icon: Settings, href: "settings" },
	{ text: "Help", icon: Help, href: "help" },
]
export default function AppShellAside() {
	const { active } = useSubApp()
	return (
		<Flex
			className={styles.root}
			direction='column'
			justify='space-between'
		>
			<Flex
				direction='column'
				gap='0.8rem'
				className={styles.navlinks}
			>
				{NavLinks.map(link => {
					return (
						<NavLink
							key={link.text}
							label={link.text}
							active={active(link.href)}
							leftSection={<link.icon />}
							component={Link}
							href={"/" + link.href}
							classNames={{
								root: styles.link,
								section: cx(styles.icon, {
									[styles.iconTesters]: link.text === "Testers",
								}),
								label: cx(styles.label, {
									[styles.homeLabel]: link.text === "Home",
								}),
							}}
						/>
					)
				})}
			</Flex>
			<Flex
				className={styles.navlinks}
				direction='column'
				gap='0.8rem'
				justify='flex-end'
			>
				{FooterLinks.map(link => {
					return (
						<NavLink
							component={Link}
							key={link.text}
							label={link.text}
							leftSection={<link.icon />}
							href={"/" + link.href}
							active={active(link.href)}
							classNames={{
								root: styles.link,
								section: cx(styles.icon, {
									[styles.iconTesters]: link.text === "Testers",
								}),
								label: cx(styles.label, {
									[styles.homeLabel]: link.text === "Home",
								}),
							}}
						/>
					)
				})}
			</Flex>
		</Flex>
	)
}
