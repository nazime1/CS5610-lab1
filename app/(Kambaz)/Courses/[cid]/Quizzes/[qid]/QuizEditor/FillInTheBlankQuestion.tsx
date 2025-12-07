import { FormLabel, FormControl } from "react-bootstrap";

export default function FillInTheBlankQuestion() {
	return (
		<div id="wd-fill-in-the-blank">
		<FormLabel>Title</FormLabel>
		<FormControl value={"Easy fill in the blank"}/>
		<FormLabel>Points</FormLabel>
		<FormControl value={4}/>
		<FormLabel>Question:</FormLabel>
		<FormControl value={"How much is 2 + 2?"}/>
		<b>Answers:</b><br/>
		<FormLabel>Possible answer:</FormLabel>
		<FormControl value={2}/>
		</div>
	)
};
