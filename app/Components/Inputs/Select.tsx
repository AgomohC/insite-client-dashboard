import styles from "./Input.module.css"
import type { Control } from "react-hook-form"
import { Select } from "react-hook-form-mantine"
import { ExpandMore } from "@/public/icons"
import { useMemo } from "react"
import { Select as MantineSelect } from "@mantine/core"
interface IProps {
	name: string
	disabled?: boolean
	label?: string
	placeholder?: string
	required?: true
	control?: Control<any, any>
	data: Array<string> | Array<{ label: string; value: string }>
	defaultValue?: string
	rightSection?: React.ReactNode
	onChange?: (value: string) => void
	value?: string
}

export default function CustomSelect({
	name,
	placeholder,
	control,
	label,
	required,
	disabled,
	data,
	defaultValue,
	value,
	onChange,
}: IProps) {
	if (control) {
		return (
			<Select
				name={name}
				placeholder={placeholder}
				control={control}
				label={label}
				required={required}
				disabled={disabled}
				classNames={{
					input: styles.input,
					error: styles.error,
					wrapper: styles.wrapper,
					section: styles.section,
					options: styles.options,
					option: styles.option,
					dropdown: styles.dropdown,
					root: styles.root,
				}}
				rightSection={<ExpandMore className={styles.icon} />}
				data={data}
				allowDeselect={false}
				checkIconPosition={undefined}
				defaultValue={defaultValue}
			/>
		)
	} else {
		return (
			<MantineSelect
				name={name}
				placeholder={placeholder}
				label={label}
				required={required}
				disabled={disabled}
				classNames={{
					input: styles.input,
					error: styles.error,
					wrapper: styles.wrapper,
					section: styles.section,
					options: styles.options,
					option: styles.option,
					dropdown: styles.dropdown,
					root: styles.root,
				}}
				rightSection={<ExpandMore className={styles.icon} />}
				data={data}
				allowDeselect={false}
				checkIconPosition={undefined}
				defaultValue={defaultValue}
				onChange={onChange}
				value={value}
			/>
		)
	}
}
