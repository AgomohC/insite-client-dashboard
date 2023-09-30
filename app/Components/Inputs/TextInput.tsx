"use client"
import styles from "./Input.module.css"
import { TextInput } from "react-hook-form-mantine"
import { TextInput as MantineTextInput } from "@mantine/core"
import type { Control } from "react-hook-form"

interface IProps {
	name: string
	disabled?: boolean
	label?: string
	placeholder?: string
	required?: true
	control?: Control<any, any>
	rightSection?: React.ReactNode
}

export default function CustomTextInput({
	name,
	disabled,
	label,
	placeholder,
	required,
	control,
	rightSection,
}: IProps) {
	if (control) {
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
					root: styles.root,
				}}
				rightSection={rightSection}
			/>
		)
	} else {
		return (
			<MantineTextInput
				name={name}
				disabled={disabled}
				label={label}
				placeholder={placeholder}
				required={required}
				classNames={{
					input: styles.input,
					error: styles.error,
					wrapper: styles.wrapper,
					section: styles.section,
					root: styles.root,
				}}
				rightSection={rightSection}
			/>
		)
	}
}
