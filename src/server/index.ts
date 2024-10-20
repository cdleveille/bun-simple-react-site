import { watch } from "fs";
import path from "path";

const CLIENT_DIR = path.resolve("./src/client");
const PUBLIC_DIR = path.resolve("./public");

const port = parseInt(process.env.PORT || "5000");

const buildClient = () => Bun.build({ entrypoints: [`${CLIENT_DIR}/index.tsx`], outdir: PUBLIC_DIR });

const watcher = watch(CLIENT_DIR, { recursive: true }, async () => await buildClient());

process.on("SIGINT", watcher.close);

await buildClient();

Bun.serve({
	port,
	fetch(req: Request) {
		const host = req.headers.get("host");
		const path = req.url.replace(`${host}/`, "").split("://")[1];
		return new Response(Bun.file(`${PUBLIC_DIR}/${path || "index.html"}`));
	}
});

console.log(`Server listening on port ${port}...`);
