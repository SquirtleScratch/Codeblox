"use client";
import { useState, useEffect } from "react";

export default function Gameboard() {
	const [spritePosition, setSpritePosition] = useState({ x: 1, y: 1 });
	const gridSize = 10;

	// function moveSprite(direction) {
	// 	setSpritePosition((prevPosition) => {
	// 		let { x, y } = prevPosition;
	// 		switch (direction) {
	// 			case "up":
	// 				y = Math.max(1, y - 1);
	// 				break;
	// 			case "down":
	// 				y = Math.min(gridSize, y + 1);
	// 				break;
	// 			case "left":
	// 				x = Math.max(1, x - 1);
	// 				break;
	// 			case "right":
	// 				x = Math.min(gridSize, x + 1);
	// 				break;
	// 			default:
	// 				break;
	// 		}
	// 		return { x, y };
	// 	});
	// }

	let rows = [];

	for (let i = 1; i <= gridSize; i++) {
		for (let j = 1; j <= gridSize; j++) {
			let key = `${j}${i}`;
			let isSpriteHere = spritePosition.x === j && spritePosition.y === i;
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
