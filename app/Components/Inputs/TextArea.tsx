"use client"
import styles from "./Input.module.css"
import { Textarea } from "react-hook-form-mantine"
import type { Control } from "react-hook-form"
import cx from "clsx"
import { useState } from "react"
import { Textarea as MantineTextarea } from "@mantine/core"

interface IProps {
	name: string
	disabled?: boolean
	label: string
	placeholder?: string
	required?: true
	control?: Control<any, any>
	className?: string
	value?: string
}
export default function CustomTextArea({
	name,
	placeholder,
	control,
	disabled,
	label,
	required,
	className,
	value,
}: IProps) {
	const [focused, setFocused] = useState(false)

	if (control) {
		return (
			<Textarea
				name={name}
				placeholder={placeholder}
				control={control}
				disabled={disabled}
				label={label}
				required={required}
				classNames={{
					input: cx(styles.input, styles.textarea, {
						[styles.textAreaFocus]: focused || !!value,
					}),
					error: styles.error,
					wrapper: styles.wrapper,
					label: cx(styles.inputLabel, {
						[styles.inputLabelFocus]: focused || !!value,
					}),
					root: styles.root,
				}}
				onFocus={() => {
					setFocused(true)
				}}
				onBlur={() => setFocused(false)}
				className={className}
			/>
		)
	} else {
		return (
			<MantineTextarea
				name={name}
				placeholder={placeholder}
				disabled={disabled}
				label={label}
				required={required}
				classNames={{
					input: cx(styles.input, styles.textarea, {
						[styles.textAreaFocus]: focused || !!value,
					}),
					error: styles.error,
					wrapper: styles.wrapper,
					label: cx(styles.inputLabel, {
						[styles.inputLabelFocus]: focused || !!value,
					}),
					root: styles.root,
				}}
				onFocus={() => {
					setFocused(true)
				}}
				onBlur={() => setFocused(false)}
				className={className}
			/>
		)
	}
}
