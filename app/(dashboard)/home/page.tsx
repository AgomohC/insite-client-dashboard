"use client"
import { Flex } from "@mantine/core"
import List from "@/app/Components/List/List"
import { useRouter } from "next/navigation"
import CardLayout from "./components/Cards/CardLayout"

export default function HomePage() {
	const { push } = useRouter()
	return (
		<Flex
			direction='column'
			gap='4.2rem'
			w='93.9rem'
			mb='4.8rem'
		>
			<CardLayout />
			<List>
				<List.Header btnAction={() => push("/requests/create")} />
				<List.Body />
			</List>
		</Flex>
	)
}
