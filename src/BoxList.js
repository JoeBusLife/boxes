import { useState } from "react";
import Box from "./Box"
import NewBoxForm from "./NewBoxForm"

function BoxList() {
  const [boxes, setBoxes] = useState([])

	const addBox = (newBox) => {
		setBoxes(boxes => [...boxes, {...newBox}])
	}

	const removeBox = (idx) => {
		boxes.splice(idx, 1);
		setBoxes([...boxes])
	}

  return (
    <div>
			<NewBoxForm addBox={addBox}/>
			<div>
				{boxes.map(({ backgroundColor, width, height }, idx) => <Box
				removeBox={removeBox}
				key={idx}
				idx={idx}
				backgroundColor={backgroundColor}
				width={width}
				height={height}/>)}
			</div>
		</div>
  );
}

export default BoxList;