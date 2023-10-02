import styles from "./Button.module.css"
import cx from "clsx"
import { Button } from "@mantine/core"

interface IProps {
	title: React.ReactNode
	variant: "outlined" | "filled"
	rightSection?: React.ReactNode
	leftSection?: React.ReactNode
	action?: () => void
	fullWidth?: boolean
	disabled?: boolean
	type: "button" | "submit"
	loading?: boolean
}

export default function CustomButton({
	rightSection,
	leftSection,
	title,
	action,
	fullWidth,
	variant,
	disabled,
	loading,
	type,
}: IProps) {
	return (
		<Button
			onClick={action}
			rightSection={rightSection}
			leftSection={leftSection}
			variant='filled'
			fullWidth={fullWidth}
			classNames={{
				root: cx(styles.btnRoot, {
					[styles.btnRootOutlined]: variant === "outlined",
				}),
				inner: cx(styles.btnInner, {
					[styles.btnInnerFullWidth]: fullWidth,
				}),
				section: styles.btnIcon,
				label: cx(styles.btnLabel, {
					[styles.btnLabelOutlined]: variant === "outlined",
					[styles.btnLabelDisabled]: disabled,
				}),
			}}
			disabled={disabled}
			loading={loading}
			type={type}
		>
			{title}
		</Button>
	)
}
