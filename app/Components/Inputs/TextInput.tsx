"use client"
import styles from "./Input.module.css"
import { TextInput } from "react-hook-form-mantine"
import type { Control } from "react-hook-form"

interface IProps {
	name: string
	disabled?: boolean
	label?: string
	placeholder?: string
	required?: true
	control?: Control<any, any>
}

export default function CustomTextInput({
	name,
	disabled,
	label,
	placeholder,
	required,
	control,
}: IProps) {
	return (
		<TextInput
			name={name}
			disabled={disabled}
			label={label}
			placeholder={placeholder}
			required={required}
			control={control}
			classNames={{
				input: styles.input,
				error: styles.error,
				wrapper: styles.wrapper,
				section: styles.section,
			}}
		/>
	)
}
