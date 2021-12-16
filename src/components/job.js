import classNames from 'classnames'
import { MDXRenderer } from 'gatsby-plugin-mdx'

export default function Job(props) {
  const { job, className } = props

  return (
    <article
      className={classNames(
        'relative h-full p-5 lg:p-7 flex flex-col space-y-5 space-y-reverse border border-gray border-opacity-20 rounded-2xl',
        className
      )}
    >
      <div
        className="corners corners-orange absolute -inset-px pointer-events-none"
        aria-hidden="true"
      />
      <h3 className="text-heading4">{job.title}</h3>
      <section>
        <h4 className="mb-1 text-xs">Description</h4>
        <p className="text-sm lg:text-base text-white/50">
          <MDXRenderer>{job.description.childMdx.body}</MDXRenderer>
        </p>
      </section>
      <section>
        <h4 className="mb-1 text-xs">Salary</h4>
        <p className="text-orange text-xl lg:text-2xl">
          <strong>{job.salary}</strong> / year
        </p>
      </section>
      <section>
        <h4 className="mb-1 text-xs">Description 2</h4>
        <p className="text-xs text-white/50">
          <MDXRenderer>{job.description2.childMdx.body}</MDXRenderer>
        </p>
      </section>
      <div className="!mt-auto !mb-0 pt-1 lg:pt-3 flex justify-between items-center space-x-4">
        <a href={job.applyUrl} target="_blank" className="button button-sm">
          Apply
        </a>
        <a
          href={job.learnMoreUrl}
          target="_blank"
          className="text-sm lg:text-base text-white/50 underline"
        >
          Learn More
        </a>
      </div>
    </article>
  )
}
