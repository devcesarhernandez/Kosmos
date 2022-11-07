import fields from "../data/types.json";

const Fields = (props) => {
	const { fieldsRender, setFieldsRender } = props;
	const handleFields = (field) => {
		console.log(field)
		const find = fieldsRender.find( f => f.id === field.id );
		if ( !find ) {
			setFieldsRender([...fieldsRender, field])
		} else {
			setFieldsRender( fieldsRender.filter((f) => f.id !== field.id) );
		}
	}
	return <>
		<h2 className="title-section">Campos a agregar/eliminar</h2>
		{fields.fields.map( (field, idex) => {
			return (
				<li className="card" key={field.id}>
					<p className="text-primary">Component: <span className="text-secondary">{field.component}</span></p>
					<p className="text-primary">Label: <span className="text-secondary">{field.label}</span></p>
					<button className="btn-primary" onClick={() => handleFields(field)} type="button">
						{fieldsRender.find( f => f.id === field.id ) ? "Quitar" : "Agregar"}
					</button>
				</li>
			)
		})}
	</>
}

export default Fields;