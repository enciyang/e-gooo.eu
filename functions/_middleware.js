const CANONICAL_HOST = "www.e-gooo.eu";
const REDIRECT_HOSTS = new Set(["e-gooo.eu", "e-gooo-eu.pages.dev"]);

export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (REDIRECT_HOSTS.has(url.hostname)) {
    url.hostname = CANONICAL_HOST;
    url.protocol = "https:";
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
