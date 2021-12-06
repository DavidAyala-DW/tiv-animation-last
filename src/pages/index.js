import Layout from '@/components/layout'
import { Helmet } from 'react-helmet'
import Dot from '@/components/svg/dot.svg'
import FormBgBlur from '@/components/svg/wide-button-bg-blur.svg'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage } from 'gatsby-plugin-image'
import { CarouselProvider } from 'pure-react-carousel'
import DemoCarousel from '@/components/demo-carousel'

import heroHexesLg from '@/images/hero-hexes-large.svg'
import heroHexesMd from '@/images/hero-hexes-medium.svg'
import heroHexesSm from '@/images/hero-hexes-small.svg'
import featureHexFrame from '@/images/feature-hex-frame.svg'
import featureHexFrameSm from '@/images/feature-hex-frame-small.svg'
import featureGlow from '@/images/feature-glow.svg'
import featureGlowSm from '@/images/feature-glow-small.svg'

export default function IndexPage (props) {
  const { data, path } = props
  const heroData = data.contentfulLandingHero
  const featuresData = data.contentfulLandingFeatureList.features
  const carouselData = data.contentfulLandingCarousel

  return (
    <Layout currentPath={path}>
      <Helmet>
        <title>Home Page</title>
      </Helmet>

      <main>
        <section className="grid py-12 md:py-0">
          <div
            className="both-span-full flex justify-center w-full overflow-hidden"
            aria-hidden="true"
          >
            <img src={heroHexesSm} className="max-w-none md:hidden" />
            <img
              src={heroHexesMd}
              className="max-w-none hidden md:inline lg:hidden"
            />
            <img src={heroHexesLg} className="max-w-none hidden lg:inline" />
          </div>

          <div className="both-span-full self-center container w-full flex flex-col items-center gap-7 lg:-translate-y-1/4">
            <div className="text-center">
              {heroData.showBetaAccessTag && (
                <p className="flex items-center justify-center gap-2.5 mb-3 md:mb-4 uppercase font-bold text-xs tracking-[1px] text-teal">
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

            <div className="relative w-full flex flex-col items-center mt-6">
              <div className="w-[345px] h-[150px] corners">
                [form goes here]
              </div>
              <FormBgBlur className="absolute -bottom-48 left-0 right-0 mx-auto" />
            </div>
          </div>
        </section>

        <section className="container max-w-6xl md:-mt-24 pt-5">
          <h2 className="text-heading5 text-center tracking-[8px] mr-[-8px] mb-4 md:sr-only">
            Explore
          </h2>

          <div
            className="block md:hidden w-[2px] h-[93px] mx-auto -mb-px bg-gray-900"
            aria-hidden="true"
          />

          <ul className="grid gap-10 md:gap-4">
            {featuresData.map((feature) => (
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
                      {feature.image.gatsbyImageData ? (
                        <GatsbyImage
                          src={feature.image.gatsbyImageData}
                          alt={feature.image.description}
                          // TODO: confirm this works
                        />
                      ) : (
                        <img
                          src={feature.image.file.url}
                          alt={feature.image.description}
                          className="w-1/2 md:w-3/5"
                        />
                      )}
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

        <section className="max-w-4xl mx-auto pt-36 pb-64">
          <header className="relative z-10 mb-24 text-center">
            <h2 className="mb-2 text-heading2 font-bold uppercase">
              <MDXRenderer>{carouselData.title.childMdx.body}</MDXRenderer>
            </h2>
            <p className="text-heading5">{carouselData.subtitle}</p>
          </header>

          <CarouselProvider
            naturalSlideWidth={290}
            naturalSlideHeight={585}
            totalSlides={carouselData.slides.length}
            infinite
            isIntrinsicHeight
            touchEnabled={false}
            dragEnabled={false}
          >
            <DemoCarousel slidesData={carouselData.slides} />
          </CarouselProvider>
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
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
    }

    contentfulLandingFeatureList {
      features {
        image {
          description
          file {
            url
          }
          gatsbyImageData
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
