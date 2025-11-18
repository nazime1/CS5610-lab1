"use client"

import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import store from "./store";
import { Provider } from "react-redux";
import ReduxExamples from "./ReduxExamples";
import TodoList from "./ReduxExamples/todos/TodoList";

const Lab4 = () => {
	function SayHello() {
		alert("Hello");
	}
	return (
		<Provider store={store}>
		<div>
		<h3>Lab 4</h3>
		<ClickEvent/>
		<PassingDataOnEvent/>
		<PassingFunctions theFunction={SayHello} />
		<EventObject/>
		<Counter/>
		<BooleanStateVariables/>
		<StringStateVariables/>
		<DateStateVariable/>
		<ObjectStateVariable/>
		<ArrayStateVariable/>
		<ParentStateComponent/>
		<ReduxExamples/>
		<TodoList/>
		</div>
		</Provider>
	);}
export default Lab4;
