"use client";
import React, { useState, useEffect, useContext } from "react";
import { PositionDispatchContext } from "../utils/positionContext";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export default function Wait({ children }: any) {
	const [time, setTime] = useState(1);
	const dispatch = useContext(PositionDispatchContext);

	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: "wait",
	});
	const style = {
		transform: CSS.Translate.toString(transform),
	};

	return (
		<button
			ref={setNodeRef}
			style={style}
			{...listeners}
			{...attributes}
			onClick={() => {
				dispatch({
					type: "wait",
				});
			}}>
			{children}
			<div className="w-52 h-12 flex justify-center items-center bg-sky-500 rounded-lg p-2.5 my-2">
				<span>Wait </span>
				<input
					className="w-16 text-black bg-white rounded mx-2"
					type="number"
					value={time}
					onChange={(e) => setTime(e.target.valueAsNumber)}></input>
				<span> seconds</span>
			</div>
		</button>
	);
}
