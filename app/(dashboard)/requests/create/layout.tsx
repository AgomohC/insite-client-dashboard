import CustomTabs from "@/app/Components/Tabs/Tabs"
import { Box, Flex } from "@mantine/core"

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<Flex
			gap='8.8rem'
			mt='11.2rem'
			mb='4.8rem'
		>
			<Box mt='11.6rem'>
				<CustomTabs />
			</Box>
			{children}
		</Flex>
	)
}
