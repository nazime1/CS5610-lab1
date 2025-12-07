import { FormControl, FormLabel } from "react-bootstrap";

export default function MultipleChoiceQuestion() {
	return (
		<div id="wd-multiple-choice-question">
			<FormLabel>Title</FormLabel>
			<FormControl value={"Question 1"}/>
			<FormLabel>Points</FormLabel>
			<FormControl value={4}/>
			<FormLabel>Question</FormLabel>
			<FormControl value={"What is 2 + 2?"}/>
			<b>Answers:</b><br/>
			<input type="radio" id="answer-one"
			name="answers" value="answer-one"/>
			<FormControl value={4}/>
			<input type="radio" id="answer-two"
			name="answers" value="answer-two"/>
			<FormControl value={2}/>
			<input type="radio" id="answer-three"
			name="answers" value="answer-three"/>
			<FormControl value={5}/>
			<input type="radio" id="answer-four"
			name="answers" value="answer-four"/>
			<FormControl value={7}/>
			</div>
	)
};
