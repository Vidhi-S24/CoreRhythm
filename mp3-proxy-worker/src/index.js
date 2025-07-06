export default {
  async fetch(request) {
    const url = new URL(request.url);

    // If the request is for an mp3 file
    if (url.pathname.endsWith(".mp3")) {
      const mp3Url = "https://vidhi-s24.github.io" + url.pathname;

      const response = await fetch(mp3Url);
      const headers = new Headers(response.headers);
      headers.set("Content-Type", "audio/mpeg");

      return new Response(response.body, {
        status: response.status,
        headers: headers,
      });
    }

    // Otherwise, return 404
    return new Response("Not found", { status: 404 });
  },
};
