export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Check if the request is for an mp3 file
    if (url.pathname.endsWith(".mp3")) {
      // Replace with the actual URL where mp3 files are hosted
      const mp3Url = "https://vidhi-s24.github.io/CoreRhythm" + url.pathname;

      const response = await fetch(mp3Url);
      if (!response.ok) {
        return new Response("MP3 not found", { status: 404 });
      }

      const headers = new Headers(response.headers);
      headers.set("Content-Type", "audio/mpeg");

      return new Response(response.body, {
        status: response.status,
        headers: headers,
      });
    }

    // Return 404 for other paths
    return new Response("Not found", { status: 404 });
  },
};
