import PageWidth from "@/components/layout/PageWidth"

interface ClientHighlightProps {
  clients: {
    name: string
    logoUrl: string
    href?: string
  }[]
}

const ClientHighlight: React.FC<ClientHighlightProps> = ({ clients }) => {
  return (
    <section className="w-full bg-gray-50 saturate-0">
      <PageWidth className={`flex flex-col md:flex-row items-center justify-between gap-8 py-16 md:py-8`}>
        {clients.map(client => (
          <a key={client.name} className={`w-1/2 md:w-1/5`} href={client.href || '#'}>
            <img src={client.logoUrl} alt={client.name} />
          </a>
        ))}
      </PageWidth>
    </section>
  )
}

export default ClientHighlight