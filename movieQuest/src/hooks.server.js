/**
 * hooks.server.js
 *
 * This file defines a global request handler in SvelteKit to modify server responses.
 */

/**
 * handle function
 *
 * Intercepts all incoming requests to:
 * - Return a 302 redirect to the root URL ("/") if the response status is 404.
 * - Otherwise, returns the default response.
 *
 * @param {Object} params - Contains the event and resolve function.
 * @param {Object} params.event - The incoming request event.
 * @param {Function} params.resolve - Resolves to the default response.
 * @returns {Promise<Response>} - The modified or default response.
 */

export async function handle({ event, resolve }) {
	const response = await resolve(event);
	if (response.status === 404) {
		return Response.redirect(new URL('/', event.url).toString(), 302);
	}
	return response;
}
