import { FormLabel, FormControl } from "react-bootstrap";

export default function TrueFalseQuestion() {
	return (
		<div id="wd-true-false-question">
		<FormLabel>Title</FormLabel>
		<FormControl value={"Is 2 + 2 = 4?"}/>
		<FormLabel>Points</FormLabel>
		<FormControl value={4}/>
		<FormLabel>Question</FormLabel>
		<FormControl value={"Is it true that 2 + 2 = 4?"}/>
		<b>Answers:</b><br/>
		<input type="radio" id="answer-one"
		name="answers" value="answer-one"/>
		<label htmlFor="answer-one">True</label>
		<br/>
                <input type="radio" id="answer-two"
                name="answers" value="answer-two"/>
                <label htmlFor="answer-two">False</label>
		</div>
	)
};
