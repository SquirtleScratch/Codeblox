"use client";
import React, { useState, useEffect } from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export default function Repeat(props) {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: "repeat",
	});
	const style = {
		transform: CSS.Translate.toString(transform),
	};
	
	const [iterations, setIterations] = useState(0);

	return (
		<button
			ref={setNodeRef}
			style={style}
			{...listeners}
			{...attributes}>
			{props.children}
			<div className="w-52 h-12 flex justify-center items-center bg-fuchsia-500 rounded-lg p-2.5">
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
