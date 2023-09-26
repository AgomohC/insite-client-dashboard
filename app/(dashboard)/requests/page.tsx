"use client"
import PageHeader from "@/app/Components/PageHeader/PageHeader"
import List from "@/app/Components/List/List"
import { Flex } from "@mantine/core"
import { useRouter } from "next/navigation"
export default function RequestsPage() {
	const { push } = useRouter()
	return (
		<Flex
			direction='column'
			gap='2rem'
			w='93.9rem'
			mt='10.45rem'
		>
			<PageHeader
				title='Requests'
				subtext='Select preferred criteria for testers'
				gap='sm'
			/>
			<List>
				<List.Header btnAction={() => push("/requests/create")} />
				<List.Body />
			</List>
		</Flex>
	)
}
