# Discovery Day

A polished, multi-page website for Discovery Day, the student-run program that brings free, hands-on science workshops to under-resourced classrooms. Built as plain HTML/CSS/JS so it hosts free on GitHub Pages and is easy to edit.

## Pages

- **index.html** — Home: the mission, key numbers, featured workshops, how it works for teachers.
- **workshops.html** — "Workshops for your class": the full catalog of SciWorks labs (filterable), each opening a detail view and the lesson/worksheet PDF, plus what every workshop includes.
- **past.html** — "Past Workshops": every Discovery Day in order, most recent first (the April 2026 Peterson event, 330 students).
- **about.html** — "About us": the founding story, the handoff to the two student leaders, and their bios.

A Contact section with both leads' emails is at the bottom of every page.

## Files

- `index.html`, `workshops.html`, `past.html`, `about.html` — the four pages
- `styles.css` — shared design
- `app.js` — shared menu + scroll animations
- `images/` — photos and workshop previews
- `materials/` — the workshop PDFs (the SciWorks labs)

## Put it online as a shared repo (GitHub Pages)

1. Create a repo named **discovery-day** (Public) at github.com.
2. **Add file > Upload files**, drag in everything in this folder (keep the `images` and `materials` folders), and commit.
3. **Share it with your two co-leads:** repo **Settings > Collaborators > Add people**, enter each GitHub username. They accept by email and can then edit it too.
4. **Settings > Pages**, Source: **Deploy from a branch**, branch **main**, folder **/ (root)**, Save.
5. Live in ~a minute at `https://YOUR-USERNAME.github.io/discovery-day/`.

## Editing the workshops

Open `workshops.html`, find `const WORKSHOPS = [`, and copy/edit an entry: `subject` (Chemistry / Biology / Earth Science), `title`, `by`, `img` (a file in `images/`), `pdf` (a file in `materials/`), `blurb`, `learn`, `materials`. The card, filter, and pop-up update automatically.

## A few things to confirm or send

- **Founding-class photos.** The About page currently uses photos from the April event. Send the original 2025 class photos (the ones on your Wix site) and I will swap them into the founding story.
- **Bios.** The two leads' bios are placeholders. Send a line about each of their science passions.
- **Names.** Confirm the spelling of "Denize" and that the greenhouse lab (file named "by dennis") is hers. Last names if you want them shown.
- **Authorship.** The Convection and Iodine Clock labs share one PDF with no author; they are credited to the team for now. Tell me who made them.
- **GitHub usernames** for your two co-leads, and confirm the contact emails (29denize@students.harker.org and 29shivaanik@students.harker.org).
