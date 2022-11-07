import Checkbox from "./input/Checkbox";
import Select from "./input/Select";
import Input from "./input/Index";
import Radio from "./input/Radio";

const returnField = (type, props) => {
	switch(type) {
			case "text":			return <Input {...props}/>;
			case "select":		return <Select {...props}/>;
			case "checkbox":	return <Checkbox {...props}/>;
			case "radio":			return <Radio {...props}/>;
			default: <span className="alert error">Componente no encontrado.</span>
	}
}

const Form = (props) => {
	const { fields } = props;
	const fieldsRender = fields.map((field) => returnField(field.component, field));

	return fieldsRender;
}

export default Form;