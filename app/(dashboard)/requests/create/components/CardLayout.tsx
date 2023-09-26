import { Box } from "@mantine/core"
import styles from "./styles.module.css"
interface IProps {
	children: React.ReactNode
}
export default function CardLayout({ children }: IProps) {
	return <Box className={styles.layout}>{children}</Box>
}
