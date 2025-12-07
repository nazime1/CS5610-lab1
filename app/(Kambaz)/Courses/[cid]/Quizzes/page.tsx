"use client";

/* eslint-disable  @typescript-eslint/no-explicit-any */

import Link from "next/link";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { BsGripVertical } from "react-icons/bs";
import * as client from "./client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { useParams, redirect } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import { addQuiz, editQuiz, updateQuiz, deleteQuiz, setQuizzes } from "./reducer";

export default function Quizzes() {
	const { quizzes } = useSelector((state: RootState) => state.quizzesReducer);
	const dispatch = useDispatch();
	const { cid } = useParams();
	const fetchQuizzes = async () => {
   		const quizzes = await client.fetchQuizzesForCourse(cid as string); 
   		dispatch(setQuizzes(quizzes));
	};
	useEffect(() => {
    	   fetchQuizzes();
  	}, []);
	const quizId = uuidv4();
	const now = Date.now();
	return (
		<div id="wd-quizzes">
		<Button variant="success" href={`Quizzes/${quizId}`} className="float-right"><FaPlus className="text-white me-2"/> Add Quiz </Button> 		
                <ListGroup className="rounded-0" id="wd-quizzes">
                {quizzes.map((quiz: any) => (
                        <ListGroupItem key={quiz._id} className="wd-quiz p-0 mb-5 fs-5 border-gray">
                        <h3>{quiz.name}</h3>
                        Due: {quiz.dueDate} | Points: {quiz.points}
                </ListGroupItem>
		))}
                </ListGroup>
		</div>
	)};
