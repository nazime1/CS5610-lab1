"use client";

/* eslint-disable  @typescript-eslint/no-explicit-any */

import { useParams, redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../../store";
import { FormLabel, FormControl, Button, Tab, Tabs } from "react-bootstrap";
import { addQuiz, editQuiz, updateQuiz, deleteQuiz, setQuizzes } from "../../reducer";
import * as client from "../../client";
import { FaPlus } from "react-icons/fa6";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import FillInTheBlankQuestion from "./FillInTheBlankQuestion";
import TrueFalseQuestion from "./TrueFalseQuestion";
export default function QuizEditor() {
	const router = useRouter();
	const { cid, qid } = useParams();
	const { quizzes } = useSelector((state: RootState) => state.quizzesReducer);
	const [visible, setVisible] = useState(false);
	const [selected, setSelected] = useState("MultipleChoiceQuestion");
	const dispatch = useDispatch();
	const selectedInput = (e: any) => {
		const input = e.target.value;
		setSelected(input);
	};
	const fetchQuizzes = async () => {
   		const quizzes = await client.fetchQuizzesForCourse(cid as string); 
   		dispatch(setQuizzes(quizzes));
	};
	const onUpdateQuiz = async (cid: string, qid: string, quiz: any) => {
		await client.updateQuiz(cid, qid, quiz);
		const newQuiz = quizzes.map((q: any) => q._id === quiz._id ? quiz : q);
		dispatch(setQuizzes(newQuiz));
  	};
        const quiz = {
                        _id: qid,
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
	const components = {
		MultipleChoiceQuestion: MultipleChoiceQuestion,
		FillInTheBlankQuestion: FillInTheBlankQuestion,
		TrueFalseQuestion: TrueFalseQuestion
	};
	const SelectedComponent = (components as any)[selected];
        useEffect(() => {
           fetchQuizzes();
        }, []);
	return (
		<div id="wd-quiz-editor">
		<Tabs
		defaultActiveKey="details"
		id="wd-quiz-tabs"
		className="mb-3">
		<Tab eventKey="details"
		title="Details">
		<FormLabel>Title</FormLabel>
		<FormControl value={quiz.name} 
		className="mb-2"
		onChange={(e) => dispatch(updateQuiz( {...quiz as any, name: e.target.value}))}/>
		<FormLabel>Description</FormLabel>
		<FormControl value="Quiz Description" className="mb-2"/>
		<FormLabel>Quiz Type</FormLabel>
		<FormControl value={quiz.quizType} 
		className="mb-2"
		onChange={(e) => dispatch(updateQuiz( {...quiz as any, quizType: e.target.value}))}/>
		<FormLabel>Points</FormLabel>
		<FormControl value={quiz.points} 
		className="mb-2"
		onChange={(e) => dispatch(updateQuiz( {...quiz as any, points: e.target.value}))}/>
		<FormLabel>Assignment Group</FormLabel>
		<FormControl value={quiz.assignmentGroup} 
		className="mb-2"
		onChange={(e) => dispatch(updateQuiz( {...quiz as any, assignmentGroup: e.target.value}))}/>
		<FormLabel>Shuffle Answers</FormLabel>
		<FormControl value={quiz.shuffleAnswers} 
		className="mb-2"
		onChange={(e) => dispatch(updateQuiz( {...quiz as any, shuffleAnswers: e.target.value}))}/>
		<FormLabel>Time Limit (in minutes)</FormLabel>
		<FormControl value={quiz.timeLimit} 
		className="mb-2"
		onChange={(e) => dispatch(updateQuiz( {...quiz as any, timeLimit: e.target.value}))}/>
		<FormLabel>Multiple Attempts</FormLabel>
		<FormControl value={quiz.multipleAttempts} 
		className="mb-2"
		onChange={(e) => dispatch(updateQuiz( {...quiz as any, multipleAttempts: e.target.value}))}/>
		<FormLabel>Due Date</FormLabel>
		<FormControl value={quiz.dueDate} 
		className="mb-2"
		onChange={(e) => dispatch(updateQuiz( {...quiz as any, dueDate: e.target.value}))}/>
		<FormLabel>Available At</FormLabel>
		<FormControl value={quiz.availableAt} 
		className="mb-2"
		onChange={(e) => dispatch(updateQuiz( {...quiz as any, availableAt: e.target.value}))}/>
		<FormLabel>Until</FormLabel>
		<FormControl value={quiz.until} 
		className="mb-2"
		onChange={(e) => dispatch(updateQuiz( {...quiz as any, until: e.target.value}))}/>
		<Button onClick={(e) => {
                onUpdateQuiz(cid as string, qid as string, quiz);
                router.back();
                }}>Save</Button> 
                <Button onClick={(e) => {
                onUpdateQuiz(cid as string, qid as string, quiz);
                }}
                href={`/Courses/${cid}/Quizzes`}>Save and Publish</Button> 
                <Button variant="danger" href={`/Courses/${cid}/Quizzes`}>Cancel</Button>
		</Tab>
		<Tab eventKey="questions"
		title="Questions">
		<Button onClick={() => setVisible(!visible)}
		variant="secondary">
		<FaPlus className="text-white me-2"/>Add Question</Button>
		<select id="wd-quiz-question-type" onChange={selectedInput}>
		<option value="MultipleChoiceQuestion">Multiple Choice</option>
		<option value="TrueFalseQuestion">True/False</option>
		<option value="FillInTheBlankQuestion">Fill in the Blank</option>
		</select>
		<br/>
		{visible ? 
			<SelectedComponent/>
			: <div id="nothing"></div>}
		<Button onClick={(e) => {
		onUpdateQuiz(cid as string, qid as string, quiz);
		router.back();
		}}>Save</Button> 
		<Button variant="danger" href={`/Courses/${cid}/Quizzes`}>Cancel</Button>
		</Tab>
		</Tabs>
		</div>
	)};
