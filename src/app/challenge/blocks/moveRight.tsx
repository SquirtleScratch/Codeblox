"use client";
import React, { useState, useEffect, useContext } from "react";
import { PositionDispatchContext } from "../utils/positionContext";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export default function MoveRight({ children }: any) {
	const dispatch = useContext(PositionDispatchContext);

	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: "move-right",
	});
	const style = {
		transform: CSS.Translate.toString(transform),
	};

	return (
		<button ref={setNodeRef} style={style} {...listeners} {...attributes}>
			{children}
			<div className="w-52 h-12 flex justify-center items-center bg-green-500 rounded-lg p-2.5 my-2">
				<span>Move right one space</span>
			</div>
		</button>
	);
}
