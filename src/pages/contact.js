import Layout from '@/components/layout'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import ContentfulImage from '@/components/contentful-image'
import HexCircleFrame from '@/components/svg/hex-circle-frame.svg'

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
        <section className="relative z-0 pt-40 lg:pt-56 pb-10">
          <div className="absolute top-0 inset-x-0 z-[-1] flex justify-center overflow-hidden translate-y-[-37%] md:translate-y-[-22%] lg:translate-y-[-29%]">
            <img
              src={heroBg}
              className="max-w-none scale-[65%] md:scale-75 lg:scale-100 lg:translate-x-[14%]"
              aria-hidden="true"
            />
          </div>

          <div className="container lg:max-w-6xl flex flex-col lg:flex-row lg:justify-between items-center lg:items-start space-y-7 lg:space-y-0 lg:space-x-11">
            <header className="flex flex-col space-y-3 md:space-y-5 max-w-[280px] md:max-w-lg lg:max-w-sm text-center lg:text-left">
              <h1 className="text-heading2 font-black uppercase">
                <MDXRenderer>{heroData.title.childMdx.body}</MDXRenderer>
              </h1>
              <p className="text-heading4 text-teal">{heroData.subtitle}</p>
              <p className="text-white/50 leading-snug">
                {heroData.description.description}
              </p>
            </header>

            <form className="w-full flex flex-col space-y-2.5 max-w-xl lg:max-w-lg">
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
              <div className="mt-1 md:mt-2 text-center lg:text-right">
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

        <section className="relative z-10 container pt-12 md:pt-14 lg:pt-28 pb-28 lg:pb-48">
          <h2 className="sr-only">Contact Methods</h2>
          <ul className="flex flex-col md:flex-row items-center md:items-stretch md:justify-center md:space-x-14 lg:space-x-24">
            {methodsData.contactMethods.map((method) => (
              <li className="mb-[-2px]">
                <figure className="relative w-[170px] md:w-48 lg:w-72 md:h-full pt-3 lg:pt-4 pb-8 lg:pb-11 corners flex flex-col items-center text-center hover:bg-teal/20">
                  <div
                    className="grid place-items-center w-28 lg:w-[160px] mb-2 lg:mb-4"
                    role="presentation"
                  >
                    <ContentfulImage
                      image={method.icon}
                      className="both-span-full block w-1/3 max-w-[40px]"
                    />
                    <HexCircleFrame
                      className="both-span-full w-full h-auto"
                      aria-hidden="true"
                    />
                  </div>
                  <figcaption>
                    <h3 className="mb-1 lg:mb-3 font-bold lg:text-3xl">
                      {method.title}
                    </h3>
                    <p className="text-teal font-bold leading-tight lg:text-lg">
                      <a
                        href={method.url}
                        target="_blank"
                        className="underline after:absolute after:inset-0"
                      >
                        {method.subtitle}
                      </a>
                    </p>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
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
