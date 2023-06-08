import PageWidth from "@/components/layout/PageWidth"

interface FeatureSectionProps {
  heading: string
  subHeading: string
  bulletPoints: string[]
  buttonText: string
  imgUrl: string
}

const FeatureSection = ({ heading, subHeading, bulletPoints, buttonText, imgUrl }: FeatureSectionProps) => {
  return (
    <section className="w-full bg-white py-16">
      <PageWidth className="flex flex-col md:flex-row-reverse gap-4">
        <div className="md:flex md:justify-end">
          <img className="md:w-3/4 md:h-auto" src={imgUrl} alt="DPS feature" />
        </div>
        <div className="flex flex-col flex-grow md:text-lg text-gray-400 gap-4 md:gap-8">
          <h1 className="text-black text-2xl font-semibold">{heading}</h1>
          <h4>{subHeading}</h4>
          <ul className="list-disc pl-4">
            {bulletPoints.map((point, index) => (
              <li key={index} className="marker:text-primary">{point}</li>
            ))}
          </ul>
          <button className="flex items-center bg-primary py-2 px-4 rounded-md text-white w-fit">{buttonText} →</button>
        </div>
      </PageWidth>
    </section>
  )
}

export default FeatureSection