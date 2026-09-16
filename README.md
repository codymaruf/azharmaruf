# Azhar Maruf website

Built with Astro. The design lives in `src/`, while your editable content lives mostly in `src/content/`.

## Run locally

```powershell
cd C:\Users\User\Downloads\azhar-maruf-site\azhar-maruf-site
npm.cmd install
npm.cmd run dev
```

Open the local URL Astro prints, usually `http://localhost:4321/`.

## How to add things

### Add a film
Create a new `.md` file in `src/content/films/`.

Example frontmatter:

```yaml
---
title: My New Film
year: 2026
status: Finished
type: Film
order: 2
youtube: https://youtu.be/VIDEO_ID
description: A short description.
---
A longer description can go here.
```

If you do not provide an `image`, the site uses the YouTube thumbnail automatically.

### Add a Video Journal entry
Create a new `.md` file in `src/content/video-journal/` and give it an explicit `order` number. This controls the order on the website.

```yaml
---
title: My video
type: Video Journal
order: 8
youtube: https://youtu.be/VIDEO_ID
---
Optional description.
```

The gallery automatically pulls the YouTube thumbnail.

### Add editing work
Create a new `.md` file in `src/content/editing/`.

For a YouTube-hosted reel:

```yaml
---
title: Project name
meta: Client name
type: Editing
order: 2
youtube: https://youtube.com/shorts/VIDEO_ID
clientUrl: https://client-website.com/
description: Short description.
---
Longer description if needed.
```

The detail page keeps the reel at 9:16.

### Add photography
Put the image file in `public/images/photography/` and add its entry in the photography page/content when needed.

### Add reading, stories, essays, film logs, logs, and fragments
Each is a Markdown file in its matching `src/content/` folder. The filename becomes the URL slug.

## Add your own photos

Put these in:

`public/images/photography/`

- `sky.jpg`
- `rainbow.jpg`
- `river.jpg`

## GitHub workflow

1. Open the project folder in Visual Studio Code.
2. Edit or create content files under `src/content/`.
3. Add media under `public/images/`.
4. Test with `npm.cmd run dev`.
5. Save your changes.
6. Commit and push to GitHub.

Typical Git commands:

```powershell
git add .
git commit -m "Add new work"
git push
```

Once the GitHub repository is connected to your hosting provider, pushing to GitHub can trigger a new deployment automatically.

Do not edit the page components just to add a new piece of content. The goal is to keep design/code stable and content easy to change.
