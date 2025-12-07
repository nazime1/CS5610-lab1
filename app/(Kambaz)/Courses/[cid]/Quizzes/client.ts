/* eslint-disable  @typescript-eslint/no-explicit-any */

import axios from "axios";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER; 
const QUIZZES_API = `${HTTP_SERVER}/api/quizzes`;

export const fetchAllQuizzes = async () => {
	const { data } = await axios.get(QUIZZES_API);
	return data;
};

export const fetchQuizzesForCourse = async (courseId: string) => {
	const { data } = await axios.get(`${HTTP_SERVER}/api/courses/${courseId}/quizzes`);
	return data;
};

export const updateQuiz = async (courseId: string, quizId: string, quiz: any) => {
	const { data } = await axios.put(`${HTTP_SERVER}/api/courses/${courseId}/quizzes`);
	return data;
};
