import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export default function Draggable(props) {
	const { attributes, listeners, setNodeRef } = useDraggable({
		id: props.id,
	});

	return (
		<div ref={setNodeRef} {...listeners} {...attributes}>
			{props.children}
		</div>
	);
}
