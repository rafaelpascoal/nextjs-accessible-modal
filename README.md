An **accessible and reusable modal component** built with [shadcn/ui](https://ui.shadcn.com/) and Radix, featuring proper focus management, ESC key support, and unit testing with Jest.

---

## 🚀 Tech Stack

- **Framework:** Next.js (App Router)
- **UI:** shadcn/ui + Radix
- **Styling:** Tailwind CSS
- **Animation (optional)**: Framer Motion
- **Testing:** Jest (unit tests)

---

## 🛠 Installation

1. Clone the repository

```bash
git clone https://github.com/rafaelpascoal/nextjs-accessible-modal.git
cd nextjs-accessible-modal
```

2. Install dependencies

```bash
pnpm install
# or npm install / yarn install
```

3. Install shadcn/ui

```bash
npx shadcn-ui init
```

- During the installation, choose the desired theme (e.g., neutral, gray, zinc, stone, slate).

- Confirm the creation of the components/ui folder and the files required for the design system.

4. Add required components

```bash
npx shadcn-ui add dialog button
```
or, each component installed separately.
```bash
npx shadcn-ui add dialog
npx shadcn-ui add button
```

5. Run the development server

```bash
pnpm dev
# or npm run dev / yarn dev
```
---

## ✨ Features

- ♿ Fully accessible modal with focus trapping and ESC key handling
- ⌨️ Close on ESC key
- 🖱 Close on overlay click
- 🔄 Reusable component architecture
- 🧪 Unit tests covering open/close behavior
- ⚡ Built with modern Next.js App Router

### ♿ Accessibility Features

This modal follows accessibility best practices using Radix UI:

- **Focus trapping**: When the modal opens, keyboard focus stays inside the modal.  
- **ESC key handling**: Users can close the modal by pressing the Escape key (optional, enabled by default).  
- **Overlay click**: Users can close the modal by clicking outside the modal content (optional, enabled by default).  
- **ARIA attributes**: Radix Dialog automatically manages `aria-modal`, `aria-labelledby`, and `aria-describedby` attributes for screen readers.  
- **Keyboard navigation**: All interactive elements inside the modal are reachable via Tab/Shift+Tab.

---
## 📦 Usage

```typescript
'use client'

import { useState } from "react"
import Modal from "@/components/modal/modal"

export default function Page() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal
        title="Modal Example"
        description="This is a reusable accessible modal"
        isOpen={open}
        onOpenChange={setOpen}
      >
        <p>Hello, I am the modal content!</p>
      </Modal>
    </>
  )
}
```
---
## 🧪 Running Tests

```bash
pnpm test
```

---
## 📸 Preview

🔗 Live Demo: https://nextjs-accessible-modal.vercel.app

---
## 🚀 Deployment

- This project is optimized for deployment on Vercel.
- Simply connect your GitHub repository and deploy with one click.

---

## 📂 Project Structure

```bash
src/
 ├─ app/              # Next.js App Router structure
 ├─ components/       # Reusable UI components
 │   └─ modal/        # Accessible modal implementation
 ├─ tests/            # Unit tests (Jest)
 └─ utils/            # Helper functions
