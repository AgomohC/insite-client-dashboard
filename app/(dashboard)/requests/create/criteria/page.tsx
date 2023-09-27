"use client"
import { Center, Flex, Text } from "@mantine/core"
import Link from "next/link"
import CardLayout from "../components/CardLayout"
import PageHeader from "@/app/Components/PageHeader/PageHeader"
import SourceCard from "../components/SourceCard"
import { Prototype, Design, Image as ImageIcon } from "@/public/icons"
import styles from "../components/styles.module.css"
import cx from "clsx"
import woodHand from "@/public/images/wood-hand.png"
import Image from "next/image"
import { Image as MantineImage } from "@mantine/core"
import galaxyTab from "@/public/images/galaxy-tab.png"
import studio from "@/public/images/studio.png"
export default function Page() {
	return (
		<Flex
			direction='column'
			gap='2.2rem'
		>
			<PageHeader
				title='Create Request'
				gap='bg'
				subtext='Select preferred criteria for testers'
			/>
			<CardLayout>
				<Flex
					gap='2.4rem'
					direction='column'
				>
					<Link
						href='/requests/create/criteria/prototype/target'
						className={styles.srcCardLink}
					>
						<SourceCard>
							<Flex direction='column'>
								<Center className={styles.srcCardIcon}>
									<Prototype />
								</Center>
								<Text
									component='h3'
									className={styles.srcCardHead}
									mt='1.4rem'
								>
									From Prototype
								</Text>
								<Text
									component='h4'
									className={styles.srcCardText}
									mt='1.6rem'
								>
									Empower their design teams to understand customer
									needs
								</Text>
							</Flex>
							<MantineImage
								src={woodHand.src}
								className={styles.woodHandImg}
								alt='hand holding illustration'
								component={Image}
								width={530}
								height={168}
							/>
						</SourceCard>
					</Link>
					<Flex gap='2.4rem'>
						<Link
							href='/requests/create/criteria/design/target'
							className={styles.srcCardLink}
						>
							<SourceCard>
								<Flex direction='column'>
									<Center className={styles.srcCardIcon}>
										<Design />
									</Center>
									<Text
										component='h3'
										className={styles.srcCardHead}
										mt='1.4rem'
									>
										From Design File
									</Text>
									<Text
										component='h4'
										className={cx(
											styles.srcCardText,
											styles.srcCardTextSmall
										)}
										mt='1.6rem'
									>
										Empower their design teams to understand customer
										needs
									</Text>
									<MantineImage
										src={galaxyTab.src}
										component={Image}
										alt='Illustration'
										height={110}
										width={240}
										className={styles.galaxyImg}
									/>
								</Flex>
							</SourceCard>
						</Link>
						<Link
							href='/requests/create/criteria/image/target'
							className={styles.srcCardLink}
						>
							<SourceCard>
								<Flex direction='column'>
									<Center className={styles.srcCardIcon}>
										<ImageIcon />
									</Center>
									<Text
										component='h3'
										className={styles.srcCardHead}
										mt='1.4rem'
									>
										From Single Image
									</Text>
									<Text
										component='h4'
										className={cx(
											styles.srcCardText,
											styles.srcCardTextSmall
										)}
										mt='1.6rem'
									>
										Empower their design teams to understand customer
										needs
									</Text>
									<MantineImage
										src={studio.src}
										component={Image}
										alt='Illustration'
										height={110}
										width={240}
										className={styles.galaxyImg}
									/>
								</Flex>
							</SourceCard>
						</Link>
					</Flex>
				</Flex>
			</CardLayout>
		</Flex>
	)
}
