import { Box, Flex, Text, Image as MantineImage } from "@mantine/core"
import { Arrow, New } from "@/public/icons"
import prototypeInfographic from "@/public/images/prototype-infographic.png"
import cx from "clsx"
import surveyInfographic from "@/public/images/survey-infographic.png"
import Image from "next/image"
import styles from "./Cards.module.css"

const textMap = {
	documentation: {
		title: "Documentation",
		subtext: "Learn more about installing and using Incite",
	},
	template: {
		title: "Templates",
		subtext: "Get inspired with 75+ product feedback templates",
	},
}

export function PrototypeCard() {
	return (
		<Flex
			className={styles.prototypeCard}
			direction='column'
			gap='3rem'
		>
			<New className={cx(styles.newIcon, styles.prototypeIcon)} />
			<Flex
				direction='column'
				mt='6.4rem'
			>
				<Text
					component='h3'
					className={cx(styles.prototypeText, styles.text)}
				>
					New
				</Text>
				<Text
					component='h3'
					className={cx(styles.prototypeText, styles.text)}
				>
					Prototype Testing
				</Text>
			</Flex>
			<Box className={styles.img}>
				<MantineImage
					src={prototypeInfographic}
					alt={"prototypeInfographic"}
					component={Image}
				/>
			</Box>
		</Flex>
	)
}

export function SurveyCard() {
	return (
		<Flex
			className={styles.surveyCard}
			direction='column'
			gap='3rem'
		>
			<New className={cx(styles.newIcon, styles.surveyIcon)} />
			<Flex
				direction='column'
				mt='6.4rem'
			>
				<Text
					component='h3'
					className={cx(styles.surveyText, styles.text)}
				>
					New
				</Text>
				<Text
					component='h3'
					className={cx(styles.surveyText, styles.text)}
				>
					User Survey
				</Text>
			</Flex>
			<Box className={styles.img}>
				<MantineImage
					src={surveyInfographic}
					alt={"surveyInfographic"}
					component={Image}
				/>
			</Box>
		</Flex>
	)
}
export function TemplateCard({ type }: { type: keyof typeof textMap }) {
	const text = textMap[type]
	return (
		<Flex
			className={styles.layoutCard}
			direction='column'
			justify='space-between'
		>
			<Text
				className={styles.templateTitle}
				component='h3'
			>
				{text.title}
			</Text>
			<Flex>
				<Text
					className={styles.templateSubText}
					maw='23.1rem'
				>
					{text.subtext}
				</Text>
				<Box className={styles.icon}>
					<Arrow />
				</Box>
			</Flex>
		</Flex>
	)
}
