export type Entry = {
  frontmatter: Record<string, any>;
  Content: any;
  file: string;
};

export const films = Object.entries(import.meta.glob('../content/films/*.md', { eager: true }))
  .filter(([file]) => !file.endsWith('README.md'))
  .map(([file, mod]: any) => ({ ...mod, file })) as Entry[];
export const editing = Object.entries(import.meta.glob('../content/editing/*.md', { eager: true }))
  .filter(([file]) => !file.endsWith('README.md'))
  .map(([file, mod]: any) => ({ ...mod, file })) as Entry[];
export const stories = Object.entries(import.meta.glob('../content/stories/*.md', { eager: true }))
  .filter(([file]) => !file.endsWith('README.md'))
  .map(([file, mod]: any) => ({ ...mod, file })) as Entry[];
export const filmLogs = Object.entries(import.meta.glob('../content/film-log/*.md', { eager: true }))
  .filter(([file]) => !file.endsWith('README.md'))
  .map(([file, mod]: any) => ({ ...mod, file })) as Entry[];
export const essays = Object.entries(import.meta.glob('../content/essays/*.md', { eager: true }))
  .filter(([file]) => !file.endsWith('README.md'))
  .map(([file, mod]: any) => ({ ...mod, file })) as Entry[];
export const reading = Object.entries(import.meta.glob('../content/reading/*.md', { eager: true }))
  .filter(([file]) => !file.endsWith('README.md'))
  .map(([file, mod]: any) => ({ ...mod, file })) as Entry[];
export const videos = Object.entries(import.meta.glob('../content/video-journal/*.md', { eager: true }))
  .filter(([file]) => !file.endsWith('README.md'))
  .map(([file, mod]: any) => ({ ...mod, file })) as Entry[];
export const logs = Object.entries(import.meta.glob('../content/logs/*.md', { eager: true }))
  .filter(([file]) => !file.endsWith('README.md'))
  .map(([file, mod]: any) => ({ ...mod, file })) as Entry[];
export const fragments = Object.entries(import.meta.glob('../content/fragments/*.md', { eager: true }))
  .filter(([file]) => !file.endsWith('README.md'))
  .map(([file, mod]: any) => ({ ...mod, file })) as Entry[];
export const photography = Object.entries(import.meta.glob('../content/photography/*.md', { eager: true }))
  .filter(([file]) => !file.endsWith('README.md'))
  .map(([file, mod]: any) => ({ ...mod, file })) as Entry[];

export function slugFromFile(file: string) {
  return file.split('/').pop()?.replace(/\.md$/, '') ?? '';
}

export function ordered(entries: Entry[]) {
  return [...entries].sort((a, b) => Number(a.frontmatter.order ?? 999) - Number(b.frontmatter.order ?? 999));
}

export function youtubeThumbnail(url = '') {
  const id = youtubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : '';
}

export function youtubeId(url = '') {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([^?&/]+)/);
  return match?.[1] ?? '';
}
