**Modern Flat UI Component Design Guide (Global Use)**

---

## 1. FOUNDATIONAL DESIGN SYSTEM

### Color Scheme

* **Base background**: White (#FFFFFF)
* **Surface background**: #F9F9F9 or #F4F4F4
* **Text**: #1A1A1A (Primary), #666666 (Secondary), #A0A0A0 (Disabled)
* **Accent color**: One consistent brand hue (used sparingly)
* **Borders**: #E5E5E5 (subtle 1px lines)

### Typography

* Font: One clean sans-serif (Inter, SF Pro, Roboto, Helvetica Neue)
* Sizing scale (responsive rem):

  * Title (H1): 2.5rem bold
  * Section Title (H2): 2rem semibold
  * Subheading (H3): 1.5rem medium
  * Body: 1rem regular
  * Caption: 0.875rem gray
* All caps only for buttons or metadata

### Spacing and Layout

* Use 4pt spacing scale (4, 8, 12, 16, 20, 24, 32, 40, 64)
* Desktop grid: 12-column, 1140px max width
* Mobile grid: 4-column, 100% width with 16px gutters

---

## 2. ATOMIC UI COMPONENTS

### Buttons

* Types: Primary, Secondary, Ghost, Icon-only
* States: Default, Hover, Pressed, Disabled, Loading
* Shape: Rounded 6px, full-width only on mobile
* Primary: filled with brand color, white text
* Secondary: border with brand color, transparent fill
* Icon buttons: min size 40x40px, center-aligned

### Inputs

* Field types: text, email, password, number, textarea
* Shape: 6px border-radius, 1px border
* States: Default, Focused (border = accent), Error (border = red)
* Labels: Floating or always-on-top (avoid placeholders alone)
* Helper text below field (12px gray)

### Selects & Dropdowns

* Single or multi-select
* Arrow icon on right
* Keyboard + screen reader accessible
* Scrollable if >5 items

### Toggles & Switches

* ON/OFF binary switches: 40px wide minimum
* Checkbox: square, 20x20px, with visible check icon
* Radio: circle, same size as checkbox, grouped by label

### Tags / Chips

* Pills with label, optional close (×)
* Size: \~28px height, 12px horizontal padding
* Use for filtering, categorization, user input

### Avatars

* Sizes: XS (24px), SM (32px), MD (48px), LG (64px)
* Defaults: initials or user icon
* Circular crop only

### Alerts / Toasts

* Info, Success, Warning, Error
* Icon on left, message text, optional close
* Position: top-right or bottom center (mobile)
* Duration: 3–5 seconds auto-dismiss

---

## 3. CONTAINERS & BLOCK COMPONENTS

### Cards

* Elevation: Flat or 1 subtle shadow (#00000010)
* Padding: 16–24px
* Use for content grouping, previews, small detail panels

### Modals

* Centered (desktop), full-width (mobile)
* Backdrop: #00000040
* Close button top-right, ESC to dismiss
* Scrollable content inside modal

### Accordions

* Expand/collapse sections
* Chevron rotates on toggle
* Only one open at a time (optional)

### Tabs

* Horizontal, segment controls
* Active tab: accent underline or filled style
* Keyboard navigable

### Pagination

* Numbers + prev/next
* Highlight current page
* Use ellipsis for long page sets

---

## 4. NAVIGATION ELEMENTS

### Header

* Sticky top bar
* Logo left, nav links center/right
* Mobile: hamburger menu + slide-in nav drawer

### Footer

* Multiple column layout
* Grouped links by category
* Monochrome logos/icons

### Sidebars

* Used for dashboard/admin layouts
* Collapsible on mobile
* Active link highlighted

### Breadcrumbs

* Show hierarchy on content pages
* Divider: / or >

### Navigation Drawer

* Slide-in from left or right
* Overlay on content, backdrop darkened

---

## 5. FEEDBACK & INTERACTION

### Loaders

* Spinners: centered inline or overlay
* Skeleton loaders: placeholder shapes (cards, lines)

### Form Validation

* Instant feedback on blur or submit
* Red border for error, green (optional) for success
* Icon + helper text inline

### Transitions

* Duration: 150–300ms
* Easing: ease-in-out
* Use for hover, active, collapse, open, load

### Hover States

* Slight background fill or border color shift
* Avoid hard animation for accessibility

---

## 6. LAYOUT PATTERNS

### Hero Section

* Full-width image or solid fill
* Headline + subtitle + CTA button

### Two-column

* Image left, text right (or reverse)
* Stack on mobile

### Grid / List View

* Cards in 2–4 column grid
* Toggle to list layout (optional)

### Form Layouts

* Single column
* Group related fields with section headers
* Sticky action bar (on long forms)

### Timeline / Stepper

* Used for multi-step flows
* Show current step, completed steps visually

---

## 7. ACCESSIBILITY & RESPONSIVENESS

* WCAG AA color contrast
* Keyboard navigable for all interactive components
* Focus states visible
* Semantic HTML tags for all elements
* ARIA roles where necessary
* Touch targets: min 44x44px
* Mobile-first design
* Test at 320px width minimum

---

This UI design guide forms a universal base for any modern web interface. Components can be composed into any layout, enabling consistent, clean, and responsive design across all site types: SaaS, blogs, dashboards, landing pages, portals, or marketplaces.
