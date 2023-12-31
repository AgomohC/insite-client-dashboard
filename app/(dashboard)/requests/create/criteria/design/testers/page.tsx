import { Flex } from "@mantine/core"
import Link from "next/link"

export default function Page() {
	return (
		<>
			<Flex gap='1rem'>
				<Link href='/requests/create/criteria/design/testers/insite'>
					insite
				</Link>
				<Link href='/requests/create/criteria/design/testers/controlled'>
					controlled
				</Link>
			</Flex>
			<h1>Page where users pick their testers</h1>
		</>
	)
}
