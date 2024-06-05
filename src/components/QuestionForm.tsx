import React, { FormEvent, useState } from "react"


function QuestionForm() {
	const [inputValue, setInputValue] = useState('Posez votre question ici')
	const isInputError = inputValue.includes('f')

	return (
		<div>
			<textarea value={inputValue} onChange={(e) => {if (!e.target.value.includes('f')) { setInputValue(e.target.value) }}} />
			<button onClick={() => alert(inputValue)}>Alertez moi</button>
		</div>
	)
}

export default QuestionForm