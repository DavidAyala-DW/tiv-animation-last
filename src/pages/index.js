import Layout from '@/components/layout'
import { Helmet } from 'react-helmet'
import Dot from '@/components/svg/dot.svg'
import FormBgBlur from '@/components/svg/wide-button-bg-blur.svg'
import HexesLarge from '@/components/svg/hexes-large.svg'
import { graphql } from 'gatsby'
import reactStringReplace from 'react-string-replace'

export default function IndexPage (props) {
  const { data } = props
  const heroData = data.contentfulLandingHero
  const heroTitle = reactStringReplace(
    heroData.title.title,
    /__(.*)__/g,
    match => <strong className="text-orange">{match}</strong>
  )

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
