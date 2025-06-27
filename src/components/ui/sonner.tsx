// Toast component with cyber-terminal styling
// Maintains font consistency and theme across notification popups
// Uses terminal colors and monospace font for the hacker aesthetic

import { useTheme } from "next-themes"
import { Toaster as Sonner, toast } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-cyber-dark group-[.toaster]:text-terminal-green group-[.toaster]:border-terminal-green/30 group-[.toaster]:shadow-glow font-terminal border-2",
          description: "group-[.toast]:text-terminal-green/70 font-terminal",
          actionButton:
            "group-[.toast]:bg-terminal-green group-[.toast]:text-cyber-black font-terminal font-bold",
          cancelButton:
            "group-[.toast]:bg-cyber-grey group-[.toast]:text-terminal-green font-terminal",
          success: "group-[.toast]:text-terminal-bright-green group-[.toast]:border-terminal-bright-green/50",
          error: "group-[.toast]:text-red-400 group-[.toast]:border-red-400/50",
        },
      }}
      {...props}
    />
  )
}

export { Toaster, toast }
