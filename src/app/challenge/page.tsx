"use client";
import Gameboard from "./components/gameboard";
import Workspace from "./components/workspace";
import Palette from "./components/palette";
import MoveUp from "./blocks/moveUp";
import MoveDown from "./blocks/moveDown";
import MoveLeft from "./blocks/moveLeft";
import MoveRight from "./blocks/moveRight";
import Repeat from "./blocks/repeat";
import Wait from "./blocks/wait";
import Mouseclick from "./blocks/mouseclick";
import { useState, useEffect } from "react";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import Draggable from "./utils/draggable";

export default function Page() {
	const [activeId, setActiveId] = useState(null);
	const [blocks, setBlocks] = useState([]);

	function handleDragStart(e) {
		setActiveId(e.active.id);
	}

	function handleDragEnd(e) {
		if (e.over && e.over.id === "workspace") {
			setBlocks((prevBlocks) => [...prevBlocks, e.active.id]);
		}
		setActiveId(null);
	}

	function renderDropped(activeId) {
		switch (activeId) {
			case "move-up":
				// return activeId === "move-up" && <MoveUp />;
				return <MoveUp />;
			case "move-down":
				// return activeId === "move-down" && <MoveDown />;
				return <MoveDown />;
			case "move-left":
				// return activeId === "move-left" && <MoveLeft />;
				return <MoveLeft />;
			case "move-right":
				// return activeId === "move-right" && <MoveRight />;
				return <MoveRight />;
			case "repeat":
				// return activeId === "repeat" && <Repeat />;
				return <Repeat />;
			case "wait":
				// return activeId === "wait" && <Wait />;
				return <Wait />;
			case "mouseclick":
				// return activeId === "mouseclick" && <Mouseclick />;
				return <Mouseclick />;
			default:
				return null;
		}
	}

	return (
		<DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
			<div className="flex flex-wrap space-x-10">
				<div id="gameboard" className="w-screen">
					<h1 className="text-4xl">Challenge</h1>
					<Gameboard></Gameboard>
				</div>
				<div id="palette">
					<h1 className="text-4xl">Palette</h1>
					<Palette>
						<MoveUp />
						<MoveDown />
						<MoveLeft />
						<MoveRight />
						<Repeat />
						<Wait />
						<Mouseclick />
					</Palette>
				</div>
				<div id="workspace">
					<h1 className="text-4xl">Workspace</h1>
					<Workspace blocks={blocks}>
						{blocks.map((activeId, index) => {
							<div key={index}>{renderDropped(activeId)}</div>;
							console.log('active id: ', activeId);
						})}
					</Workspace>
				</div>
			</div>
			{/* <DragOverlay>{renderDropped(activeId)}</DragOverlay> */}
		</DndContext>
	);
}
