"use client";
import React, { useState, useEffect } from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export default function Wait(props) {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: "wait",
	});
	const style = {
		transform: CSS.Translate.toString(transform),
	};
	
	const [time, setTime] = useState(1);

	return (
		<button
			ref={setNodeRef}
			style={style}
			{...listeners}
			{...attributes}>
			{props.children}
			<div className="w-52 h-12 flex justify-center items-center bg-sky-500 rounded-lg p-2.5">
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
