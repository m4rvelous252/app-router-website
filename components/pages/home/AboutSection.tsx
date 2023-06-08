import PageWidth from "@/components/layout/PageWidth"

interface AboutProps {
  heading: string
  subHeading: string
  members: {
    name: string
    role: string
    imgUrl: string
  }[]
}

const AboutSection = ({ heading, subHeading, members }: AboutProps) => {
  return (
    <section className="bg-white py-16">
      <PageWidth className="flex flex-col items-center justify-center gap-12 text-center">
        <h1 className='font-bold text-3xl'>{heading}</h1>
        <h4 className='text-gray-400 lg:max-w-2xl'>{subHeading}</h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map(({ name, role, imgUrl }) => (
            <li key={name + role} className="flex flex-col gap-4 items-center justify-center border-b border-b-gray-200 pb-4">
              <div>
                <img src={imgUrl} alt={name} />
              </div>
              <span className="capitalize">{name}</span>
              <span className="text-gray-400 uppercase text-sm">{role}</span>
            </li>
          ))}
        </ul>
      </PageWidth>
    </section>
  )
}

export default AboutSection