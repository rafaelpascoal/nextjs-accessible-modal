'use client'

import * as React from "react"
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
}


export default function Modal({
    title,
    description,
    trigger,
    children,
    isOpen,
    onOpenChange,
}: ModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    {description && <DialogDescription>{description}</DialogDescription>}
                </DialogHeader>
                <div className="flex flex-col gap-4">
                    {children}
                </div>
            </DialogContent>
        </Dialog>
    )
}