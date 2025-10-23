# 🪪 Profile Card — Stage 0

A small, accessible, responsive **Profile Card** built using **semantic HTML**, **modern CSS (Flexbox)**, and **vanilla JavaScript**.  
This project fulfills all **Stage 0** requirements.

---


---

## 🎯 Core Features

| Feature | Description |
|----------|-------------|
| **Semantic HTML** | Uses `<article>`, `<header>`, `<figure>`, `<nav>`, and `<section>` appropriately. |
| **Accessible** | Keyboard-friendly, includes `alt` text and proper roles. |
| **Responsive** | Stacks on small screens, side-by-side on larger screens. |
| **Dynamic Time** | Displays current time in milliseconds and human-readable format using `Date.now()`. |
| **Social Links** | Open in new tabs with `rel="noopener noreferrer"`. |
| **Testing Hooks** | Every visible element has a `data-testid` for automated tests. |

---


---

## 🎯 Core Features

| Feature | Description |
|----------|-------------|
| **Semantic HTML** | Uses `<article>`, `<header>`, `<figure>`, `<nav>`, and `<section>` appropriately. |
| **Accessible** | Keyboard-friendly, includes `alt` text and proper roles. |
| **Responsive** | Stacks on small screens, side-by-side on larger screens. |
| **Dynamic Time** | Displays current time in milliseconds and human-readable format using `Date.now()`. |
| **Social Links** | Open in new tabs with `rel="noopener noreferrer"`. |
| **Testing Hooks** | Every visible element has a `data-testid` for automated tests. |

---

## 🧩 Data Test IDs

| Element | `data-testid` |
|----------|----------------|
| Profile Card Root | `test-profile-card` |
| User Name | `test-user-name` |
| User Bio | `test-user-bio` |
| Current Time | `test-user-time` |
| User Avatar | `test-user-avatar` |
| Social Links Container | `test-user-social-links` |
| Each Social Link | `test-user-social-<network>` (e.g. `test-user-social-twitter`) |
| Hobbies List | `test-user-hobbies` |
| Dislikes List | `test-user-dislikes` |

> ⚠️ All test IDs must match exactly for stable automated testing.

---

## ⚙️ Setup & Usage

### 1. Clone or Download
```bash
git clone <your-repo-url>
cd profile-card
run the project locally in the browser
