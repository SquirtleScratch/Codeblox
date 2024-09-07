"use client";
import React, { useState, useEffect, useContext } from "react";
import {
	PositionContext,
	PositionDispatchContext,
} from "../utils/positionContext";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export default function MoveDown({ children }) {
	const dispatch = useContext(PositionDispatchContext);

	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: "move-down",
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
					type: "move-down",
				});
			}}>
			{children}
			<div className="w-52 h-12 flex justify-center items-center bg-green-500 rounded-lg p-2.5 my-2">
				<span>Move down one space</span>
			</div>
		</button>
	);
}
