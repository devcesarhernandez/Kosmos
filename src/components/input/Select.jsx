const Select = (props) => {
	const { label, id, type, options, selectProps } = props;
	return <div className="form-select">
		<label>{label}</label>
		<select name={id} id={id} {...selectProps}>
			{options.map( (option, idex) => (
				<option key={idex} value={option.value}>{option.displayValue}</option>
			))}
		</select>
	</div>
}

export default Select;