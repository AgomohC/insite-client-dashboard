"use client"
import CardLayoutWithHead from "../../../../components/CardLayoutWithHeader"
import styles from "../../../../components/styles.module.css"
import { Flex, Stack, Text, Drawer, ScrollArea } from "@mantine/core"
import { LogoSmall, New } from "@/public/icons"
import { useDisclosure } from "@mantine/hooks"
import avatar1 from "@/public/images/avatar-1.png"
import avatar2 from "@/public/images/avatar-2.png"
import avatar3 from "@/public/images/avatar-3.png"
import TestingGroupItem from "../components/TestingGroupItem/TestingGroupItem"

const testingGroups = [
	{ name: "Students", number: 34, images: [avatar1, avatar2] },
	{ name: "Undergraduates", number: 34, images: [avatar1, avatar3] },
	{ name: "18 - 24", number: 34, images: [avatar2, avatar3] },
	{ name: "24 -35", number: 34, images: [avatar1, avatar2] },
	{ name: "Bankers", number: 34, images: [avatar1, avatar3] },
	{ name: "Designers", number: 34, images: [avatar2, avatar3] },
]
export default function Page() {
	const [opened, { open, close }] = useDisclosure()
	return (
		<CardLayoutWithHead
			type='prototype'
			headerText='Choose Testers'
			href='/requests/create/criteria/prototype/testers'
		>
			<Flex
				gap='1.6rem'
				direction='column'
				className={styles.targetLayout}
			>
				<Flex
					className={styles.testersLayout}
					direction='column'
				>
					<Flex
						className={styles.testersHead}
						gap='1.6rem'
						align='center'
					>
						<LogoSmall />
						<Text className={styles.testersHeadText}>
							Insite Pro Testers
						</Text>
					</Flex>
					<Flex
						className={styles.testersBody}
						direction='column'
						gap='2.4rem'
						p='2.4rem'
					>
						<Stack
							className={styles.testersAdd}
							onClick={() => {
								open()
							}}
						>
							<New className={styles.iconFill} />
							<Text className={styles.testersAddText}>
								New Group Request
							</Text>
						</Stack>
						<Stack gap='1.6rem'>
							<Text className={styles.testersAvailableText}>
								Available Testing Groups
							</Text>
							<Flex
								rowGap='0.8rem'
								columnGap='1.6rem'
								justify='space-between'
								wrap='wrap'
							>
								{testingGroups.map(item => (
									<TestingGroupItem
										key={item.name}
										item={item}
									/>
								))}
							</Flex>
						</Stack>
					</Flex>
				</Flex>
			</Flex>
			<Drawer
				opened={opened}
				onClose={close}
				title='Testers'
				position='right'
				scrollAreaComponent={ScrollArea.Autosize}
				classNames={{
					inner: styles.drawerInner,
					content: styles.drawerContent,
				}}
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore at
				pariatur eligendi molestiae recusandae, maiores deleniti, aspernatur
				necessitatibus impedit quibusdam nam aliquam quo repellat beatae
				molestias consectetur tempora tenetur? Tempora, quibusdam quidem
				tenetur asperiores odit ratione libero explicabo vero ipsum ullam
				praesentium fuga pariatur quasi dolor dignissimos! Magni obcaecati
				sunt asperiores eligendi voluptatibus hic quisquam ratione adipisci,
				libero aliquam debitis optio animi harum esse ad voluptates
				exercitationem quidem soluta autem repellat fugit quos cum
				repellendus quibusdam. Officiis temporibus suscipit maiores omnis?
				Ipsa cum, libero adipisci id quisquam eaque accusamus, magni
				blanditiis, consequatur asperiores suscipit voluptate? Veniam
				aliquid, nam tempore, facilis, corporis laboriosam aut asperiores
				vero ducimus officia sit praesentium cumque? Corporis illum quod
				blanditiis explicabo esse repellat ea aut aspernatur aliquam
				excepturi ab veritatis vel, impedit atque deleniti nostrum
				temporibus! Earum incidunt rem adipisci harum mollitia repellendus
				commodi quisquam aperiam. Nulla nihil porro quo corrupti maxime eos
				doloremque quisquam assumenda excepturi quasi. Sequi excepturi
				voluptatum accusantium doloribus blanditiis doloremque ipsa,
				laudantium sint corporis sunt similique, fugit non placeat animi
				odio magnam hic in tenetur nihil autem adipisci minus minima.
				Asperiores, reprehenderit! Magni officiis provident ad, quas
				perferendis maxime adipisci doloribus repudiandae dolore, facilis
				fugit sapiente est ut at porro voluptatibus repellat sunt veritatis
				magnam similique. Modi, nihil ratione omnis facilis, unde officiis
				tempora, autem eius dolore consequatur veniam perspiciatis quia.
				Debitis non magni consectetur eius ratione inventore enim incidunt
				vel, voluptates magnam aliquam, est mollitia nobis obcaecati
				cupiditate officia dolore voluptatem, facere quibusdam veritatis!
				Aut iure possimus hic. Doloremque iusto cum in eveniet dolore nulla
				perferendis officiis, asperiores officia magni tempore ullam
				veritatis quod at, dignissimos quos qui assumenda deserunt labore
				doloribus beatae totam mollitia? Molestias pariatur iusto omnis
				aliquam non dolore, blanditiis eius consectetur dolorum possimus
				fugit laborum expedita doloribus veritatis nobis itaque? Quasi
				quisquam dignissimos ut aspernatur architecto.
			</Drawer>
		</CardLayoutWithHead>
	)
}
