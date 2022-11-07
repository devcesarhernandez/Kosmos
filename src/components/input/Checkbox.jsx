const Checkbox = (props) => {
	const { label, id, ...checkProps } = props;
	return <div className="form-checkbox">
		<input name={id} id={id} type="checkbox" {...checkProps}/>
		<label htmlFor={id}>{label}</label>
	</div>
}

export default Checkbox;