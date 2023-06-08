import Link from "next/link"
import PageWidth from "./PageWidth"

interface FooterProps {
  menu: {
    title: string,
    items: {
      label: string,
      href: string
    }[]
  }[]
}

const Footer = ({ menu }: FooterProps) => {
  return (
    <footer className="w-full bg-gray-900 text-white py-16">
      <PageWidth className={`grid grid-cols-3`}>
        {menu.map(({ title, items }) => (
          <ul key={title} className="flex flex-col gap-2">
            <h2 className="font-semibold text-lg mb-6">{title}</h2>
            {items.map(({ label, href }) => (
              <li key={label} className="opacity-70 hover:opacity-100">
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        ))}
      </PageWidth>
    </footer>
  )
}

export default Footer