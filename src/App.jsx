import './App.css'
import { useState } from "react";
import Form from "./components/Form";
import Fields from "./components/Fields";
import fields from "./data/types.json";
import Select from "./components/input/Select";

export default function App() {
	const [fieldsRender, setFieldsRender ] = useState([])
  return (
    <main className="container">
			<div className="item">
				<Fields setFieldsRender={setFieldsRender} fieldsRender={fieldsRender} />
			</div>
			<div className="item">
				<Form fields={fieldsRender} />
			</div>
    </main>
  )
}
