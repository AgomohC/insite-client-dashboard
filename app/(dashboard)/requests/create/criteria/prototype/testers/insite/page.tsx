"use client"
import CardLayoutWithHead from "../../../../components/CardLayoutWithHeader"
import styles from "../../../../components/styles.module.css"
import {
	Flex,
	Stack,
	Text,
	Drawer,
	ScrollArea,
	Group,
	Center,
	Box,
	Avatar,
	AvatarGroup,
} from "@mantine/core"
import {
	LogoSmall,
	New,
	Close,
	Check,
	Location,
	Arrow,
	Age,
	Education,
	LocationBig,
} from "@/public/icons"
import { useDisclosure } from "@mantine/hooks"
import avatar1 from "@/public/images/avatar-1.png"
import avatar2 from "@/public/images/avatar-2.png"
import avatar3 from "@/public/images/avatar-3.png"
import TestingGroupItem from "../components/TestingGroupItem/TestingGroupItem"
import CustomTextInput from "@/app/Components/Inputs/TextInput"
import CustomSelect from "@/app/Components/Inputs/Select"
import { useState } from "react"
import cx from "clsx"
import CustomSwitch from "@/app/Components/CustomSwitch/CustomSwitch"
import CustomButton from "@/app/Components/Button/Button"
import PageNav from "@/app/Components/PageNav/PageNav"
import { useRouter } from "next/navigation"
const testingGroups = [
	{ name: "Students", number: 34, images: [avatar1, avatar2] },
	{ name: "Undergraduates", number: 34, images: [avatar1, avatar3] },
	{ name: "18 - 24", number: 34, images: [avatar2, avatar3] },
	{ name: "24 -35", number: 34, images: [avatar1, avatar2] },
	{ name: "Bankers", number: 34, images: [avatar1, avatar3] },
	{ name: "Designers", number: 34, images: [avatar2, avatar3] },
]

const testers = [
	{ criteria: "Location", icon: LocationBig, value: "Igando" },
	{ criteria: "Age range", icon: Age, value: "18 - 23" },
	{ criteria: "Education", icon: Education, value: "Undergraduate" },
]

