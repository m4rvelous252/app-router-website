import PageWidth from "@/components/layout/PageWidth"

interface HeroSectionProps {
  smallText: string
  title: string
  subTitle: string
  buttonText: string
  productImgUrl: string
  backgroundImgUrl: string
}

const HeroSection: React.FC<HeroSectionProps> = ({ smallText, title, subTitle, buttonText, productImgUrl, backgroundImgUrl }) => {
  return (
    <section style={{ backgroundImage: `url('${backgroundImgUrl}')` }} className={`h-full w-full bg-cover bg-center relative pt-36 text-white `}>
      <div className="absolute w-full h-full top-0 right-0 left-0 bottom-0 opacity-80 bg-gradient-to-r from-sky-200 to-indigo-500 z-10"></div>
      <PageWidth className="z-20 flex flex-col w-full items-center justify-center relative gap-6">
        <span className={`tracking-[.4em] font-medium`}>{smallText}</span>
        <h1 className={`text-5xl leading[64px] font-semibold max-w-4xl text-center`}>{title}</h1>
        <p className={`opacity-70 max-w-2xl text-center`}>{subTitle}</p>
        <button className={`bg-primary px-6 py-2 rounded-md shadow-md`}>{buttonText}</button>
        <img className={``} src={productImgUrl} alt="" />
      </PageWidth>
    </section>
  )
}

export default HeroSection