import { useContext } from 'react'
import Layout from '@/components/layout'
import { Helmet } from 'react-helmet'
import Dot from '@/components/svg/dot.svg'
import FormBgBlur from '@/components/svg/wide-button-bg-blur.svg'
import HexesLarge from '@/components/svg/hexes-large.svg'
import { graphql } from 'gatsby'
import reactStringReplace from 'react-string-replace'
import { GatsbyImage } from 'gatsby-plugin-image'
import mockGraphic from '@/images/graphic-game-craft.svg'
import ChevronLeft from '@/components/svg/chevron-left.svg'
import ChevronRight from '@/components/svg/chevron-right.svg'
import DemoCarouselBg from '@/components/svg/demo-carousel-bg.svg'
import {
  CarouselContext,
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

export default function IndexPage (props) {
  const { data } = props
  const heroData = data.contentfulLandingHero
  const heroTitle = reactStringReplace(
    heroData.title.title,
    /__(.*)__/g,
    (match) => <strong className="text-orange">{match}</strong>
  )
  const cc = useContext(CarouselContext)
  console.log(cc)

  return (
    <Layout>
      <Helmet>
        <title>Home Page</title>
      </Helmet>

      <main>
        <section className="grid">
          <div className="both-span-full justify-self-center overflow-hidden">
            <HexesLarge aria-hidden="true" />
          </div>
          <div className="both-span-full self-center w-full flex flex-col items-center gap-7 -translate-y-24">
            <div className="text-center">
              {heroData.showBetaAccessTag && (
                <p className="flex items-center justify-center gap-2.5 mb-4 font-mono uppercase text-xs tracking-wider text-teal">
                  Beta Access{' '}
                  <Dot className="text-teal-light drop-shadow-current-sm relative -top-px" />
                </p>
              )}

              <h1 className="max-w-xl font-display-alt font-black text-heading1 uppercase leading-none">
                {heroTitle}
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

        <section className="max-w-7xl mx-auto">
          <h2 className="sr-only">Tiv features</h2>

          <ul className="grid gap-4">
            {[1, 1, 1].map((a, index) => (
              <li className="flex items-center gap-4 even:flex-row-reverse">
                <figure className="contents">
                  {/* <GatsbyImage src={} */}
                  <img src={mockGraphic} />
                  <figcaption className="max-w-md">
                    <h3 className="text-heading3 font-bold">
                      Game more. Earn more.
                    </h3>
                    <p className="text-xl text-white text-opacity-50">
                      Rake in points by spending time doing what you already
                      love. It really is that simple.
                    </p>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </section>

        <section className="max-w-4xl mx-auto">
          <header className="relative z-10 mb-24 text-center">
            <h2 className="mb-2 text-heading2 font-bold uppercase">
              Pay Meets Play
            </h2>
            <p className="text-heading5 font-bold text-teal uppercase tracking-widest">
              The Checking Account for Gamers
            </p>
          </header>

          <CarouselProvider
            naturalSlideWidth={290}
            naturalSlideHeight={585}
            totalSlides={3}
            infinite
            isIntrinsicHeight
          >
            <figure className="flex justify-between">
              <div className="relative flex">
                <div className="grid absolute top-0 inset-x-0 -translate-y-48">
                  <div className="both-span-full justify-self-center overflow-hidden">
                    <DemoCarouselBg aria-hidden="true" />
                  </div>
                </div>
                <Slider className="w-[290px]" classNameAnimation>
                  {[1, 1, 1].map((a, index) => (
                    <Slide index={index}>
                      <img
                        width={290}
                        height={585}
                        src="https://via.placeholder.com/290x585"
                        alt={index}
                      />
                    </Slide>
                  ))}
                </Slider>
              </div>

              <figcaption className="max-w-sm mt-16">
                <Slider className="w-[2" classNameAnimation="none">
                  {[1, 1, 1].map((a, index) => (
                    <Slide index={index}>
                      <h3 className="mb-7 text-heading3 font-bold leading-tight">
                        ({index}) Enjoy all the benefits of modern checking
                      </h3>
                      <p className="mb-10 text-white opacity-50">
                        Easily manage your money using the Tiv mobile app. We’ll
                        also insure your checking account with up to $250,000 in
                        deposit insurance.
                      </p>
                    </Slide>
                  ))}
                </Slider>

                <div className="flex items-center gap-9">
                  <ButtonBack className="px-6 py-5 bg-gray-900 rounded">
                    <ChevronLeft />
                  </ButtonBack>
                  <DotGroup className="hex-dot-group flex gap-5" />
                  <ButtonNext className="px-6 py-5 bg-gray-900 rounded">
                    <ChevronRight />
                  </ButtonNext>
                </div>
              </figcaption>
            </figure>
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
        title
      }
      showBetaAccessTag
      showWaitlistSignup
    }
  }
`