const individuals = [
	{ name: "Flores Beyonce", avatar: avatar1 },
	{ name: "Flores Beyonce", avatar: avatar1 },
	{ name: "Flores Beyonce", avatar: avatar1 },
	{ name: "Flores Beyonce", avatar: avatar1 },
	{ name: "Flores Beyonce", avatar: avatar1 },
	{ name: "Flores Beyonce", avatar: avatar1 },
	{ name: "Flores Beyonce", avatar: avatar1 },
	{ name: "Flores Beyonce", avatar: avatar1 },
]
const criteriaList = ["Location", "Age", "Language", "Education Level"]
export default function Page() {
	const [opened, { open, close }] = useDisclosure()
	const [criteria, setCriteria] = useState<string[]>([])
	const [area, setArea] = useState<boolean>(false)
	const [group, setGroup] = useState<boolean>(false)
	const { push } = useRouter()
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
				position='right'
				scrollAreaComponent={ScrollArea.Autosize}
				withCloseButton={false}
				classNames={{
					inner: styles.drawerInner,
					content: styles.drawerContent,
					body: styles.drawerBody,
				}}
			>
				<Stack
					className={styles.drawerHeader}
					gap='1.6rem'
				>
					<Group
						justify='flex-end'
						w='100%'
					>
						<Close
							className={styles.formHead}
							onClick={close}
						/>
					</Group>
					<Group
						align='flex-end'
						justify='space-between'
					>
						<Stack>
							<Text
								fz='2.4rem'
								fw={600}
								lh='2.5rem'
								lts={-0.72}
								c={"var(--mantine-color-brand-4)"}
								component='h5'
							>
								{group ? "Students" : "Create New Group"}
							</Text>

							<Text
								fz='1.6rem'
								fw='400'
								lh='2.3rem'
								c='#565656'
								component='h6'
							>
								{group
									? "Review testers list"
									: "Select preferred criteria for testers"}
							</Text>
						</Stack>

						{group ? (
							<Group
								gap='0.8rem'
								align='center'
								justify='center'
								pt='0.4rem'
								pb='0.4rem'
								pl='0.8rem'
								pr='0.8rem'
								bg='var(--mantine-color-white)'
								className={styles.radiusSm}
							>
								<AvatarGroup spacing='1.4rem'>
									{testingGroups[0].images.map((img, idx) => {
										return (
											<Avatar
												src={img.src}
												alt={img.src}
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
								<Text className={styles.itemAvatarText}>
									+ {testingGroups[0].number}
								</Text>
							</Group>
						) : null}
					</Group>
				</Stack>

				{group ? (
					<Flex
						pl='3.2rem'
						pr='3.2rem'
						pt='1.6rem'
						direction='column'
						gap='2.4rem'
					>
						<Stack gap='0.8rem'>
							{testers.map((tester, idx) => {
								return (
									<Group
										key={tester.criteria}
										h='4.8rem'
										className={styles.testers}
										align='center'
										justify='space-between'
									>
										<Group
											gap='0.8rem'
											pl='0.4rem'
											pr='0.4rem'
										>
											<Center p='0.6rem'>
												<tester.icon />
											</Center>
											<Text
												lh='2rem'
												fz='1.4rem'
												c='var(--mantine-color-brand-4)'
												fw={400}
												display='inline-block'
											>
												{tester.criteria}{" "}
												{tester.criteria === "Age range" ? (
													<Text
														display='inline'
														opacity={0.3}
													>
														{" "}
														in years
													</Text>
												) : null}
											</Text>
										</Group>

										<Flex
											className={styles.valueChip}
											h='3rem'
											pl='0.8rem'
											pr='0.8rem'
											align='center'
										>
											<Text
												lh='2rem'
												fz='1.4rem'
												c='#565656'
											>
												{tester.value}
											</Text>
										</Flex>
									</Group>
								)
							})}
						</Stack>

						<Stack
							pt='0.8rem'
							pb='1.6rem'
							pr='0.8rem'
							pl='0.8rem'
							gap='1.6rem'
							className={styles.individualList}
						>
							<Stack gap='0.4rem'>
								{individuals.map(individual => (
									<Group
										justify='space-between'
										key={individual.name}
										pt='1.2rem'
										pb='1.2rem'
										pl='0.8rem'
										pr='0.8rem'
										h='5.5rem'
										align='center'
										className={cx(styles.radiusSm, styles.individual)}
									>
										<Group
											gap='0.8rem'
											align='center'
										>
											<Avatar
												src={individual.avatar.src}
												alt={individual.avatar.src}
												radius={"xl"}
												size='2.8rem'
												classNames={{
													root: styles.avatar,
												}}
											/>
											<Text
												fz='1.4rem'
												lh='2rem'
												c='#565656'
											>
												{individual.name}
											</Text>
										</Group>

										<Center className={styles.arrow}>
											<Arrow />
										</Center>
									</Group>
								))}
							</Stack>
							<Group
								w='100%'
								justify='flex-end'
							>
								<PageNav />
							</Group>
						</Stack>
					</Flex>
				) : (
					<>
						<Flex
							pt='1.6rem'
							pb='1.6rem'
							pl='3.2rem'
							pr='3.2rem'
							direction='column'
							w='100%'
							gap='2.4rem'
						>
							<Stack
								pt='2.2rem'
								className={styles.drawerInputs}
								pb='2.2rem'
								pl='1.6rem'
								pr='1.6rem'
								w='100%'
								gap='2.1rem'
							>
								<Stack gap='1.6rem'>
									<CustomTextInput
										name='title'
										label='Group Title'
										placeholder='Group Title'
									/>
									<CustomSelect
										name='Number of Testers'
										placeholder='Number of Testers'
										data={[
											{ label: "100 testers", value: "100" },
											{ label: "200 testers", value: "200" },
											{ label: "300 testers", value: "300" },
											{ label: "400 testers", value: "400" },
										]}
									/>
								</Stack>

								<Stack gap='0.9rem'>
									<Text
										lh='2rem'
										fz='1.4rem'
										c='#565656'
									>
										Group Criteria&apos;s
									</Text>

									<Flex
										gap='1rem'
										wrap='wrap'
									>
										{criteriaList.map(item => (
											<Group
												gap='0.8rem'
												pl='1.6rem'
												pr='2.4rem'
												key={item}
												h='4rem'
												className={cx(styles.chip, {
													[styles.chipActive]:
														criteria.includes(item),
												})}
											>
												<Box
													className={styles.checkBox}
													onClick={() => {
														if (criteria.includes(item)) {
															setCriteria(c =>
																c.filter(d => d !== item)
															)
														} else {
															setCriteria(c => [...c, item])
														}
													}}
												>
													{criteria.includes(item) ? (
														<Center className={styles.check}>
															<Check />
														</Center>
													) : (
														<svg
															xmlns='http://www.w3.org/2000/svg'
															width='24'
															height='24'
															viewBox='0 0 24 24'
															fill='none'
														>
															<rect
																x='0.196568'
																y='0.196629'
																width='23.6068'
																height='23.6067'
																rx='11.8034'
																fill='#FAFAFA'
															/>
															<rect
																x='0.196568'
																y='0.196629'
																width='23.6068'
																height='23.6067'
																rx='11.8034'
																stroke='#E4E4E4'
																stroke-width='0.393258'
															/>
														</svg>
													)}
												</Box>
												<Text
													c='var(--mantine-brand-4)'
													fz='1.4rem'
													fw={criteria.includes(item) ? 500 : 400}
													lts={-0.21}
													lh='1.862rem'
												>
													{item}
												</Text>
											</Group>
										))}
									</Flex>
								</Stack>
							</Stack>
						</Flex>
						<Flex
							pb='1.6rem'
							pl='3.2rem'
							pr='3.2rem'
							pt='0.8rem'
							w='100%'
						>
							<Flex
								pt='2.4rem'
								pb='2.4rem'
								pr='1.3rem'
								pl='1.3rem'
								direction='column'
								w='100%'
								bg='#F8F8F8'
								className={styles.drawerForm}
							>
								<Stack gap='0.8rem'>
									<CustomTextInput
										name='Country'
										label='Country'
										placeholder='Country'
									/>
									<CustomSelect
										name='State'
										placeholder='State'
										data={[
											{ label: "Abia", value: "Abia" },
											{ label: "Adamawa", value: "Adamawa" },
										]}
									/>
								</Stack>

								<Group
									justify='space-between'
									mt='1.6rem'
								>
									<Group
										gap='0.6rem'
										align='center'
									>
										<Center p='0.6rem'>
											<Location />
										</Center>
										<Text
											c='var(--mantine-color-brand-4)'
											fz='1.4rem'
											lh='2rem'
										>
											Specify Area
										</Text>
									</Group>
									<CustomSwitch
										label='Specific Area'
										active={area}
										onChange={() => {
											setArea(a => !a)
										}}
									/>
								</Group>

								<Group
									gap='1.6rem'
									mt='1.6rem'
									pt='1.6rem'
									pb='1.6rem'
									className={styles.border}
								>
									<CustomSelect
										name='Minimum Age'
										placeholder='Minimum Age'
										data={[
											{ label: "50", value: "50" },
											{ label: "100", value: "100" },
										]}
									/>
									<CustomSelect
										name='Maximum Age'
										placeholder='Maximum Age'
										data={[
											{ label: "50", value: "50" },
											{ label: "100", value: "100" },
										]}
									/>
								</Group>

								<Group
									mt='1.6rem'
									pt='1.6rem'
									pb='1.6rem'
									className={styles.border}
								>
									<CustomSelect
										name='Education'
										placeholder='Education'
										data={[
											{ label: "Uneducated", value: "Uneducated" },
											{ label: "Educated", value: "Educated" },
										]}
									/>
								</Group>
							</Flex>
						</Flex>
					</>
				)}
				<Group
					align='center'
					justify='flex-end'
					pt='1.4rem'
					pb='1.4rem'
					pr='2.3rem'
					mt='6rem'
					className={styles.drawerFooter}
				>
					<CustomButton
						title='Select Group'
						type='button'
						variant='filled'
						rightSection={
							<Center className={styles.icon}>
								<Arrow />
							</Center>
						}
						action={() => {
							if (!group) {
								setGroup(true)
							} else {
								push("/requests/create/criteria/prototype/nda")
							}
						}}
					/>
				</Group>
			</Drawer>
		</CardLayoutWithHead>
	)
}
