import { createRoot } from "react-dom/client";

import { Counter } from "@components";

const rootDiv = document.createElement("div");
document.body.appendChild(rootDiv);
const root = createRoot(rootDiv);
root.render(
	<div className="flex-col-center">
		<h1>This is a simple React site served by Bun.</h1>
		<p>Automatically reloads with persisted state on file save.</p>
		<Counter />
	</div>
);
