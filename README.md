# Odrija Klēbaha — Portfolio Website

## Folder Structure

```
odrija-portfolio/
├── index.html          ← main page
├── css/
│   └── style.css       ← all styles
├── js/
│   └── main.js         ← interactions
└── images/
    ├── hero-image.gif  ← hero animated GIF (add this!)
    └── ...             ← all your artwork images
```

---

## How to add your images

### Hero GIF
Place your animated GIF in `images/` named `hero-image.gif`.
The HTML already points to `src="images/hero-image.gif"`.

### Gallery images
In `index.html`, find the placeholder comments like:
```html
<div class="img-placeholder"><!-- Replace with <img> --></div>
```
Replace each one with:
```html
<img src="images/your-filename.jpg" alt="Painting title" />
```

### Painting hover info (title, year, dimensions, medium)
Each painting item already has an overlay:
```html
<div class="overlay">
  <span class="ov-title">Milda uz Zirga</span>
  <span class="ov-meta">2025 · 800×500mm · Oil</span>
</div>
```
Edit the text inside `ov-title` and `ov-meta` for each work.

---

## How to update links

### Instagram
Search for `href="#"` next to Instagram mentions and replace `#` with:
```
https://www.instagram.com/yourusername
```
There are two Instagram links: one in the footer, one in the Contact overlay.

### YouTube video
Find `YOUR_VIDEO_ID` in `index.html` and replace with your video ID.
The video ID is the part after `?v=` in a YouTube URL.
Example: `https://www.youtube.com/watch?v=dQw4w9WgXcQ` → ID is `dQw4w9WgXcQ`

---

## How the category filter works
- Clicking **Paintings / Photography / Video / Digital Art** in the nav filters the view.
- The **Mix** section (all works together) is shown on initial load.
- To show Mix again after filtering, refresh the page or add a "All / Mix" link.

---

## Font
Currently uses **Barlow Condensed** from Google Fonts (loaded via `<link>` in the HTML).
Once you find your original Adobe font, replace the Google Fonts import in `css/style.css`
and update `font-family: 'Barlow Condensed'` to your font name.

---

## Colors
All colors are CSS variables in `css/style.css`:
```css
--pink: #ff69b4;     /* nav links, contact, instagram */
--yellow: #f5c842;   /* hover state, MULTIMEDIA ARTIST title */
--grey-name: #9e9e9e; /* name, non-interactive text */
```
Adjust hex values here to fine-tune the exact pink/yellow tones.
