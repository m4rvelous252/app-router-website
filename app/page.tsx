import { createClient } from "@/prismicio"
import ClientHighlight from "@/components/pages/home/ClientHighlight"
import HeroSection from "@/components/pages/home/HeroSection"
import FeatureSection from "@/components/pages/home/FeatureSection"
import * as prismicH from '@prismicio/helpers'
import ServiceSection from "@/components/pages/home/ServiceSection"
import AboutSection from "@/components/pages/home/AboutSection"

const fetchHomePageData = async () => {
  const client = createClient()
  const res = await client.getByUID('home_page', 'home-page')

  const heroSectionData = res.data.slices.find((slice) => slice.slice_type === 'hero_section')
  const clientHighlight = res.data.slices.find(slice => slice.slice_type === 'client_highlight')
  const featureSectionProps = res.data.slices.find(slice => slice.slice_type === 'feature_section')
  const serviceSectionProps = res.data.slices.find(slice => slice.slice_type === 'service_section')
  const aboutSectionProps = res.data.slices.find(slice => slice.slice_type === 'about_section')

  if (
    heroSectionData?.slice_type !== 'hero_section' ||
    clientHighlight?.slice_type !== 'client_highlight' ||
    featureSectionProps?.slice_type !== 'feature_section' ||
    serviceSectionProps?.slice_type !== 'service_section' ||
    aboutSectionProps?.slice_type !== 'about_section'
  ) return { HeroSectionProps: undefined, ClientHighlightProps: undefined }

  console.log('heroSectionData.primary', heroSectionData.primary.title)

  return {
    HeroSectionProps: {
      smallText: String(heroSectionData.primary.small_text),
      title: String(heroSectionData.primary.title),
      subTitle: String(heroSectionData.primary.sub_title),
      buttonText: String(heroSectionData.primary.button_text),
      productImgUrl: prismicH.asLink(heroSectionData.primary.product_image) || '',
      backgroundImgUrl: prismicH.asLink(heroSectionData.primary.background_image) || '',
    },
    ClientHighlightProps: {
      clients: clientHighlight.items.map(client => ({
        name: String(client.name),
        logoUrl: prismicH.asLink(client.logourl) || '',
        href: prismicH.asLink(client.href) || ''
      }))
    },
    FeatureSectionProps: {
      heading: String(featureSectionProps.primary.heading),
      subHeading: String(featureSectionProps.primary.sub_heading),
      bulletPoints: featureSectionProps.items.map(item => String(item.bullet_points)),
      buttonText: String(featureSectionProps.primary.button_text),
      imgUrl: featureSectionProps.primary.image.url || ''
    },
    ServiceSectionProps: {
      heading: String(serviceSectionProps.primary.heading),
      subHeading: String(serviceSectionProps.primary.sub_heading),
      services: serviceSectionProps.items.map(item => ({
        name: String(item.name),
        description: String(item.description)
      }))
    },
    AboutSectionProps: {
      heading: String(aboutSectionProps.primary.heading),
      subHeading: String(aboutSectionProps.primary.sub_heading),
      members: aboutSectionProps.items.map(item => ({
        name: String(item.name),
        role: String(item.role),
        imgUrl: item.image.url || ''
      }))
    }
  }

}

async function Home() {
  const {
    HeroSectionProps,
    ClientHighlightProps,
    FeatureSectionProps,
    ServiceSectionProps,
    AboutSectionProps,
  } = await fetchHomePageData()

  if (HeroSectionProps && ClientHighlightProps) {
    return (
      <>
        <HeroSection {...HeroSectionProps} />
        <ClientHighlight {...ClientHighlightProps} />
        <FeatureSection {...FeatureSectionProps} />
        <ServiceSection {...ServiceSectionProps} />
        <AboutSection {...AboutSectionProps} />
      </>
    )
  } else {
    return (
      <div>
        ERROR
      </div>
    )
  }
}

export default Home