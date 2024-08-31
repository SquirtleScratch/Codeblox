"use client";
import Gameboard from "./components/gameboard";
import Workspace from "./components/workspace";
import Palette from "./components/palette";
import { useState, useEffect } from "react";
import { DndContext, DragOverlay } from "@dnd-kit/core";
// import Droppable from "./utils/droppable";
// import Draggable from "./utils/draggable";

export default function Page() {
	const [activeId, setActiveId] = useState(null);

	function handleDragStart(e) {
		setActiveId(e.active.id);
	}

	function handleDragEnd() {
		setActiveId(null);
	}

	return (
		<div className="flex flex-wrap space-y-10">
			<DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
				<div id="gameboard" className="w-screen">
					<h1 className="text-4xl">Challenge</h1>
					<Gameboard></Gameboard>
				</div>
				<div id="palette" className="grow">
					<h1 className="text-4xl">Palette</h1>
					<DragOverlay></DragOverlay>
					<Palette>
					</Palette>
				</div>
				<div id="workspace" className="grow">
					<h1 className="text-4xl">Workspace</h1>
					<Workspace></Workspace>
				</div>
			</DndContext>
		</div>
	);
}
