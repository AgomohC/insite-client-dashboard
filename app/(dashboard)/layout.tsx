import DashboardLayout from "../Components/Dashboard/dashboard"

export default function ClientDashboardLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <DashboardLayout>{children}</DashboardLayout>
}
