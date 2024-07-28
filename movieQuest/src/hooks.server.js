export async function handle({ event, resolve }) {
    const response = await resolve(event);
    if (response.status === 404) {
        return Response.redirect(new URL('/', event.url).toString(), 302);
    }
    return response;
}