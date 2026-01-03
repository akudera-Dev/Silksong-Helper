# Silksong Flea Location Helper

## 🚀 Project Overview

This project is web tool designed to help players of "Hollow Knight: Silksong" track their progress in collecting "fleas". It parses save files to identify which fleas have been collected and provides links to Map Genie.

> **Note**: This project is currently a Work in Progress.

## ✅ Curent Result

<img src="./Preview.jpg" width="500"/>

## 🛠️ Technical Stack

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/) [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![Nuxt](https://img.shields.io/badge/Nuxt-002E3B?style=for-the-badge&logo=nuxt&logoColor=00DC82)](https://nuxt.com/) [![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org/) [![VueUse](https://img.shields.io/badge/VueUse-647EFF?style=for-the-badge&logo=vueuse&logoColor=white)](https://vueuse.org/) [![Pinia](https://img.shields.io/badge/Pinia-F28D1A?style=for-the-badge&logo=pinia&logoColor=white)](https://pinia.vuejs.org/) [![Zod](https://img.shields.io/badge/Zod-3068b7?style=for-the-badge&logo=zod&logoColor=white)](https://zod.dev)

## 🗺️ Features & Roadmap

### 1. Save File Parsing

- [x] **PC Save Files**: Decrypts and parses encrypted PC save files (Handles custom C# headers, Base64 encoding, and AES decryption).
- [x] **Drag and Drop Interface**: Users can drag and drop their save file directly onto the page.

### 2. Flea Collection Tracking

- [x] **Data Extraction**: Extract `SavedFlea_` keys from the `playerData` object _(From Save File)_.
- [x] **Status Display**: Display a list of all tracked fleas with their current status (Found ✓ / Missing ✗).

### 3. Map Integration

- [x] **Map Genie Links**: Direct links to specific locations on Map Genie for each flea.
- [x] **Missing Flea Summary**: A section summarizing all missing fleas with a "View All" map link.

### 4. User Interface

- [x] **Visual Feedback**: Clear icons, status indicators, and filter buttons (All/Found/Missing).
- [x] **Error Handling**: Robust error messages for invalid or corrupted files.
- [x] **Modern Design**: game theme look.
- [ ] **Progress Bar**: Visual indicator of overall progress (e.g., "20/27 Fleas Found").
- [x] **Responsive Design**: Mobile-friendly layout.

### 5. Advanced Features (Planned)

- [ ] **Local Storage**: Save last file.
- [x] **PWA Support**: Installable as an offline-capable app.
