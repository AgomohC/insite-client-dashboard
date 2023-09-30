import styles from "./CustomSwitch.module.css"
import { Box } from "@mantine/core"
import cx from "clsx"

interface IProps {
	label: string
	active: boolean
	onChange: () => void
}
export default function CustomSwitch({ label, active, onChange }: IProps) {
	return (
		<Box
			className={styles.track}
			onClick={onChange}
			role='checkbox'
			aria-checked={active}
		>
			<Box
				className={cx(styles.thumb, {
					[styles.thumbActive]: active,
				})}
			/>
		</Box>
	)
}
