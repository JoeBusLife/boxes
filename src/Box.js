
function Box({ backgroundColor, width, height, removeBox, idx }) {

  return (
		<div>
			<div style={{backgroundColor, width: `${width}px`, height: `${height}px`}}>
			</div>
			<button onClick={() => removeBox(idx)}>X</button>
		</div>
  );
}

export default Box;