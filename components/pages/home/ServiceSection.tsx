import {
  ImDisplay,
  GiCutDiamond,
  BsPiggyBank,
  GiMaterialsScience,
  IoNewspaperOutline,
  SlPlane,
  GoTools,
  RxTimer,
  HiCubeTransparent
} from 'react-icons/all'
import PageWidth from '@/components/layout/PageWidth'

interface ServiceProps {
  heading: string
  subHeading: string
  services: {
    name: string
    description: string
  }[]
}

const icons = [
  <GiCutDiamond key={'diamond'} className='h-8 basis-8 grow-0 shrink-0 text-primary' />,
  <ImDisplay key={'display'} className='h-8 basis-8 grow-0 shrink-0 text-primary' />,
  <BsPiggyBank key={'dasdas'} className='h-8 basis-8 grow-0 shrink-0 text-primary' />,
  <GiMaterialsScience key={'dfgdfew'} className='h-8 basis-8 grow-0 shrink-0 text-primary' />,
  <IoNewspaperOutline key={'aliufncdbjvbseid'} className='h-8 basis-8 grow-0 shrink-0 text-primary' />,
  <SlPlane key={'jhvbaejhfbsvdjhb'} className='h-8 basis-8 grow-0 shrink-0 text-primary' />,
  <GoTools key={'ukygefjbsdjfgdsuy'} className='h-8 basis-8 grow-0 shrink-0 text-primary' />,
  <RxTimer key={'sdjhfgsdjhbfjhdsgjh'} className='h-8 basis-8 grow-0 shrink-0 text-primary' />,
  <HiCubeTransparent key={'isuehgfkjsdbfkjdhs'} className='h-8 basis-8 grow-0 shrink-0 text-primary' />
]

const ServiceSection = ({ services, heading, subHeading }: ServiceProps) => {
  return (
    <section className='bg-gray-50 py-16'>
      <PageWidth className='flex flex-col items-center justify-center gap-10'>
        <h1 className='font-bold text-3xl'>{heading}</h1>
        <div className="w-[100px] h-1 bg-primary"></div>
        <h4 className='text-gray-400 lg:max-w-2xl text-center'>{subHeading}</h4>
        <ul className='grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12'>
          {services.map(({ name, description }, index) => (
            <li key={index} className='flex items-start'>
              {icons[index]}
              <div className="flex flex-col ml-6">
                <span>{name}</span>
                <span className='text-gray-400'>{description}</span>
              </div>
            </li>
          ))}
        </ul>
      </PageWidth>
    </section>
  )
}

export default ServiceSection