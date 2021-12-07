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
  const jobsData = data.contentfulAboutJobs

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

        <section className="container flex max-w-7xl py-12">
          <header className="min-w-[280px] mt-32">
            <h2>
              <span className="block text-heading5">{pressData.eyebrow}</span>
              <span className="text-heading2 leading-[1.2em] font-bold uppercase cms-strong-orange">
                <MDXRenderer>{pressData.title.childMdx.body}</MDXRenderer>
              </span>
            </h2>
          </header>

          <div className="flex-shrink">
            <CarouselProvider
              naturalSlideWidth={282}
              naturalSlideHeight={500}
              totalSlides={pressData.articles.length}
              infinite
              isIntrinsicHeight
              visibleSlides={3}
              step={3}
            >
              <Slider>
                {pressData.articles.map((article, index) => (
                  <Slide
                    key={article.id}
                    index={index}
                    className="text-center md:text-left"
                  >
                    <article className="h-full ml-5 p-5 flex flex-col border border-gray border-opacity-20">
                      <GatsbyImage
                        image={article.image.gatsbyImageData}
                        alt={article.image.description}
                        className="mb-3 rounded-lg"
                      />
                      <div className="flex-grow flex flex-col p-3">
                        <div className="flex gap-4 mb-7">
                          <h3 className="text-heading3 text-2xl font-bold leading-tight">
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
                                className="-translate-y-2"
                              />
                            ))}
                        </div>
                        <p className="mb-8 text-white/50">
                          <MDXRenderer>
                            {article.description.childMdx.body}
                          </MDXRenderer>
                        </p>
                        {article.url && (
                          <a
                            href={article.url}
                            target="_blank"
                            className="inline-block mt-auto text-orange underline"
                          >
                            Read More
                          </a>
                        )}
                      </div>
                    </article>
                  </Slide>
                ))}
              </Slider>

              <div className="flex justify-end gap-2 mt-9 scale-75 md:scale-90 lg:scale-100 origin-top md:origin-top-left">
                <ButtonBack className="px-6 py-5 bg-gray-900 rounded">
                  <ChevronLeft />
                </ButtonBack>
                <ButtonNext className="px-6 py-5 bg-gray-900 rounded">
                  <ChevronRight />
                </ButtonNext>
              </div>
            </CarouselProvider>
          </div>
        </section>

        <section className="container max-w-5xl pt-4 pb-36">
          <h2 className="mb-16 text-heading2 text-center font-bold uppercase cms-strong-orange">
            <MDXRenderer>{jobsData.title.childMdx.body}</MDXRenderer>
          </h2>
          <ul className="grid grid-cols-3 gap-x-5 gap-y-4">
            {jobsData.jobs.map((job) => (
              <li key={job.id}>
                <article className="relative h-full p-7 flex flex-col gap-5 border border-gray border-opacity-20 rounded-2xl">
                  <div
                    className="corners corners-orange absolute -inset-px pointer-events-none"
                    aria-hidden="true"
                  />
                  <h3 className="text-heading3 text-2xl font-bold leading-tight">
                    {job.title}
                  </h3>
                  <section>
                    <h4 className="mb-1 text-xs">Description</h4>
                    <p className="text-white/50">
                      <MDXRenderer>{job.description.childMdx.body}</MDXRenderer>
                    </p>
                  </section>
                  <section>
                    <h4 className="mb-1 text-xs">Salary</h4>
                    <p className="text-orange text-2xl">
                      <strong>{job.salary}</strong> / year
                    </p>
                  </section>
                  <section>
                    <h4 className="mb-1 text-xs">Description 2</h4>
                    <p className="text-xs text-white/50">
                      <MDXRenderer>
                        {job.description2.childMdx.body}
                      </MDXRenderer>
                    </p>
                  </section>
                  <div className="mt-auto pt-3 flex justify-between gap-4">
                    <a
                      href={job.applyUrl}
                      target="_blank"
                      className="button button-sm"
                    >
                      Apply
                    </a>
                    <a
                      href={job.learnMoreUrl}
                      target="_blank"
                      className="text-white/50 underline"
                    >
                      Learn More
                    </a>
                  </div>
                </article>
              </li>
            ))}
          </ul>
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
