"use client"
import PageHeader from "@/app/Components/PageHeader/PageHeader"
import { Flex } from "@mantine/core"
import List from "@/app/Components/List/List"
import { useRouter } from "next/router"

export default function HomePage() {
	const { push } = useRouter()
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
				<List.Header btnAction={() => push("/requests/create")} />
				<List.Body />
			</List>
		</Flex>
	)
}
