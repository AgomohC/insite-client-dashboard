"use client"
import {
	Box,
	Flex,
	Group,
	Modal,
	ScrollArea,
	Stack,
	Text,
	Button,
	Collapse,
	Center,
} from "@mantine/core"
import CardLayoutWithHead from "../../../components/CardLayoutWithHeader"
import styles from "../../../components/styles.module.css"
import { LogoSmall, ExpandMore, PDFDownload, Arrow } from "@/public/icons"
import avatar2 from "@/public/images/avatar-2.png"
import avatar3 from "@/public/images/avatar-3.png"
import TestingGroupItem from "../testers/components/TestingGroupItem/TestingGroupItem"
import { useState } from "react"
import InsiteNda from "./Components/InsiteNda"
import CustomNda from "./Components/CustomNda"
import { useDisclosure } from "@mantine/hooks"
import { Document as Docs, Page as PDFPage, pdfjs } from "react-pdf"
import "react-pdf/dist/Page/AnnotationLayer.css"
import "react-pdf/dist/Page/TextLayer.css"
import pdfStyles from "./Components/styles.module.css"
import CustomButton from "@/app/Components/Button/Button"
import { useRouter } from "next/navigation"

const testingGroups = [
	{ name: "Students", number: 34, images: [avatar2, avatar3] },
]

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	"pdfjs-dist/build/pdf.worker.min.js",
	import.meta.url
).toString()

const options = {
	cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
	cMapPacked: true,
	standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts`,
}
export default function Page() {
	const [file, setFile] = useState<File | null>(null)
	const [ndaType, setNdaType] = useState<"custom" | "insite" | "">("")
	const [numPages, setNumPages] = useState<number | null>(null)
	const { push } = useRouter()

	function onDocumentLoadSuccess({ numPages }: { numPages: number | null }) {
		setNumPages(numPages)
	}

	const [modalDetails, setModalDetails] = useState<string | typeof file>(null)
	const [opened, { open, close }] = useDisclosure(false)

	return (
		<>
			<Modal
				opened={opened}
				onClose={() => {
					setModalDetails(null)
					close()
				}}
				withCloseButton={false}
				yOffset={0}
				size='auto'
				classNames={{
					body: styles.modalBody,
					inner: styles.modalInner,
					content: styles.modalContent,
					overlay: styles.modalOverlay,
				}}
			>
				<Stack
					bg='transparent'
					gap={0}
				>
					<Group
						align='center'
						justify='space-between'
						bg='transparent'
						w='100%'
						mb='4rem'
					>
						<Group
							gap='0.8rem'
							align='center'
							className={styles.modalNav}
							onClick={() => {
								close()
								setModalDetails(null)
							}}
							maw='fit-content'
						>
							<ExpandMore />
							<Text
								c='var(--mantine-color-white)'
								lts={-0.08}
								fw={500}
								fz='1.6rem'
								lh='2rem'
							>
								INSITE© Standard NDA
							</Text>
						</Group>
						<Button
							p='1.6rem'
							rightSection={<PDFDownload />}
							classNames={{
								inner: styles.btnInner,
								section: styles.btnSection,
								root: styles.modalBtn,
							}}
							component='a'
							href={
								typeof modalDetails === "string"
									? modalDetails
									: modalDetails
									? window.URL.createObjectURL(modalDetails)
									: ""
							}
							target='_blank'
							download
						>
							Download PDF
						</Button>
					</Group>

					<Box
						pr='17.4rem'
						pl='17.4rem'
						className={pdfStyles.pdfBox}
					>
						<ScrollArea h='calc(100vh - (9rem + 4rem + 5.6rem))'>
							<Docs
								file={modalDetails}
								options={options}
								className={pdfStyles.docs}
								error='Failed to load PDF, click the button below to download'
								onLoadSuccess={onDocumentLoadSuccess}
							>
								{Array.from(new Array(numPages), (el, index) => (
									<PDFPage
										key={`page_${index + 1}`}
										pageNumber={index + 1}
										className={pdfStyles.docs}
									/>
								))}
							</Docs>
						</ScrollArea>
					</Box>
				</Stack>
			</Modal>
			<CardLayoutWithHead
				type='prototype'
				headerText='Choose agreements'
				href='/requests/create/criteria/prototype'
			>
				<Box
					pt='3.2rem'
					pb='3.2rem'
					pl='4rem'
					pr='4rem'
					w='100%'
				>
					<Flex
						direction='column'
						className={styles.nda}
						w='100%'
					>
						<Group
							align='center'
							justify='space-between'
							pr='1.6rem'
							pl='1.6rem'
							h='9rem'
						>
							<Group
								align='center'
								gap='1.6rem'
							>
								<LogoSmall />
								<Text
									fw={500}
									lts={-0.16}
									lh='1.644rem'
									fz='1.6rem'
									c='var(--mantine-color-brand-4)'
								>
									InsitePro Testers
								</Text>
							</Group>
							{testingGroups.map(item => (
								<TestingGroupItem
									key={item.name}
									item={item}
								/>
							))}
						</Group>
						<Stack
							gap='1.6rem'
							p='3.2rem'
							className={styles.ndaBody}
						>
							<Text
								c='#565656'
								fz='1.6rem'
								lh='2.128rem'
							>
								Choose Agreement Type
							</Text>
							<Group
								gap='1.6rem'
								wrap='nowrap'
							>
								<CustomNda
									value={file}
									onChange={e => {
										if (e.target.files) {
											if (e.target.files[0].size > 10e5) {
												return
											}
											if (
												e.target.files[0].type !== "application/pdf"
											) {
												console.log(e.target.files[0].type)
												return
											}
											setFile(e.target.files[0])
										}
									}}
									remove={() => {
										setFile(null)
									}}
									show={() => {
										setModalDetails(file)
										open()
									}}
									active={ndaType === "custom"}
									setActive={() => {
										if (ndaType === "custom") {
											setNdaType("")
										} else {
											setNdaType("custom")
										}
									}}
								/>
								<InsiteNda
									active={ndaType === "insite"}
									setActive={() => {
										if (ndaType === "insite") {
											setNdaType("")
										} else {
											setNdaType("insite")
										}
									}}
									show={() => {
										setModalDetails("/assets/nda.pdf")
										open()
									}}
								/>
							</Group>
						</Stack>
					</Flex>
					<Collapse in={!!ndaType}>
						<Group
							justify='flex-end'
							w='100%'
							mt='2.4rem'
						>
							<CustomButton
								variant='filled'
								type='button'
								title='Continue'
								rightSection={
									<Center className={styles.icon}>
										<Arrow />
									</Center>
								}
								action={() => {
									push(`/requests/create/criteria/prototype/summary`)
								}}
							/>
						</Group>
					</Collapse>
				</Box>
			</CardLayoutWithHead>
		</>
	)
}
