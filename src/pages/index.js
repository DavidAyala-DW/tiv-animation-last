import Layout from '@/components/layout'
import { Helmet } from 'react-helmet'
import Dot from '@/components/svg/dot.svg'
import FormBgBlur from '@/components/svg/wide-button-bg-blur.svg'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { StaticImage } from 'gatsby-plugin-image'
import { CarouselProvider } from 'pure-react-carousel'
import DemoCarousel from '@/components/demo-carousel'
import WaitlistButton from '@/components/waitlist-button'

import heroHexesLg from '@/images/hero-hexes-large.svg'
import heroHexesMd from '@/images/hero-hexes-medium.svg'
import heroHexesSm from '@/images/hero-hexes-small.svg'
import featureHexFrame from '@/images/feature-hex-frame.svg'
import featureHexFrameSm from '@/images/feature-hex-frame-small.svg'
import featureGlow from '@/images/feature-glow.svg'
import featureGlowSm from '@/images/feature-glow-small.svg'
import ContentfulImage from '@/components/contentful-image'

export default function IndexPage(props) {
  const { data, path } = props
  const heroData = data.contentfulLandingHero
  const featuresData = data.contentfulLandingFeatureList
  const carouselData = data.contentfulLandingCarousel

  return (
    <Layout currentPath={path}>
      <Helmet>
        <title>Tiv</title>
      </Helmet>

      <main>
        <section className="grid overflow-hidden pt-12 md:pt-0 pb-20 md:pb-24 lg:pb-0">
          <div
            className="both-span-full flex justify-center w-full overflow-hidden pointer-events-none"
            aria-hidden="true"
          >
            <img src={heroHexesSm} className="max-w-none md:hidden" />
            <img
              src={heroHexesMd}
              className="max-w-none hidden md:inline lg:hidden"
            />
            <img src={heroHexesLg} className="max-w-none hidden lg:inline" />
          </div>

          <div
            className="absolute z-10 inset-0 overflow-hidden pointer-events-none"
            role="img"
            aria-label="Three orange, black, and white Tiv debit cards shooting toward a target made of concentric hexes"
          >
            <div className="relative container h-full xl:max-w-[1440px] flex justify-center">
              <StaticImage
                src="../images/tiv-card-from-top.png"
                width={700}
                className="absolute -top-14 md:-top-48 xl:-top-96 -left-24 md:left-auto md:right-24 xl:right-48 w-[330px] md:w-[470px] xl:w-auto"
                loading="eager"
                placeholder="tracedSVG"
                aria-hidden="true"
              />
              <StaticImage
                src="../images/tiv-card-from-left.png"
                width={720}
                className="absolute lg:top-64 bottom-48 md:bottom-36 lg:bottom-auto -left-40 md:-left-40 xl:-left-64 w-[400px] md:w-[480px] xl:w-auto"
                loading="eager"
                placeholder="tracedSVG"
                aria-hidden="true"
              />
              <StaticImage
                src="../images/tiv-card-from-right.png"
                width={680}
                className="absolute bottom-64 md:bottom-48 xl:bottom-24 -right-24 md:-right-32 xl:-right-20 w-[350px] md:w-[450px] xl:w-auto"
                loading="eager"
                placeholder="tracedSVG"
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="both-span-full self-center container w-full flex flex-col items-center gap-7 lg:-translate-y-1/4">
            <div className="text-center">
              {heroData.showBetaAccessTag && (
                <p className="flex items-center justify-center gap-2.5 mb-3 md:mb-4 uppercase font-bold text-xs tracking-[1px] leading-tight text-teal">
                  Beta Access{' '}
                  <Dot className="text-teal-light drop-shadow-current-sm relative" />
                </p>
              )}

              <h1 className="max-w-xl font-display-alt font-black text-heading1 lg:text-[56px] uppercase leading-none cms-strong-orange">
                <MDXRenderer>{heroData.title.childMdx.body}</MDXRenderer>
              </h1>
            </div>
            <p className="max-w-lg font-medium text-lg text-white text-center text-opacity-50">
              {heroData.description.description}
            </p>

            <div className="relative z-0 w-full flex flex-col items-center mt-6">
              <div className="corners p-5">
                <WaitlistButton className="button button-outline button-lg min-w-[240px] py-3 pb-3.5">
                  {heroData.joinButtonLabel}
                </WaitlistButton>
              </div>
              <FormBgBlur
                className="absolute -bottom-48 left-1/2 z-[-1] -translate-x-1/2"
                aria-hidden="true"
              />
            </div>
          </div>
        </section>

        <section className="container max-w-6xl md:-mt-24 pt-5">
          <h2 className="text-heading5 text-center tracking-[8px] mr-[-8px] mb-4 md:sr-only">
            {featuresData.title}
          </h2>

          <div
            className="block md:hidden w-[2px] h-[93px] mx-auto -mb-px bg-gray-900"
            aria-hidden="true"
          />

          <ul className="grid gap-10 md:gap-4">
            {featuresData.features.map((feature) => (
              <li
                key={feature.id}
                className="flex flex-col md:flex-row items-center gap-8 md:gap-16 md:even:flex-row-reverse"
              >
                <figure className="contents">
                  <div className="relative grid items-center justify-center">
                    <img
                      className="absolute hidden md:inline"
                      src={featureGlow}
                      aria-hidden="true"
                    />
                    <img
                      className="absolute md:hidden"
                      src={featureGlowSm}
                      aria-hidden="true"
                    />
                    <img
                      src={featureHexFrame}
                      className="both-span-full hidden md:inline"
                      aria-hidden="true"
                    />
                    <img
                      src={featureHexFrameSm}
                      className="both-span-full mx-auto md:hidden"
                      aria-hidden="true"
                    />
                    <div className="both-span-full z-10 flex justify-center">
                      <ContentfulImage
                        image={feature.image}
                        className="w-1/2 md:w-3/5"
                      />
                    </div>
                  </div>
                  <figcaption className="max-w-xs lg:max-w-md text-center md:text-left">
                    <h3 className="mb-3 md:mb-4 text-heading3 font-bold leading-[1.2em] cms-strong-orange">
                      <MDXRenderer>{feature.title.childMdx.body}</MDXRenderer>
                    </h3>
                    <p className="lg:text-xl leading-snug text-white text-opacity-50">
                      {feature.description.description}
                    </p>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </section>

        <section className="overflow-hidden pt-36 pb-64">
          <div className="container md:max-w-3xl lg:max-w-4xl">
            <header className="relative z-10 mb-16 lg:mb-24 text-center">
              <h2 className="mb-2 text-heading2 font-bold uppercase cms-strong-orange">
                <MDXRenderer>{carouselData.title.childMdx.body}</MDXRenderer>
              </h2>
              <p className="text-heading5">{carouselData.subtitle}</p>
            </header>

            <CarouselProvider
              naturalSlideWidth={258}
              naturalSlideHeight={558}
              totalSlides={carouselData.slides.length}
              infinite
              isIntrinsicHeight
              touchEnabled={false}
              dragEnabled={false}
            >
              <DemoCarousel slidesData={carouselData.slides} />
            </CarouselProvider>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query LandingPageQuery {
    contentfulLandingHero {
      description {
        description
      }
      title {
        childMdx {
          body
        }
      }
      showBetaAccessTag
      showWaitlistSignup
      joinButtonLabel
    }

    contentfulLandingFeatureList {
      title
      features {
        image {
          description
          file {
            url
          }
          gatsbyImageData(width: 277, quality: 100)
        }
        description {
          description
        }
        id
        title {
          childMdx {
            body
          }
        }
      }
    }

    contentfulLandingCarousel {
      title {
        childMdx {
          body
        }
      }
      subtitle
      slides {
        description {
          description
        }
        id
        title {
          childMdx {
            body
          }
        }
        video {
          file {
            url
          }
          description
        }
      }
    }
  }
`
