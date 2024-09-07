"use client";
import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { PositionContext } from "../utils/positionContext";

export default function Gameboard() {
	const position: any = useContext(PositionContext);
	const gridSize = 10;

	let rows = [];

	for (let i = 1; i <= gridSize; i++) {
		for (let j = 1; j <= gridSize; j++) {
			let key = `${j}${i}`;
			let isSpriteHere = position.x === j && position.y === i;
			rows.push(
				<div className={"border-yellow-500 border h-16 w-16"} key={key}>
					{isSpriteHere ? (
						<Image src="/mazeimages/Villager_sprite.webp" height={64} width={64} alt="" />
					) : (
						<Image
							src="/mazeimages/FieldsTile_58.png"
							width={64}
							height={64}
							alt=""
						/>
					)}
				</div>
			);
		}
	}

	return (
		<div className="flex flex-col items-center">
			<div className="grid grid-cols-10 h-max w-max">{rows}</div>
		</div>
	);
}
