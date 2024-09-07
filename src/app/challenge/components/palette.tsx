"use client";
// import Mouseclick from "@/app/challenge/blocks/mouseclick";
// import Repeat from "@/app/challenge/blocks/repeat";
// import Wait from "@/app/challenge/blocks/wait";
import React, { useState, useEffect } from "react";

export default function Palette({ children }: any) {
	console.log('palette children: ', children);

	return (
		<div className="min-h-96 h-max w-96 border-2 border-b-white">
			<p className="text-xl">This is your palette:</p>
			<div className="flex flex-col items-center justify-items-center">
				{children}
			</div>
		</div>
	);
}
