import { Box, Center, Flex, Group, Stack, Text } from "@mantine/core"
import styles from "./styles.module.css"
import { Open, UploadCloud, PDF, Check, TrashFilled } from "@/public/icons"
import { Document as Docs, Page, pdfjs } from "react-pdf"
import "react-pdf/dist/Page/AnnotationLayer.css"
import "react-pdf/dist/Page/TextLayer.css"
import { useMemo } from "react"

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	"pdfjs-dist/build/pdf.worker.min.js",
	import.meta.url
).toString()

const options = {
	cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
	cMapPacked: true,
	standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts`,
}
interface IProps {
	value: File | null
	onChange: React.ChangeEventHandler<HTMLInputElement>
	remove: () => void
	active: boolean
	setActive: () => void
	show: () => void
}
const CustomNda = ({
	value,
	onChange,
	active,
	setActive,
	remove,
	show,
}: IProps) => {
	const file = useMemo(() => {
		return value
	}, [value])

	return (
		<Flex
			className={styles.cont}
			pos='relative'
		>
			{file ? (
				<Flex
					direction='column'
					w='100%'
					pt='1.6rem'
					pl='0.8rem'
					pr='0.8rem'
					gap='1.6rem'
					wrap='nowrap'
				>
					<Group
						justify='space-between'
						w='100%'
						wrap='nowrap'
					>
						<Group gap='0.8rem'>
							<PDF />
							<Stack gap='0.2rem'>
								<Text
									c='var(--mantine-color-brand-4)'
									fz='1.6rem'
									fw={500}
									lh='1.6644rem'
									lts={-0.16}
									maw='12rem'
									className={styles.pdfTitle}
								>
									{file.name}
								</Text>

								<Text
									lh='2rem'
									fz='1.2rem'
									c='#A1A1A1'
								>
									{(file.size / 10e5).toFixed(2)} MB
								</Text>
							</Stack>
						</Group>
						<Box
							className={styles.checkBox}
							onClick={setActive}
						>
							{active ? (
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
										strokeWidth='0.393258'
									/>
								</svg>
							)}
						</Box>
					</Group>
					<Box
						className={styles.pdfPreview}
						pos='relative'
					>
						<Docs
							file={file}
							options={options}
							className={styles.docs}
							error='Failed to load PDF, click the button below to download'
						>
							<Flex
								pos='absolute'
								top='0.8rem'
								right='0.9rem'
								className={styles.actions}
								gap='0.8rem'
							>
								<Center
									onClick={show}
									className={styles.action}
								>
									<Open />
								</Center>
								<Center
									onClick={remove}
									className={styles.action}
								>
									<TrashFilled />
								</Center>
							</Flex>
							<Page
								pageNumber={1}
								className={styles.docs}
							/>
						</Docs>
					</Box>
				</Flex>
			) : (
				<Flex
					align='center'
					justify='center'
					w='100%'
					pos='relative'
					h='100%'
				>
					<input
						type='file'
						accept='application/pdf'
						className={styles.input}
						size={10e5}
						onChange={onChange}
					/>

					<Stack
						gap='3.2rem'
						justify='center'
						align='center'
					>
						<Center
							className={styles.upload}
							h='6rem'
							w='6rem'
						>
							<UploadCloud />
						</Center>
						<Stack gap='0.5rem'>
							<Text
								c='var(--mantine-color-brand-4)'
								fw={500}
								lh='1.8623rem'
								lts={-0.21}
								fz='1.4rem'
								ta='center'
							>
								Upload your NDA
							</Text>
							<Text
								lh='1.5859rem'
								fz='1.0573rem'
								c='#475467'
								ta='center'
							>
								PDF (max. 5.0mb)
							</Text>
						</Stack>
					</Stack>
				</Flex>
			)}
		</Flex>
	)
}

export default CustomNda
