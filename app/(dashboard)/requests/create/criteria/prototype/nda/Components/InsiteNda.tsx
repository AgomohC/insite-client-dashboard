import { Document as Docs, Page, pdfjs } from "react-pdf"
import "react-pdf/dist/Page/AnnotationLayer.css"
import { Box, Center, Flex, Group, Stack, Text } from "@mantine/core"
import styles from "./styles.module.css"
import { Open, UploadCloud, PDF, Check } from "@/public/icons"

import "react-pdf/dist/Page/TextLayer.css"
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
	active: boolean
	setActive: () => void
	show: () => void
}
const InsiteNda = ({ active, setActive, show }: IProps) => {
	return (
		<Flex
			direction='column'
			w='100%'
			pt='1.6rem'
			pl='0.8rem'
			pr='0.8rem'
			gap='1.6rem'
			className={styles.cont}
		>
			<Group
				justify='space-between'
				w='100%'
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
						>
							INSITE©
						</Text>

						<Text
							c='var(--mantine-color-brand-4)'
							fz='1.6rem'
							fw={500}
							lh='1.6644rem'
							lts={-0.16}
						>
							Standard NDA
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
					file={"/assets/nda.pdf"}
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
					</Flex>
					<Page
						pageNumber={1}
						className={styles.docs}
					/>
				</Docs>
			</Box>
		</Flex>
	)
}

export default InsiteNda
