"use client"
import { usePathname } from "next/navigation"

export function useSubApp() {
	const pathname = usePathname()
	return {
		active: (path: string) => {
			return pathname.split("/").includes(path)
		},
	}
}
