'use client'

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

interface ModalProps {
    title: string
    description?: string
    trigger?: React.ReactNode
    children: React.ReactNode
    isOpen?: boolean
    onOpenChange?: (open: boolean) => void
    closeOnEsc?: boolean // Optional to close the modal when pressing the escape key
    closeOnOverlayClick?: boolean // Optional to close the modal when clicking outside
}


export default function Modal({
    title,
    description,
    trigger,
    children,
    isOpen,
    onOpenChange,
    closeOnEsc = true,
    closeOnOverlayClick = true,
}: ModalProps) {
    return (
        // Radix already offers focus trap and ESC features by default
        // Here we only reinforce optional control
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.3 }}
                    >

                        <DialogContent
                            onEscapeKeyDown={closeOnEsc ? () => onOpenChange?.(false) : undefined}
                            onInteractOutside={closeOnOverlayClick ? () => onOpenChange?.(false) : undefined}
                        >
                            <DialogHeader>
                                <DialogTitle>{title}</DialogTitle>
                                {description && <DialogDescription>{description}</DialogDescription>}
                            </DialogHeader>
                            <div className="flex flex-col gap-4">
                                {children}
                            </div>
                        </DialogContent>
                    </motion.div>
                )}
            </AnimatePresence>
        </Dialog>
    )
}