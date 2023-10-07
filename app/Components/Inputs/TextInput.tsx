"use client"
import styles from "./Input.module.css"
import { TextInput } from "react-hook-form-mantine"
import { TextInput as MantineTextInput } from "@mantine/core"
import type { Control } from "react-hook-form"
import { useRef, useState } from "react"
import cx from "clsx"

interface IProps {
	name: string
	label: string
	value?: string
	disabled?: boolean
	placeholder?: string
	required?: true
	control?: Control<any, any>
	rightSection?: React.ReactNode
	className?: string
}

export default function CustomTextInput({
	name,
	disabled,
	label,
	placeholder,
	required,
	control,
	rightSection,
	// value,
	className,
}: IProps) {
	const [focused, setFocused] = useState(false)
	const ref = useRef<HTMLInputElement>(null)
	const [value, setValue] = useState("")
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
					input: cx(styles.input, {
						[styles.inputFocus]: focused || !!value,
					}),
					error: styles.error,
					wrapper: styles.wrapper,
					section: styles.section,
					root: styles.root,
					label: cx(styles.inputLabel, {
						[styles.inputLabelFocus]: focused || !!value,
					}),
				}}
				rightSection={rightSection}
				onFocus={() => {
					setFocused(true)
				}}
				onBlur={() => setFocused(false)}
				className={className}
				onChange={e => {
					setValue(e.target.value)
				}}
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
					input: cx(styles.input, {
						[styles.inputFocus]: focused || !!value,
					}),
					error: styles.error,
					wrapper: styles.wrapper,
					section: styles.section,
					root: styles.root,
					label: cx(styles.inputLabel, {
						[styles.inputLabelFocus]: focused || !!value,
					}),
				}}
				rightSection={rightSection}
				onFocus={() => setFocused(true)}
				onBlur={() => setFocused(false)}
				onChange={e => {
					setValue(e.target.value)
				}}
			/>
		)
	}
}
