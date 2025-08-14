# Timeline App

## Task 1: Static Skeleton with HTML

This is the first stage of the Timeline App. It uses basic HTML to create a static skeleton that will support future features such as timelines, theme toggling, and modals. It includes the following elements:

- A `<header>` element with a logo and theme toggle button  
- An empty `<nav>` element for future filters/placeholders  
- A `<section id="timeline">` element in which event markers will be added later on  
- An empty `<div id="modal">` which will be used for pop-ups later on  
- Basic semantic tags like `<main>`, `<article>`, and `<figure>`  

## Task 2: Responsive Layout with CSS

This is the second stage of the Timeline App project. It builds upon the basic HTML skeleton to implement a fully responsive and visually polished layout. It includes the following features:

- Responsive Timeline: Uses Flexbox or CSS Grid depending on the viewport size.
- Styled Header: Includes typography, colour scheme, and layout adjustments.
- Styled Placeholder Event Markers: Placeholder styles for dots/labels.
- Modal Base Styles: Hidden by default.
- Adaptive Design: Breakpoints for mobile (<768px), tablet (768–1023px), and desktop (≥1024px).

## Task 3: Interactive Functionality with JavaScript

This stage adds interactivity to the Timeline App through JavaScript.  
Additional elements were added to the HTML skeleton, and further styles were applied in CSS to ensure the timeline displayed correctly.

### JSON File
- Contains the 9 timeline events, each of which contains: year, title, image, description, and category.

---

### JavaScript Features Implemented

**Timeline Data Rendering**
- Populates the `<section id="timeline">` with timeline event elements from the `events.json` file.

**Modal Interactions**
- Clicking on a timeline item opens a modal showing the event’s image, title, year, description, and category.
- Clicking outside the modal content or on the close (×) button closes the modal.

---

**Extra HTML Added**
- Added link to `script.js` at the end of `<body>`.
- Inside `<div id="modal">`, added child elements for:
  - `#modalImage` for the event image.
  - `#modalTitle`, `#modalYear`, `#modalDescription`, `#modalCategory` for event details.
  - Close button `<span id="closeModal">×</span>` inside the modal.

---

### Extra CSS Added

**Modal Styling**
- Increased `#modalContent` width and height to make the popup larger on desktop.

**Consistent Images**
- Fixed height and width for `#modalImage` with `object-fit: cover` to ensure proportional scaling.

**Background Blur**
- Ensured the modal covers the full screen to blur the background when a timeline event is open.

**Theme Styles**
- Added background and text color rules for light and dark modes.
