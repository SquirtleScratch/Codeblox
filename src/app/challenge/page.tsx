"use client";
import Gameboard from "./components/gameboard";
import Workspace from "./components/workspace";
import Palette from "./components/palette";
import Repeat from "./blocks/repeat";
import Wait from "./blocks/wait";
// import Mouseclick from "./blocks/mouseclick";
import { useState, useEffect } from "react";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import Draggable from "./utils/draggable";

export default function Page() {
	const [droppedItem, setDroppedItem] = useState(null);

	function handleDragEnd(e) {
		if (e.over && e.over.id === 'workspace') {
			const { id } = e.active;
			setDroppedItem(id);
		}
	};

	return (
		<DndContext onDragEnd={handleDragEnd}>
			<div className="flex flex-wrap space-x-10">
				<div id="gameboard" className="w-screen">
					<h1 className="text-4xl">Challenge</h1>
					<Gameboard></Gameboard>
				</div>
				<div id="palette" className="grow">
					<h1 className="text-4xl">Palette</h1>
					<Palette>
						<Repeat />
						<Wait />
					</Palette>
				</div>
				<div id="workspace" className="grow">
					<h1 className="text-4xl">Workspace</h1>
					<Workspace>
						{droppedItem === 'repeat' && <Repeat />}
						{droppedItem === 'wait' && <Wait />}
					</Workspace>
				</div>
			</div>
		</DndContext>
	);
}
