"use client";
import React, { useState, useEffect, useContext } from "react";
import { useDroppable } from "@dnd-kit/core";

export default function Workspace({ children }: any) {
	const { isOver, setNodeRef } = useDroppable({
		id: "workspace",
	});
	const style = {
		background: isOver ? "rgb(20 83 45)" : undefined,
	};

	console.log("blocks: ", children);

	return (
		<div
			className="min-h-96 h-max w-96 border-2 border-b-white"
			ref={setNodeRef}
			style={style}>
			<p className="text-xl">Place your blocks here:</p>
				<div className="flex flex-col items-center">
					{children}
				</div>
		</div>
	);
}
