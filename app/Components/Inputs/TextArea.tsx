"use client"
import styles from "./Input.module.css"
import { Textarea } from "react-hook-form-mantine"
import type { Control } from "react-hook-form"
import cx from "clsx"

interface IProps {
	name: string
	disabled?: boolean
	label?: string
	placeholder?: string
	required?: true
	control?: Control<any, any>
}
export default function CustomTextArea({
	name,
	placeholder,
	control,
	disabled,
	label,
	required,
}: IProps) {
	return (
		<Textarea
			name={name}
			placeholder={placeholder}
			control={control}
			disabled={disabled}
			label={label}
			required={required}
			classNames={{
				input: cx(styles.input, styles.textarea),
				error: styles.error,
				wrapper: styles.wrapper,
			}}
		/>
	)
}
