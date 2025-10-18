export async function POST(req: Request) {
	const { eventName, data } = await req.json();

	// Here we'd be sending this data to an analytics service
	console.log("Received event:", eventName, data);

	return new Response(JSON.stringify({ status: "success" }), {
		headers: { "Content-Type": "application/json" },
	});
}
