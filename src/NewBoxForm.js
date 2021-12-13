import { useState } from "react";

function NewBoxForm({addBox}) {
	const INITIAL_STATE = {
		backgroundColor: "",
		width: "",
		height: ""
	}
	const [newBox, setNewBox] = useState(INITIAL_STATE)

	const handleSubmit = (e) => {
		e.preventDefault();
		addBox({...newBox})
		setNewBox(INITIAL_STATE)
	}

	const handleChange = (e) => {
		const { name, value } = e.target;
		setNewBox(data => ({
			...data,
			[name]: value
		}))
	}

  return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="backgroundColor">Box Background Color</label>
			<input
				id="backgroundColor"
				type="text"
				name="backgroundColor"
				placeholder={"Background Color"}
				value={newBox.backgroundColor}
				onChange={handleChange} />

			<label htmlFor="width">Box width</label>
			<input
				id="width"
				type="number"
				name="width"
				placeholder={"width"}
				value={newBox.width}
				onChange={handleChange} />

			<label htmlFor="height">Box height</label>
			<input
				id="height"
				type="number"
				name="height"
				placeholder={"height"}
				value={newBox.height}
				onChange={handleChange} />
			<button type="submit">Add Box</button>
		</form>
  );
}

export default NewBoxForm;