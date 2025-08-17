An **accessible and reusable modal component** built with [shadcn/ui](https://ui.shadcn.com/) and Radix, featuring proper focus management, ESC key support, and unit testing with Jest.

---

## 🚀 Tech Stack

- **Framework:** Next.js (App Router)
- **UI:** shadcn/ui + Radix
- **Styling:** Tailwind CSS
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

4. Run the development server

```bash
pnpm dev
# or npm run dev / yarn dev
```
---

## ✨ Features

- ♿ Fully accessible modal with focus trapping and ESC key handling
- 🔄 Reusable component architecture
- 🧪 Unit tests covering open/close behavior
- ⚡ Built with modern Next.js App Router

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
