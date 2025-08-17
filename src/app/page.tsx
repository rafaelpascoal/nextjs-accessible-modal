'use client'

import { Button } from "@/components/ui/button"
import Modal from "@/components/ui/Modal"
import { useState } from "react"

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className="p-8">
      <h1 className="text-3xl text-center font-bold mb-4">Accessible Modal Project</h1>
      <p className="text-sm text-gray-500 mb-4 text-center">This is a modal example that demonstrates how to create an accessible modal using React and Tailwind CSS.</p>
      <p className="text-lg mb-4 text-center">Click the button below to open the modal</p>
      <div className="flex justify-center"> 
        <Button
          variant="default"
          className="mb-4"
          onClick={() => setIsOpen(true)}
        >
          Open Modal
        </Button>
      </div>

      <Modal
        title="Modal Example"
        description="This is a modal example"
        isOpen={isOpen}
        onOpenChange={setIsOpen}
      >
        <div className="gap-4">
          <p>Click the button below to close the modal</p>
          <div className="flex justify-end">
            <Button variant="secondary" onClick={() => setIsOpen(false)}>Close Modal</Button>
          </div>
        </div>
      </Modal>
    </main>
  )
}