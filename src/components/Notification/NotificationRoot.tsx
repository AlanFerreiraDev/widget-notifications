import { ReactNode } from 'react'

interface NotificationProps {
  children: ReactNode
}

export function NotificationRoot({ children }: NotificationProps) {
  return (
    <div className="bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex items-start gap-6">
      {children}
    </div>
  )
}
