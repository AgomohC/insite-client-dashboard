"use client"
import PageHeader from "@/app/Components/PageHeader/PageHeader"
import { Flex } from "@mantine/core"
import List from "@/app/Components/List/List"
import { useRouter } from "next/navigation"

export default function HomePage() {
	const { push } = useRouter()
	return (
		<Flex
			direction='column'
			gap='2rem'
			w='93.9rem'
		>
			<List>
				<List.Header btnAction={() => push("/requests/create")} />
				<List.Body />
			</List>
		</Flex>
	)
}
