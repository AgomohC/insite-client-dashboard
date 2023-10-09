"use client"
import CardLayoutWithHead from "../../../../components/CardLayoutWithHeader"
import { Center, Divider, Flex, Group, Stack, Text } from "@mantine/core"
import styles from "../../../../components/styles.module.css"
import { Controlled, Arrow, ExpandMore } from "@/public/icons"
import DragAndDrop from "@/app/Components/DragAndDrop/DragAndDrop"
import CustomButton from "@/app/Components/Button/Button"
import { useState } from "react"
import { FileWithPath } from "@mantine/dropzone"
import { Link } from "@/public/icons"
import { Collapse } from "@mantine/core"
import FileItem from "../components/FileItem/FileItem"
import CopyLink from "../components/CopyLink/CopyLink"
import RestrictAccess from "../components/RestrictAccess/RestrictAccess"
import CustomPasswordInput from "@/app/Components/Inputs/PasswordInput"
import { useRouter } from "next/navigation"

export default function Page() {
	const [file, setFile] = useState<FileWithPath[] | null>(null)
	const [type, setType] = useState<"" | "file" | "link">("")
	const [restrict, setRestrict] = useState<boolean>(false)
	const [password, setPassword] = useState<string>("")
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
						<Controlled />
						<Text className={styles.testersHeadText}>
							Controlled Targeted Testers
						</Text>
					</Flex>
					<Flex
						className={styles.testersBody}
						direction='column'
						gap='2.4rem'
						p='2.4rem'
					>
						<Collapse in={type === ""}>
							<DragAndDrop
								type='csv'
								maxSize={2 * 1024 * 1024}
								title='Upload CSV'
								onChange={(e: FileWithPath[]) => {
									setFile(e)
									setType("file")
								}}
							/>

							<Stack gap='1.6rem'>
								<Text className={styles.orText}>Or</Text>
								<CustomButton
									variant='outlined'
									title={
										<Group gap='1.6rem'>
											<Link className={styles.linkIcon} />
											Generate Link
										</Group>
									}
									type='button'
									rightSection={
										<Center className={styles.icon}>
											<Arrow />
										</Center>
									}
									fullWidth
									action={() => {
										setType("link")
									}}
								/>
							</Stack>
						</Collapse>
						<Collapse in={type === "file" && !!file}>
							<Flex
								direction='column'
								gap='1.6rem'
							>
								<Group
									onClick={() => {
										setFile(null)
										setType("")
									}}
									gap='1rem'
									className={styles.formHead}
								>
									<ExpandMore className={styles.formHeadIcon} />
									<Text className={styles.formHeadText}>
										Upload CSV
									</Text>
								</Group>
								<Divider />
								{file &&
									file.map(f => (
										<FileItem
											key={f.path}
											onDelete={() => {
												setFile(null)
												setType("")
											}}
											title={f.name}
										/>
									))}
								<Flex
									align='center'
									justify='flex-end'
								>
									<CustomButton
										variant='outlined'
										type='button'
										title='Complete'
										rightSection={
											<Center className={styles.icon}>
												<Arrow />
											</Center>
										}
										action={() => {
											push("/requests/create/criteria/prototype/nda")
										}}
									/>
								</Flex>
							</Flex>
						</Collapse>
						<Collapse in={type === "link"}>
							<Flex
								direction='column'
								gap='1.6rem'
							>
								<Group
									onClick={() => {
										setFile(null)
										setType("")
									}}
									gap='1rem'
									className={styles.formHead}
								>
									<ExpandMore className={styles.formHeadIcon} />
									<Text className={styles.formHeadText}>
										Generate Link
									</Text>
								</Group>
								<Divider />
								<CopyLink value='https://Insite.com/RadioNationApp/test' />
								<RestrictAccess
									active={restrict}
									setActive={() => {
										setRestrict(r => !r)
									}}
								/>
								<Collapse in={restrict}>
									<CustomPasswordInput
										name='password'
										placeholder='Create Password'
										value={password}
										onChange={e => {
											setPassword(e.target.value)
										}}
										label='Password'
									/>
								</Collapse>
								<Flex justify='flex-end'>
									<CustomButton
										variant='outlined'
										type='button'
										title='Complete'
										rightSection={
											<Center className={styles.icon}>
												<Arrow />
											</Center>
										}
										disabled={restrict && !password}
										action={() => {
											push("/requests/create/criteria/prototype/nda")
										}}
									/>
								</Flex>
							</Flex>
						</Collapse>
					</Flex>
				</Flex>
			</Flex>
		</CardLayoutWithHead>
	)
}

// With aside
