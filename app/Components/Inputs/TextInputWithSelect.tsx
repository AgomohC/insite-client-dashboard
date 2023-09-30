import styles from "./Input.module.css"
import { TextInput } from "react-hook-form-mantine"
import type { Control } from "react-hook-form"
import { Combobox, InputBase, useCombobox, Input } from "@mantine/core"
import { useState } from "react"
import { ExpandMore } from "@/public/icons"
import cx from "clsx"

interface IProps {
	name: string
	disabled?: boolean
	label?: string
	placeholder?: string
	required?: true
	selectValue: "figma" | "sketch"

	defaultSelectValue: string
	rightSection?: React.ReactNode
	onSelectChange: (src: "figma" | "sketch") => void
	selectOptions:
		| Array<string>
		| Array<{ label: React.ReactNode; value: string }>
	control: Control<any, any>
}

export default function CustomTextInputWithSelect({
	name,
	disabled,
	label,
	placeholder,
	required,
	defaultSelectValue,
	control,
	rightSection,
	onSelectChange,
	selectValue,
	selectOptions,
}: IProps) {
	const combobox = useCombobox({
		onDropdownClose: () => combobox.resetSelectedOption(),
	})
	const [value, setValue] = useState<"figma" | "sketch">(selectValue)

	function getLabel(value: string) {
		const isString = selectOptions.some(option => option === "string")

		if (isString) {
			return value
		} else {
			const label = selectOptions.find(
				option => typeof option !== "string" && option.value === value
			)

			return label
				? (label as { label: React.ReactNode; value: string }).label
				: ""
		}
	}
	const [valueLabel, setLabelValue] = useState<React.ReactNode>(
		getLabel(defaultSelectValue)
	)

	const options = selectOptions.map(item => {
		if (typeof item === "string") {
			return (
				<Combobox.Option
					value={item}
					key={item}
				>
					{item}
				</Combobox.Option>
			)
		} else {
			return (
				<Combobox.Option
					value={item.value}
					key={item.value}
				>
					{item.label}
				</Combobox.Option>
			)
		}
	})
	return (
		<TextInput
			name={name}
			disabled={disabled}
			label={label}
			placeholder={placeholder}
			required={required}
			control={control}
			classNames={{
				input: cx(styles.input, styles.textSelectInput),
				error: styles.error,
				wrapper: styles.wrapper,
				section: styles.textSelectSection,
			}}
			rightSection={rightSection}
			leftSection={
				<Combobox
					store={combobox}
					onOptionSubmit={val => {
						setValue(val as "figma" | "sketch")
						setLabelValue(getLabel(val))
						onSelectChange(val as "figma" | "sketch")
						combobox.closeDropdown()
					}}
				>
					<Combobox.Target>
						<InputBase
							component='button'
							type='button'
							pointer
							rightSection={
								<ExpandMore
									className={cx(styles.icon, styles.comboBoxInputIcon)}
								/>
							}
							onClick={() => combobox.toggleDropdown()}
							classNames={{
								root: styles.comboBoxInputRoot,
								wrapper: styles.comboBoxInputWrapper,
								input: styles.comboBoxInput,
								section: styles.comboBoxInputIconBox,
							}}
						>
							{valueLabel || (
								<Input.Placeholder>Pick value</Input.Placeholder>
							)}
						</InputBase>
					</Combobox.Target>

					<Combobox.Dropdown>
						<Combobox.Options>{options}</Combobox.Options>
					</Combobox.Dropdown>
				</Combobox>
			}
		/>
	)
}
