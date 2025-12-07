import { Alert } from "react-bootstrap";

export default function QuizPreview() {
	return (
		<div id="wd-quiz-preview">
		<Alert variant="warning">
		This is a preview of the published version of the quiz.
		</Alert>
		<h3>Quiz</h3>
		<div id="wd-quiz-question">
		<h4>Question 1</h4>
		<hr/>
		How much is 2 + 2?
		<hr/>
		<input type="radio" id="answer-one"
		name="answers" value="answer-one"/>
		<label htmlFor="answer-one">2</label>
		<br/>
		<input type="radio" id="answer-two"
		name="answers" value="answer-two"/>
		<label htmlFor="answer-two">5</label>
		<br/>
		<input type="radio" id="answer-three"
		name="answers" value="answer-three"/>
		<label htmlFor="answer-three">4</label>
		<br/>
		<input type="radio" id="answer-four"
		name="answers" value="answer-four"/>
		<label htmlFor="answer-four">7</label>
		</div>
		</div>
	)
};
