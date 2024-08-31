"use client";
import React, { useState, useEffect } from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export default function Repeat(props) {
	const [iterations, setIterations] = useState(0);
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: "repeat",
	});
	const style = { transform: CSS.Translate.toString(transform) };

	return (
		<div
			id="repeat"
			className="w-48 border-2 bg-sky-600"
			ref={setNodeRef}
			style={style}
			{...listeners}
			{...attributes}>
			{props.children}
			<span className="text-white">Repeat </span>
			<input
				type="number"
				value={iterations}
				onChange={(e) => setIterations(e.target.valueAsNumber)}
				className="w-16 text-black bg-white"></input>
			<span className="text-white"> times</span>
		</div>
	);
}
