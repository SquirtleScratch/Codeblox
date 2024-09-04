"use client";
import React, { useState, useEffect } from "react";
import { useDroppable } from "@dnd-kit/core";

export default function Workspace(props) {
	const { isOver, setNodeRef } = useDroppable({
		id: "workspace",
	});
	const style = {
		background: isOver ? 'rgb(20 83 45)' : undefined,
	};

	return (
		<div
			className="h-screen border-2 border-b-white"
			ref={setNodeRef}
			style={style}>
			<p className="text-xl">Place your blocks here:</p>
		</div>
	);
}
