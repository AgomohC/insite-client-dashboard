import Link from "next/link"
export default function Page() {
	return (
		<>
			<h1>
				This is the page the user add their request title, request
				description and request goal
			</h1>
			<Link href={"/requests/create"}>Next Page</Link>
		</>
	)
}
