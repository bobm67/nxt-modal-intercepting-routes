'use client'
import { ReactNode } from 'react'
import { Dialog, DialogOverlay, DialogContent } from './ui/dialog'
import { useRouter } from 'next/navigation'

export default function Modal({ children }: { children: ReactNode }) {
  const router = useRouter()

  const handleOpenChange = () => {
    router.back()
  }

  return (
    <Dialog defaultOpen={true} open={true} onOpenChange={handleOpenChange}>
      <DialogOverlay>
        <DialogContent className='overflow-y-hidden'> {children}
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  )
}

