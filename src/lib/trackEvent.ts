// I'd prefer to define a type over using any here, but for brevity:
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function trackEvent(eventName: string, data: Record<string, any>) {
	return fetch("/api/track", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ eventName, data }),
	});
}
