"use client"
import PageHeader from "@/app/Components/PageHeader/PageHeader"
import List from "@/app/Components/List/List"
import { Flex, Space } from "@mantine/core"

export default function Page() {
	return (
		<Flex
			direction='column'
			gap='2rem'
			mt='0.8rem'
			w='100%'
		>
			<PageHeader
				title='Requests'
				subtext='Select preferred criteria for testers'
			/>
			<List>
				<List.Header />
				<List.Body />
			</List>
		</Flex>
	)
}
