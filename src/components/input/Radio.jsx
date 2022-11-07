const Radio = (props) => {
	const { label, id, options, radioProps } = props;
	return <div className="form-radio">
		<label>{label}</label>
		<div>
		{options.map((option, idex) => (<div key={`${id}-${idex}`}>
			<input name={id} id={`${id}-${idex}`} type="radio" value={option.value} {...radioProps}/>
			<label htmlFor={`${id}-${idex}`}>{option.displayValue}</label>
		</div>))}
			</div>
	</div>
}

export default Radio;