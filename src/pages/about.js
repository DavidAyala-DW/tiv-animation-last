import Layout from '@/components/layout'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel'

import heroBg from '@/images/about-hero-bg.svg'
import ChevronLeft from '@/components/svg/chevron-left.svg'
import ChevronRight from '@/components/svg/chevron-right.svg'

export default function AboutPage (props) {
  const { data, path } = props
  const heroData = data.contentfulAboutHero
  const teamData = data.contentfulAboutTeam
  const pressData = data.contentfulAboutPress

  return (
    <Layout currentPath={path}>
      <Helmet>
        <title>About — Tiv</title>
      </Helmet>

      <main>
        <section className="flex justify-center items-center py-12 -mb-32">
          <div
            className="absolute top-0 inset-x-0 translate-y-[-22%] flex justify-center w-full overflow-hidden"
            aria-hidden="true"
          >
            <img src={heroBg} className="max-w-none hidden lg:inline" />
          </div>

          <div className="z-10 container w-full flex flex-col items-center justify-center gap-7 min-h-[675px]">
            <h1 className="max-w-xl font-display-alt font-black text-heading1 uppercase text-center leading-none cms-strong-orange">
              <MDXRenderer>{heroData.title.childMdx.body}</MDXRenderer>
            </h1>
            <p className="max-w-4xl font-medium text-lg text-white text-center text-opacity-50">
              {heroData.description.description}
            </p>
          </div>
        </section>

        <section className="relative z-10 container w-max pt-2 pb-16">
          <header className="mb-16 text-center">
            <h2>
              <span className="block text-heading5">{teamData.eyebrow}</span>
              <span className="text-heading2 uppercase font-bold">
                {teamData.title}
              </span>
            </h2>
          </header>

          <ul className="grid grid-cols-4 gap-x-32 gap-y-16">
            {teamData.teamMembers.map((teamMember) => (
              <li
                key={teamMember.id}
                className="max-w-[204px] justify-self-center"
              >
                <figure>
                  <div className="p-1 corners">
                    <div className="p-5 border-2 border-gray border-opacity-20 rounded-full">
                      <GatsbyImage
                        image={teamMember.image.gatsbyImageData}
                        alt={teamMember.image.description}
                        className="rounded-full"
                      />
                    </div>
                  </div>
                  <figcaption className="mt-9 text-center">
                    <h3 className="mb-2 text-xs">{teamMember.name}</h3>
                    <p className="uppercase leading-tight text-white/50">
                      {teamMember.companyName}
                    </p>
                    <p className="mt-4 text-white/50">
                      {teamMember.description.description}
                    </p>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </section>

        <section className="container flex items-center max-w-7xl py-10">
          <header className="mb-16">
            <h2>
              <span className="block text-heading5">{pressData.eyebrow}</span>
              <span className="text-heading2 font-bold uppercase cms-strong-orange">
                <MDXRenderer>{pressData.title.childMdx.body}</MDXRenderer>
              </span>
            </h2>
          </header>

          <div>
            <CarouselProvider
              naturalSlideWidth={282}
              naturalSlideHeight={499}
              totalSlides={pressData.articles.length}
              infinite
              isIntrinsicHeight
              visibleSlides={3}
              step={3}
            >
              <Slider>
                {pressData.articles.map((article, index) => (
                  <Slide
                    key={article.id + index}
                    index={index}
                    className="text-center md:text-left"
                  >
                    <article className="mr-5 p-5 border border-gray border-opacity-20">
                      <GatsbyImage
                        image={article.image.gatsbyImageData}
                        alt={article.image.description}
                        className="mb-5 rounded-lg"
                      />
                      <div className="p-2.5">
                        <div>
                          <h3 className="mb-7 text-heading3 text-2xl font-bold leading-tight">
                            {article.title}
                          </h3>
                          {article.icon &&
                            (article.icon.gatsbyImageData ? (
                              <GatsbyImage
                                src={article.icon.gatsbyImageData}
                                alt={article.icon.description}
                                // TODO: confirm this works
                              />
                            ) : (
                              <img
                                src={article.icon.file.url}
                                alt={article.icon.description}
                                className=""
                              />
                            ))}
                        </div>
                        <p className="mb-10 text-white/50">
                          <MDXRenderer>
                            {article.description.childMdx.body}
                          </MDXRenderer>
                        </p>
                        {article.url && (
                          <a
                            href={article.url}
                            target="_blank"
                            className="text-orange"
                          >
                            Read More
                          </a>
                        )}
                      </div>
                    </article>
                  </Slide>
                ))}
              </Slider>

              <div className="flex gap-3">
                <ButtonBack>
                  <ChevronLeft />
                </ButtonBack>
                <ButtonNext>
                  <ChevronRight />
                </ButtonNext>
              </div>
            </CarouselProvider>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query AboutQuery {
    contentfulAboutHero {
      description {
        description
      }
      title {
        childMdx {
          body
        }
      }
    }
    contentfulAboutTeam {
      id
      title
      eyebrow
      teamMembers {
        image {
          description
          gatsbyImageData(height: 155, width: 155, quality: 100)
        }
        name
        companyName
        description {
          description
        }
      }
    }
    contentfulAboutPress {
      eyebrow
      title {
        childMdx {
          body
        }
      }
      articles {
        id
        image {
          gatsbyImageData(width: 240, height: 158, quality: 100)
          description
        }
        title
        url
        icon {
          gatsbyImageData(quality: 100)
          file {
            url
          }
        }
        description {
          childMdx {
            body
          }
        }
      }
    }
    contentfulAboutJobs {
      title {
        childMdx {
          body
        }
      }
      jobs {
        id
        title
        salary
        description {
          childMdx {
            body
          }
        }
        description2 {
          childMdx {
            body
          }
        }
        learnMoreUrl
        applyUrl
      }
    }
  }
`
