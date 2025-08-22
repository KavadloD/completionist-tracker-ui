Completionist Tracker - Frontend

Overview
This repository contains the user interface for Completionist Tracker, a simple web app that helps you track progress toward 100 percent completion in your games. Add games, create or import checklists, check items off, and watch your progress update in real time.

Key features
- Clean dark theme with readable contrast
- Dashboard for your games and progress
- Game detail pages with checklist management
- Inline item editing and instant progress updates
- Community checklist browsing and import
- Small toast notifications for success or errors
- Works with keyboard and screen readers

Screens
- Login and signup
- Dashboard
- Game detail and checklist
- Community lists

Tech stack
- HTML, CSS, and vanilla JavaScript
- No build step required
- Runs as a static site
- Optional: add a bundler later if you want it

Requirements
- Any static file server will work
- A running backend that exposes the endpoints listed below
- CORS enabled on the backend if the UI and API are on different hosts

Quick start
1. Clone the repo and open it in your editor.
2. Set the API base URL in your script.
3. Serve the site as static files.
4. Open http://localhost:8000

Set API base URL
In your main script, set the API constant to point at your backend URL.
Example:
const API = "https://completionist-backend.onrender.com";

API endpoints used
POST /api/register
POST /api/login
GET  /api/games?user_id=:id
POST /api/games
GET  /api/games/:game_id/checklist
POST /api/games/:game_id/checklist
PATCH /api/games/:game_id/checklist/:checklist_item_id
DELETE /api/games/:game_id/checklist/:checklist_item_id
GET  /api/community

Project structure
design            wireframes, style guide, personas
fonts             brand and UI fonts
images            logos and placeholders
scripts           api.js, auth.js, checklist.js, app.js
styles.css        global styles and components
index.html        dashboard
login.html        login
register.html     signup
checklist.html    game detail and checklist
community.html    community browsing

Styling
- Theme variables for colors, spacing, and borders live in styles.css
- Shared components include cards, panels, tags, buttons, and toasts
- The Stormfaze font is used for the brand mark if available

Accessibility
- Logical heading order and focusable controls
- Labels on inputs where applicable
- Focus states that are visible on keyboard navigation

Development tips
- Serve locally with Python
  python -m http.server 8000
- Serve locally with Node
  npx http-server -p 8000
- In VS Code, you can use the Live Server extension

Deployment
- Any static hosting works. Netlify is a good fit.
- Set the API constant to your live backend URL before deploying.
- Ensure CORS is configured on the backend to allow your site origin.

Troubleshooting
- Seeing a CORS error
  Fix it on the backend by allowing the site origin.
- Getting a 401 or 403
  Check your login flow and make sure tokens or cookies are sent.
- UI loads but data is empty
  Verify API base URL and that the backend is reachable.

Roadmap
- Search and filter across games and tags
- Optional offline cache for the last loaded checklist
- Light theme option
- Better focus outlines and skip links

Contributing
Open an issue with a short description of the change. Small pull requests are easiest to review. Include a screenshot or short clip for UI changes.

License
MIT for the UI. Fonts and images may have their own terms.

Contact
Maintainer: Dorian Kavadlo
Email: dkavadlo@gmail.com
GitHub: https://github.com/KavadloD
LinkedIn: https://www.linkedin.com/in/dorian-kavadlo/
