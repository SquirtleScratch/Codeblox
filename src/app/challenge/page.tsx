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
import { useState, useEffect, useContext, useReducer } from "react";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import Draggable from "./utils/draggable";
import {
	PositionContext,
	PositionDispatchContext,
	PositionProvider,
} from "./utils/positionContext";

export default function Page() {
	const [activeId, setActiveId] = useState<string | null>(null);
	const [blocks, setBlocks] = useState<string[]>([]);

	function handleDragStart(e: any) {
		setActiveId(e.active.id);
	}

	function handleDragEnd(e: any) {
		if (e.over && e.over.id === "workspace") {
			setBlocks((prevBlocks) => [...prevBlocks, e.active.id]);
		}
		setActiveId(null);
	}

	return (
		<PositionProvider>
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
							<Workspace></Workspace>
						</div>
					</div>
				</DndContext>
		</PositionProvider>
	);
}
