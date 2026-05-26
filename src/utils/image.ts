export function getOptimizedUrl(url: string, width: number = 800): string {
  if (url.includes('images.unsplash.com')) {
    try {
      const urlObj = new URL(url);
      urlObj.searchParams.set('w', width.toString());
      urlObj.searchParams.set('q', '80');
      urlObj.searchParams.set('fm', 'webp');
      return urlObj.toString();
    } catch {
      return url;
    }
  }
  if (url.includes('i.ibb.co')) {
    return `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=${width}&output=webp&q=80`;
  }
  return url;
}
