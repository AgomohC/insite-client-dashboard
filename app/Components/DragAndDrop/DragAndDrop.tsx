"use client"
import cx from "clsx"
import styles from "./DragAndDrop.module.css"
import "@mantine/dropzone/styles.css"
import {
	Dropzone,
	MIME_TYPES,
	IMAGE_MIME_TYPE,
	FileWithPath,
} from "@mantine/dropzone"
import { Box, Flex, Text, Image as MantineImage } from "@mantine/core"
import Image from "next/image"
import sketch from "@/public/images/sketch.png"
import figma from "@/public/images/figma.png"
import design from "@/public/images/design.png"
import IconImage from "@/public/images/image.svg"
import Csv from "@/public/images/csv.svg"
import { CSSProperties } from "react"
interface IProps {
	type: "csv" | "design" | "image"
	fileType?: Array<string>
	onChange: (e: FileWithPath[]) => void
	maxSize: number
	title: string
	className?: string
}

export default function DragAndDrop({
	type,
	title,
	className,
	onChange,
	maxSize,
}: IProps) {
	return (
		<Flex
			direction='column'
			gap='1.6rem'
		>
			{title ? <Text className={styles.dropTitle}>{title}</Text> : null}
			<Dropzone
				onDrop={e => {
					onChange(e)
				}}
				onReject={files => {
					console.log(files)
				}}
				classNames={{
					root: cx(styles.root, { [styles.rootCsv]: type === "csv" }),
				}}
				className={className}
				maxFiles={1}
				maxSize={maxSize}
				accept={
					type === "csv"
						? [MIME_TYPES.csv, MIME_TYPES.xlsx, MIME_TYPES.xls]
						: IMAGE_MIME_TYPE
				}
			>
				<Flex
					w='100%'
					justify='center'
					align='center'
				>
					<Dropzone.Accept>
						<></>
					</Dropzone.Accept>
					<Dropzone.Reject>
						<></>
					</Dropzone.Reject>
					<Dropzone.Idle>
						<></>
					</Dropzone.Idle>
					<Flex
						gap='0.8rem'
						direction='column'
						justify='center'
						align='center'
					>
						{type === "csv" ? (
							<Box
								className={cx(styles.icon, {
									[styles.iconExcel]: type === "csv",
								})}
							>
								<Csv />
							</Box>
						) : null}

						{type === "image" ? (
							<Box className={styles.icon}>
								<IconImage />
							</Box>
						) : null}

						{type === "design" ? (
							<Flex className={styles.iconGroup}>
								<Box
									className={cx(styles.icon, styles.skew)}
									style={
										{
											"--skew-deg": "-45deg",
											"--img-skew-deg": "45deg",
										} as CSSProperties
									}
								>
									<MantineImage
										component={Image}
										alt='sketch'
										src={sketch.src}
										width={45}
										height={36}
										className={styles.iconImg}
									/>
								</Box>
								<Box
									className={cx(styles.icon, styles.skew)}
									style={
										{
											"--skew-deg": "0deg",
											"--img-skew-deg": "0deg",
										} as CSSProperties
									}
								>
									<MantineImage
										component={Image}
										alt='figma'
										src={figma.src}
										width={45}
										height={36}
										className={styles.iconImg}
									/>
								</Box>
								<Box
									className={cx(styles.icon, styles.skew)}
									style={
										{
											"--skew-deg": "45deg",
											"--img-skew-deg": "-45deg",
										} as CSSProperties
									}
								>
									<MantineImage
										component={Image}
										alt='design'
										src={design.src}
										width={45}
										height={36}
										className={styles.iconImg}
									/>
								</Box>
							</Flex>
						) : null}

						{type === "csv" ? (
							<Flex
								gap='1.2rem'
								direction='column'
								align='center'
								justify='center'
							>
								<Text className={styles.dropText}>
									Drag & Drop or{" "}
									<span className={styles.browse}>Browse</span> your
									files
								</Text>

								<Text className={styles.dropSubtext}>
									Max. file size: {maxSize / 1024 ** 2} MB
								</Text>
							</Flex>
						) : null}
						{type === "design" ? (
							<Flex
								gap='1.2rem'
								direction='column'
								align='center'
								justify='center'
							>
								<Text className={cx(styles.dropText, styles.notCsv)}>
									Drag and drop a Design File
								</Text>

								<Box className={styles.dropSubtextBox}>
									Upload design file
								</Box>
							</Flex>
						) : null}

						{type === "image" ? (
							<Flex
								gap='1.2rem'
								direction='column'
								align='center'
								justify='center'
							>
								<Text className={cx(styles.dropText, styles.notCsv)}>
									Drag and drop a Design Image
								</Text>

								<Box className={styles.dropSubtextBox}>
									Upload design
								</Box>
							</Flex>
						) : null}
					</Flex>
				</Flex>
			</Dropzone>
			<Flex>
				<Text></Text>
				<Text></Text>
			</Flex>
		</Flex>
	)
}
