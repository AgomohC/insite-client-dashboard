import { Box, Flex, Text } from "@mantine/core"
import { TemplateCard, PrototypeCard, SurveyCard } from "./Cards"
import styles from "./Cards.module.css"
export default function CardLayout() {
	return (
		<Box mt='12.8rem'>
			<Text
				component='h1'
				className={styles.title}
			>
				Welcome John,
			</Text>
			<Flex
				gap='2.4rem'
				mt='1.8rem'
			>
				<PrototypeCard />
				<SurveyCard />
				<Flex
					gap='1.6rem'
					direction='column'
				>
					<TemplateCard type='template' />
					<TemplateCard type='documentation' />
				</Flex>
			</Flex>
		</Box>
	)
}
