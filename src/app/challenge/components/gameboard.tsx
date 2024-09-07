"use client";
import { useState, useEffect, useContext } from "react";
import { PositionContext } from "../utils/positionContext";

export default function Gameboard() {
  const position = useContext(PositionContext);
	const gridSize = 10;

	let rows = [];

	for (let i = 1; i <= gridSize; i++) {
		for (let j = 1; j <= gridSize; j++) {
			let key = `${j}${i}`;
			let isSpriteHere = position.x === j && position.y === i;
			rows.push(
				<div
					className={`border-white border-2 h-11 w-11 ${
						isSpriteHere ? "bg-blue-500" : ""
					}`}
					key={key}></div>
			);
		}
	}

	return (
		<div className="flex flex-col items-center">
			<div className="grid grid-cols-10 h-max w-max">{rows}</div>
		</div>
	);
}
