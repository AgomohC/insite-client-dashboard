import styles from "./styles.module.css"
import { Box, Flex, Text, Image as MantineImage } from "@mantine/core"
import Link from "next/link"
import { ExpandMore } from "@/public/icons"
import Image from "next/image"
import galaxyTab from "@/public/images/galaxy-tab.png"
import woodHand from "@/public/images/wood-hand.png"
import studio from "@/public/images/studio.png"
import cx from "clsx"

const srcMap = {
	prototype: woodHand.src,
	design: galaxyTab.src,
	image: studio.src,
}
interface IProps {
	href: string
	type: keyof typeof srcMap
	headerText: string
	children: React.ReactNode
}
export default function CardLayoutWithHead({
	href,
	type,
	headerText,
	children,
}: IProps) {
	return (
		<Flex
			className={styles.layoutWithHeader}
			direction='column'
		>
			<Flex
				className={styles.layoutHeader}
				justify='space-between'
			>
				<Box
					component={Link}
					href={href}
					className={styles.layoutHeaderLink}
				>
					<ExpandMore />
					<Text
						component='h2'
						className={styles.layoutHeaderLinkText}
					>
						{headerText}
					</Text>
				</Box>
				<MantineImage
					component={Image}
					alt='Illustration'
					width={260}
					height={130}
					src={srcMap[type]}
					className={cx({
						[styles.imgPrototype]: type === "prototype",
						[styles.imgDesign]: type === "design" || type === "image",
					})}
				/>
			</Flex>
			<Flex>{children}</Flex>
		</Flex>
	)
}
