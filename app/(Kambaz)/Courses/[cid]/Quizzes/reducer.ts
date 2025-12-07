/* eslint-disable  @typescript-eslint/no-explicit-any */

import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  quizzes: [],
};
const quizzesSlice = createSlice({
	name: "quizzes",
	initialState,
	reducers: {
		setQuizzes: (state, action) => {
			state.quizzes = action.payload;
		},
		addQuiz: (state, { payload: quiz } ) => {
		const newQuiz: any = {
			_id: uuidv4(),
			name: quiz.name,
			course: quiz.course,
			quizType: quiz.quizType,
			points: quiz.points,
			assignmentGroup: quiz.assignmentGroup,
			shuffleAnswers: quiz.shuffleAnswers,
			timeLimit: quiz.timeLimit,
			multipleAttempts: quiz.multipleAttempts,
			dueDate: quiz.dueDate,
			availableAt: quiz.availableAt,
			until: quiz.until,
			};
		state.quizzes = [...state.quizzes, newQuiz] as any;
		},
		deleteQuiz: (state, { payload: quizId } ) => {
			state.quizzes = state.quizzes.filter(
				(q: any) => q._id !== quizId);
		},
		updateQuiz: (state, { payload: quiz } ) => {
			state.quizzes = state.quizzes.map((q: any) =>
				q._id === quiz._id ? quiz : q
			) as any;
		},
		editQuiz: (state, { payload: quizId } ) => {
			state.quizzes = state.quizzes.map((q: any) =>
				q._id === quizId ? { ...q, editing: true } : q
			) as any;
		},
	},
});
export const { setQuizzes, addQuiz, deleteQuiz, updateQuiz, editQuiz } =
	quizzesSlice.actions;
export default quizzesSlice.reducer;
