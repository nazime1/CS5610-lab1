"use client";

/* eslint-disable  @typescript-eslint/no-explicit-any */

import { useParams } from "next/navigation";
import * as client from "../client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../store";
import { Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

export default function QuizzesDetails() {
	const params = useParams<{ cid: string; qid: string; }>();
	const { quizzes } = useSelector((state: RootState) => state.quizzesReducer);
        const quiz = {
                        _id: params.qid,
                        name: "Quiz",
                        quizType: "Graded",
                        points: 100,
                        assignmentGroup: "Quizzes",
                        shuffleAnswers: "Yes",
                        timeLimit: 20,
                        multipleAttempts: "No",
                        dueDate: "12/13/25",
                        availableAt: "12/06/25",
                        until: "12/13/25",
                };
	return (
		<div id="wd-quiz-details">
		<center>
		<Button href={`${params.qid}/QuizPreview`}>Preview</Button> <Button href={`${params.qid}/QuizEditor`}>Edit</Button>
		<h3>{quiz.name}</h3><br/>
		<b>Quiz Type</b> - {quiz.quizType}<br/>
		<b>Points</b> - {quiz.points}<br/>
		<b>Assignment Group</b> - {quiz.assignmentGroup}<br/>
		<b>Shuffle Answers</b> - {quiz.shuffleAnswers}<br/>
		<b>Time Limit</b> - {quiz.timeLimit} minutes<br/>
		<b>Multiple Attempts</b> - {quiz.multipleAttempts}<br/>
		<b>Due Date</b> - {quiz.dueDate}<br/>
		<b>Available From</b> - {quiz.availableAt}<br/>
		<b>Until</b> - {quiz.until}<br/>
		</center>
		</div>
	)
};
