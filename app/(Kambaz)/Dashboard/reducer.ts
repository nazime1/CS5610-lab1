/* eslint-disable  @typescript-eslint/no-explicit-any */

import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  enrollments: [],
};
const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    setEnrollments: (state, action) => {
	state.enrollments = action.payload;
    },
    addNewEnrollment: (state, { payload: enrollment }) => {
      const newEnrollment: any = {
	_id: uuidv4(),
	user: enrollment.user,
	course: enrollment.course,
      };
  state.enrollments = [...state.enrollments, newEnrollment] as any;
    },
    deleteEnrollment: (state, { payload: enrollmentId }) => {
      state.enrollments = state.enrollments.filter(
	(e: any) => e._id !== enrollmentId);
    },
  },
});
export const { setEnrollments, addNewEnrollment, deleteEnrollment } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
