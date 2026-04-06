# Bootstrap Integration Guide

## Overview
This portfolio website uses Bootstrap 5.3.0, a powerful front-end framework for building responsive websites.

## Bootstrap Components Used

### 1. Grid System
```html
<div class="container">
    <div class="row">
        <div class="col-lg-6 col-md-12">
            <!-- Content -->
        </div>
    </div>
</div>
```

**Breakpoints:**
- `col-` : Extra small devices (< 576px)
- `col-sm-` : Small devices (≥ 576px)
- `col-md-` : Medium devices (≥ 768px)
- `col-lg-` : Large devices (≥ 992px)
- `col-xl-` : Extra large devices (≥ 1200px)

### 2. Navigation (Navbar)
```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
```

**Classes Used:**
- `navbar` : Base navbar class
- `navbar-expand-lg` : Responsive collapse at large breakpoint
- `navbar-dark` : Dark color scheme
- `bg-dark` : Dark background color
- `fixed-top` : Fixes navbar to top of viewport

### 3. Cards
```html
<div class="card h-100">
    <img src="..." class="card-img-top">
    <div class="card-body">
        <h5 class="card-title">Title</h5>
        <p class="card-text">Description</p>
    </div>
</div>
```

**Card Components:**
- `card` : Main container
- `card-img-top` : Image at top
- `card-body` : Content wrapper
- `card-title` : Title styling
- `card-text` : Text content
- `h-100` : Full height (100%)

### 4. Buttons
```html
<button class="btn btn-primary btn-lg">Click Me</button>
<button class="btn btn-outline-light">Outlined</button>
```

**Button Variants:**
- `btn-primary` : Primary blue button
- `btn-secondary` : Secondary gray button
- `btn-success` : Green button
- `btn-danger` : Red button
- `btn-outline-*` : Outlined version

**Button Sizes:**
- `btn-sm` : Small button
- `btn-lg` : Large button

### 5. Forms
```html
<form>
    <div class="mb-3">
        <input type="text" class="form-control" placeholder="Name">
    </div>
    <div class="mb-3">
        <textarea class="form-control" rows="5"></textarea>
    </div>
</form>
```

**Form Classes:**
- `form-control` : Styled input/textarea
- `mb-3` : Margin bottom 3 units

### 6. Utility Classes

**Spacing:**
- `m-*` : Margin (m-1, m-2, m-3, m-4, m-5)
- `p-*` : Padding (p-1, p-2, p-3, p-4, p-5)
- `mt-*` : Margin top
- `mb-*` : Margin bottom
- `ms-*` : Margin start (left)
- `me-*` : Margin end (right)

**Display:**
- `d-none` : Display none
- `d-block` : Display block
- `d-flex` : Display flex
- `d-inline-flex` : Display inline-flex

**Flexbox:**
- `justify-content-center` : Center horizontally
- `justify-content-between` : Space between items
- `align-items-center` : Center vertically
- `flex-column` : Vertical direction

**Text Alignment:**
- `text-center` : Center text
- `text-start` : Align left
- `text-end` : Align right

**Background Colors:**
- `bg-primary` : Blue background
- `bg-light` : Light background
- `bg-dark` : Dark background
- `bg-white` : White background

**Text Colors:**
- `text-primary` : Blue text
- `text-white` : White text
- `text-muted` : Gray text
- `text-danger` : Red text

### 7. Progress Bars
```html
<div class="progress">
    <div class="progress-bar bg-primary" style="width: 90%"></div>
</div>
```

**Progress Classes:**
- `progress` : Container
- `progress-bar` : Bar element
- `bg-*` : Color variants

### 8. Icons (Bootstrap Icons)
```html
<i class="bi bi-heart-fill"></i>
<i class="bi bi-github"></i>
```

**CDN Link:**
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.min.css">
```

## JavaScript Components

### Bootstrap Bundle
The Bootstrap Bundle includes:
- Popper.js for tooltips and popovers
- Collapse functionality
- Modal dialogs
- Dropdown menus

**CDN Link:**
```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

