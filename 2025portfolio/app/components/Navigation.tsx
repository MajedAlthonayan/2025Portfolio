"use client";

import { useState } from "react";

export default function Navigation() {
	return (
		<nav className="fixed top-0 w-full z-50 nav">
			<div className="container">
				<div className="flex justify-between items-center py-4">
					<a
						href="/"
						className="brand-font text-2xl font-medium text-accent tracking-wider"
					>
						M.A.
					</a>
				</div>
			</div>
		</nav>
	);
}
