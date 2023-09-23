import { Flex } from "@mantine/core"
import Link from "next/link"

export default function Page() {
	return (
		<>
			<Flex gap='1rem'>
				<Link href={"/requests/create/design/target"}>Design</Link>
				<Link href={"/requests/create/image/target"}>Image</Link>
				<Link href={"/requests/create/prototype/target"}>Prototype</Link>
			</Flex>
			<h1>
				This is the page the user chooses their criteria, i.e. image,
				prototype or file
			</h1>
		</>
	)
}
