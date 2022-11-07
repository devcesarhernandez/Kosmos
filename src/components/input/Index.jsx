const Input = (props) => {
	const { label, type, id, inputProps } = props;

	return <div className="form-input">
		<label htmlFor={id}>{label}</label>
		<input name={id} id={id} type={type || "text"} {...inputProps} />
	</div>
}

export default Input;