"use client";
import React, { useState, useEffect, useContext } from "react";
import { PositionDispatchContext } from "../utils/positionContext";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export default function Repeat({ children }: any) {
	const [iterations, setIterations] = useState(0);
	const dispatch = useContext(PositionDispatchContext);

	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: "repeat",
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
					type: "repeat",
				});
			}}>
			{children}
			<div className="w-52 h-12 flex justify-center items-center bg-fuchsia-500 rounded-lg p-2.5 my-2">
				<span>Repeat </span>
				<input
					className="w-16 text-black bg-white rounded mx-2"
					type="number"
					value={iterations}
					onChange={(e) => setIterations(e.target.valueAsNumber)}></input>
				<span> times</span>
			</div>
		</button>
	);
}
