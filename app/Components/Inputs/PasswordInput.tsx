"use client"
import styles from "./Input.module.css"
import { PasswordInput } from "react-hook-form-mantine"
import { PasswordInput as MantinePasswordInput } from "@mantine/core"
import type { Control } from "react-hook-form"
import cx from "clsx"
interface IProps {
	name: string
	disabled?: boolean
	label?: string
	placeholder?: string
	required?: true
	control?: Control<any, any>
	rightSection?: React.ReactNode
	value?: string
	onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export default function CustomPasswordInput({
	name,
	disabled,
	label,
	placeholder,
	required,
	control,
	rightSection,
	value,
	onChange,
}: IProps) {
	if (control) {
		return (
			<PasswordInput
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
					innerInput: styles.passwordInnerInput,
				}}
				rightSection={rightSection}
				visibilityToggleIcon={() => <></>}
			/>
		)
	} else {
		return (
			<MantinePasswordInput
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
					innerInput: styles.passwordInnerInput,
				}}
				rightSection={rightSection}
				visibilityToggleIcon={() => <></>}
				value={value}
				onChange={onChange}
			/>
		)
	}
}
