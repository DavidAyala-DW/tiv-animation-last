import Layout from '@/components/layout'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import heroBg from '@/images/contact-hero-bg.svg'

export default function PartnersPage(props) {
  const { data, path } = props
  const heroData = data.contentfulContactHero
  const methodsData = data.contentfulContactMethods

  return (
    <Layout currentPath={path}>
      <Helmet>
        <title>Contact — Tiv</title>
      </Helmet>

      <main>
        <section className="relative z-0 pt-40 lg:pt-56">
          <div className="absolute top-0 inset-x-0 z-[-1] flex justify-center overflow-hidden translate-y-[-37%] md:translate-y-[-22%] lg:translate-y-[-29%]">
            <img
              src={heroBg}
              className="max-w-none scale-[65%] md:scale-75 lg:scale-100 lg:translate-x-[14%]"
              aria-hidden="true"
            />
          </div>

          <div className="container lg:max-w-6xl flex flex-col lg:flex-row lg:justify-between items-center lg:items-start gap-7 md:gap-11">
            <header className="flex flex-col gap-3 md:gap-5 max-w-[280px] md:max-w-lg lg:max-w-sm text-center lg:text-left">
              <h1 className="text-heading2 font-black uppercase">
                <MDXRenderer>{heroData.title.childMdx.body}</MDXRenderer>
              </h1>
              <p className="text-heading4 text-teal">{heroData.subtitle}</p>
              <p className="text-white/50 leading-snug">
                {heroData.description.description}
              </p>
            </header>

            <form className="w-full flex flex-col gap-2.5 max-w-xl lg:max-w-lg">
              <label>
                <span className="sr-only">Your Name</span>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="form-input w-full"
                />
              </label>
              <label>
                <span className="sr-only">Your Email</span>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="form-input w-full"
                />
              </label>
              <label>
                <span className="sr-only">Your Email</span>
                <textarea
                  placeholder="Your Message"
                  className="form-input w-full"
                />
              </label>
              <div className="mt-1 md:mt-2 text-center md:text-right">
                <button
                  type="submit"
                  className="button button-outline py-2 text-base"
                >
                  {heroData.buttonLabel}
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query ContactPageQuery {
    contentfulContactHero {
      title {
        childMdx {
          body
        }
      }
      subtitle
      description {
        description
      }
      buttonLabel
    }
    contentfulContactMethods {
      contactMethods {
        id
        icon {
          description
          file {
            url
          }
          gatsbyImageData
        }
        title
        subtitle
        url
      }
    }
  }
`
