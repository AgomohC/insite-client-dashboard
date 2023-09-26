"use client"
import styles from "./List.module.css"
import cx from "clsx"
import {
	Flex,
	Stack,
	Image as MantineImage,
	Text,
	Avatar,
	Box,
	AvatarGroup,
} from "@mantine/core"
import avatar1 from "@/public/images/avatar-1.png"
import avatar2 from "@/public/images/avatar-2.png"
import avatar3 from "@/public/images/avatar-3.png"
import figma from "@/public/images/figma.png"
import checkout from "@/public/images/checkout.png"
import Image from "next/image"
import { Arrow, Flows, KebabMenu, Manual, New } from "@/public/icons"
import { useState } from "react"
import CustomButton from "../Button/Button"

interface IListProps {
	children: React.ReactNode
}
const listItems = [
	{
		label: "Usability Data Application Completion",
		status: "Recruiting",
		flows: 2,
		type: "Manual",
		imgSrc: figma,
		avatar: [avatar1, avatar2, avatar3],
	},

	{
		label: "Checkout Process Flows",
		status: "Testing",
		flows: 4,
		type: "Manual",
		imgSrc: figma,
		avatar: [avatar1, avatar2, avatar3],
	},
	{
		label: "Customization Module",
		status: "Testing",
		flows: 4,
		type: "Manual",
		imgSrc: checkout,
		avatar: [avatar1, avatar2, avatar3],
	},
	{
		label: "Profile Completion Flows",
		status: "Recruiting",
		flows: 3,
		type: "Manual",
		imgSrc: checkout,
		avatar: [avatar1, avatar2, avatar3],
	},
	{
		label: "Checkout Process Flow",
		status: "Recruiting",
		flows: 3,
		type: "Manual",
		imgSrc: checkout,
		avatar: [avatar1, avatar2, avatar3],
	},
]

interface IItemProps {
	item: (typeof listItems)[0]
}
interface IHeaderProps {
	btnAction?: () => void
}
function List({ children }: IListProps) {
	return <Stack className={styles.listRoot}>{children}</Stack>
}

List.Item = function ListItem({ item }: IItemProps) {
	return (
		<Flex
			align='center'
			justify='space-between'
			className={styles.itemRoot}
		>
			<Flex
				gap='0.8rem'
				align='center'
				w='fit-content'
			>
				<MantineImage
					component={Image}
					alt={item.label}
					src={item.imgSrc.src}
					fit='contain'
					width={88}
					height={88}
					className={styles.img}
				/>
				<Text className={styles.label}>{item.label}</Text>
			</Flex>
			<Flex align='center'>
				<Flex
					align='center'
					className={styles.info}
				>
					<Flex
						align='center'
						className={styles.infoTag}
					>
						<div
							className={cx(styles.indicatorRoot, {
								[styles.indicatorYellow]: item.status !== "Recruiting",
							})}
						></div>
						<Text
							className={cx(
								styles.infoTagText,
								styles.infoTagTextAdjust
							)}
						>
							{item.status}
						</Text>
					</Flex>
					<Flex
						gap='0.8rem'
						align='center'
						className={styles.infoTag}
					>
						<Flows />
						<Text className={styles.infoTagText}>{item.flows} Flows</Text>
					</Flex>
					<Flex
						className={styles.manual}
						gap='1.6rem'
					>
						<Flex
							gap='0.8rem'
							align='center'
							pt='0.3rem'
							pb='0.3rem'
							pl='1.6rem'
						>
							<Manual />
							<Text className={styles.infoTagText}>{item.type}</Text>
						</Flex>
						<Flex
							gap='0.8rem'
							className={styles.avatarContainer}
							align='center'
						>
							<AvatarGroup spacing='1.4rem'>
								{item.avatar.map((av, idx) => {
									return (
										<Avatar
											src={av.src}
											alt={item.label}
											key={idx}
											radius={"xl"}
											size='2.8rem'
											classNames={{
												root: cx(
													styles.avatar,
													styles[`avatar${idx}`]
												),
											}}
										/>
									)
								})}
							</AvatarGroup>
							<Text className={styles.avatarText}>+ 80</Text>
						</Flex>
					</Flex>
				</Flex>
				<Flex
					gap='1rem'
					align='center'
					className={styles.icons}
				>
					<Box className={styles.icon}>
						<KebabMenu />
					</Box>
					<Box
						className={cx(styles.icon, styles.iconCircle, styles.arrow)}
					>
						<Arrow />
					</Box>
				</Flex>
			</Flex>
		</Flex>
	)
}
List.Body = function ListBody() {
	return (
		<Flex
			className={styles.bodyRoot}
			gap='0.8rem'
			direction='column'
		>
			{listItems.map(item => {
				return (
					<List.Item
						key={item.label}
						item={item}
					/>
				)
			})}
		</Flex>
	)
}
const data = [
	{ label: "In Progress", value: "inProgress" },
	{ label: "Completed", value: "completed" },
]
List.Header = function ListHeader({ btnAction }: IHeaderProps) {
	const [active, setActive] = useState("inProgress")

	return (
		<Flex
			justify='space-between'
			align='center'
			className={styles.headRoot}
		>
			<Flex
				className={styles.tabLinks}
				align='center'
			>
				{data.map(datum => (
					<Box
						className={cx(styles.tabLink, {
							[styles.tabLinkActive]: active === datum.value,
						})}
						onClick={() => {
							setActive(datum.value)
						}}
						key={datum.value}
					>
						<Text
							className={cx(styles.tabLinkText, {
								[styles.tabLinkTextActive]: active === datum.value,
							})}
						>
							{datum.label}
						</Text>
					</Box>
				))}
			</Flex>
			<CustomButton
				title='Create New'
				variant='filled'
				action={() => {
					if (btnAction) {
						btnAction()
					}
				}}
				type='button'
				rightSection={
					<Box className={styles.btnIcon}>
						<New />
					</Box>
				}
			/>
		</Flex>
	)
}

export default List
