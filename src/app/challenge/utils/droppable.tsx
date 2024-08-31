import React from "react";
import { useDroppable } from "@dnd-kit/core";

export default function Droppable(props) {
	const { isOver, setNodeRef } = useDroppable({
		id: "workspace",
	});
	const style = {
		color: isOver ? "gray" : undefined,
	};

	return (
		<div ref={setNodeRef} style={style}>
			{props.children}
		</div>
	);
}
