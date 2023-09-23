"use client"
import {
	AppShell,
	AppShellHeader,
	AppShellMain,
	AppShellNavbar,
	Flex,
} from "@mantine/core"
import cx from "clsx"
import { useMediaQuery } from "@mantine/hooks"
import styles from "./dashboard.module.css"
import Header from "../Header/header"
import Aside from "../Aside/aside"

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const matchesMobile = useMediaQuery("(max-width: 1280px)", false, {
		getInitialValueInEffect: false,
	})

	return (
		<AppShell
			layout='alt'
			header={{ height: "8rem" }}
			navbar={{ width: "19.2rem", breakpoint: 0 }}
		>
			<AppShellHeader
				withBorder={false}
				classNames={{
					header: cx(styles.headerRoot, {
						[styles.headerRootMobile]: matchesMobile,
					}),
				}}
			>
				<Header />
			</AppShellHeader>
			<AppShellNavbar
				withBorder={false}
				classNames={{ navbar: styles.navbarRoot }}
			>
				<Aside />
			</AppShellNavbar>
			<AppShellMain
				classNames={{
					main: cx(styles.mainRoot, {
						[styles.mainRootMobile]: matchesMobile,
					}),
				}}
			>
				<Flex
					className={cx(styles.appContainer, {
						[styles.appContainerMobile]: matchesMobile,
					})}
				>
					{children}
				</Flex>
			</AppShellMain>
		</AppShell>
	)
}
