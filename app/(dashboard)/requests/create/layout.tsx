import CustomTabs from "@/app/Components/Tabs/Tabs"

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<CustomTabs />
			{children}
		</>
	)
}