### Using Bootstrap JavaScript

**Collapse (Mobile Menu):**
```javascript
const navbarCollapse = document.querySelector('.navbar-collapse');
const bsCollapse = new bootstrap.Collapse(navbarCollapse);
bsCollapse.hide();
```

**Alert:**
```javascript
const alert = new bootstrap.Alert(element);
alert.close();
```

## Responsive Design

### Grid Breakpoints
```css
/* Extra small devices (phones, less than 576px) */
/* No media query for `xs` since this is the default */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) { ... }

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) { ... }

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { ... }

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { ... }
```

### Responsive Classes Example
```html
<div class="col-12 col-sm-6 col-md-4 col-lg-3">
    <!-- 12 columns on mobile, 6 on small, 4 on medium, 3 on large -->
</div>
```

## Customizing Bootstrap

### 1. Using Custom CSS
Override Bootstrap styles in your custom CSS file (loaded after Bootstrap):

```css
.btn-primary {
    background-color: #your-color;
    border-color: #your-color;
}

.navbar {
    padding: 1rem 0;
}
```

### 2. CSS Variables
Bootstrap 5 uses CSS custom properties:

```css
:root {
    --bs-primary: #0d6efd;
    --bs-secondary: #6c757d;
    --bs-success: #198754;
}
```

## Best Practices

1. **Always include the viewport meta tag:**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

2. **Load Bootstrap CSS before custom CSS:**
```html
<link href="bootstrap.min.css" rel="stylesheet">
<link href="style.css" rel="stylesheet">
```

3. **Load Bootstrap JS before custom JS:**
```html
<script src="bootstrap.bundle.min.js"></script>
<script src="script.js"></script>
```

4. **Use containers for proper spacing:**
```html
<div class="container"> <!-- Fixed width with margins -->
<div class="container-fluid"> <!-- Full width -->
```

5. **Use spacing utilities instead of custom CSS when possible:**
```html
<!-- Good -->
<div class="mt-5 mb-3 p-4">

<!-- Avoid -->
<div style="margin-top: 3rem; margin-bottom: 1rem; padding: 1.5rem;">
```

## Common Issues and Solutions

### Issue 1: Mobile Menu Not Closing
**Solution:** Make sure Bootstrap JS is loaded and data attributes are correct.

### Issue 2: Layout Breaking on Mobile
**Solution:** Always test responsive classes (col-sm-, col-md-, etc.)

### Issue 3: Custom Styles Not Applying
**Solution:** Load custom CSS after Bootstrap CSS and use more specific selectors if needed.

## Resources

- **Official Documentation:** https://getbootstrap.com/docs/5.3/
- **Bootstrap Icons:** https://icons.getbootstrap.com/
- **Examples:** https://getbootstrap.com/docs/5.3/examples/
- **Customize Bootstrap:** https://getbootstrap.com/docs/5.3/customize/overview/

## Tips for This Portfolio

1. The navbar is fixed-top, so add padding to body or first section
2. Smooth scrolling is handled by CSS (scroll-behavior: smooth)
3. Progress bars animate on scroll using Intersection Observer
4. Cards use Bootstrap's shadow utilities for depth
5. Grid system ensures responsive layout across all devices

---

## Quick Reference

### Most Common Classes Used in This Project

```
Layout:         container, row, col-*, g-4
Navigation:     navbar, nav-item, nav-link
Cards:          card, card-body, card-title, card-text
Buttons:        btn, btn-primary, btn-lg, btn-outline-*
Forms:          form-control, mb-3
Spacing:        m-*, p-*, mt-*, mb-*, ms-*, me-*
Display:        d-flex, justify-content-*, align-items-*
Text:           text-center, text-muted, lead, display-*
Background:     bg-dark, bg-light, bg-primary
Utilities:      shadow, rounded, w-100, h-100
```

Enjoy building with Bootstrap! 🚀
