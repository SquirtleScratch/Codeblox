"use client";
import React, { useState, useEffect, ReactNode } from "react";
import { useDroppable } from "@dnd-kit/core";
import MoveUp from "../blocks/moveUp";
import MoveDown from "../blocks/moveDown";
import MoveLeft from "../blocks/moveLeft";
import MoveRight from "../blocks/moveRight";
import Repeat from "../blocks/repeat";
import Wait from "../blocks/wait";
import Mouseclick from "../blocks/mouseclick";

interface WorkspaceProps {
  blocks: string[];
  children?: ReactNode;
}

export default function Workspace({ blocks, children }: WorkspaceProps) {
	const { isOver, setNodeRef } = useDroppable({
		id: "workspace",
	});
	const style = {
		background: isOver ? "rgb(20 83 45)" : undefined,
	};

	console.log('blocks: ', blocks);

	return (
		<div
			className="min-h-96 h-max w-96 border-2 border-b-white"
			ref={setNodeRef}
			style={style}>
			<p className="text-xl">Place your blocks here:</p>
			<div className="flex flex-col items-center">
				{blocks.map((el: string, index: number) => {
					switch (el) {
						case 'move-up':
							return <MoveUp id={el + index} key={index} />;
						case 'move-down':
							return <MoveDown id={el + index} key={index} />;
						case 'move-left':
							return <MoveLeft id={el + index} key={index} />;
						case 'move-right':
							return <MoveRight id={el + index} key={index} />;
						case 'repeat':
							return <Repeat id={el + index} key={index} />;
						case 'wait':
							return <Wait id={el + index} key={index} />;
						case 'mouseclick':
							return <Mouseclick id={el + index} key={index} />;
						default:
							return null;
					}
				})}
        {children}
			</div>
		</div>
	);
}
