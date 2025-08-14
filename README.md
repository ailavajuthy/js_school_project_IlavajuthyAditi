# Task 3: Interactive Functionality with JavaScript

This stage adds interactivity to the Timeline App through JavaScript.  
Additional elements were added to the HTML skeleton, and further styles were applied in CSS to ensure the timeline displayed correctly.

## JSON File
- Contains the 9 timeline events, each of which contains: year, title, image, description, and category.

---

## JavaScript Features Implemented

### Timeline Data Rendering
- Populates the `<section id="timeline">` with timeline event elements from the `events.json` file.

### Modal Interactions
- Clicking on a timeline item opens a modal showing the event’s image, title, year, description, and category.
- Clicking outside the modal content or on the close (×) button closes the modal.

---

## Extra HTML Added
- Added link to `script.js` at the end of `<body>`.
- Inside `<div id="modal">`, added child elements for:
  - `#modalImage` for the event image.
  - `#modalTitle`, `#modalYear`, `#modalDescription`, `#modalCategory` for event details.
  - Close button `<span id="closeModal">×</span>` inside the modal.

---

## Extra CSS Added

### Modal Styling
- Increased `#modalContent` width and height to make the popup larger on desktop.

### Consistent Images
- Fixed height and width for `#modalImage` with `object-fit: cover` to ensure proportional scaling.

### Background Blur
- Ensured the modal covers the full screen to blur the background when a timeline event is open.

### Theme Styles
- Added background and text color rules for light and dark modes.
