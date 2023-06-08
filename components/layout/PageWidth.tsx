import { ReactNode } from "react"

const PageWidth = ({ children, className }: { children: ReactNode, className?: string }) => {
  return (
    <div className={`w-full max-w-[1140px] xl:max-w-[1440px] mx-auto px-8 ${className || ''}`}>
      {children}
    </div>
  )
}

export default PageWidth