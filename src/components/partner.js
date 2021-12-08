import classNames from 'classnames'
import ContentfulImage from '@/components/contentful-image'

export default function Partner (props) {
  const { partner, className } = props
  console.log(partner)
  return (
    <figure
      className={classNames(
        'max-w-[200px] sm:max-w-[230px] lg:max-w-[282px] md:corners md:p-5 lg:p-6 md:pb-9 lg:pb-11',
        className
      )}
    >
      {partner.image && (
        <div class="min-h-[110px] md:min-h-[90px] p-2 md:p-0 mb-7 md:mb-2 flex justify-center items-center corners md:no-corners">
          <ContentfulImage image={partner.image} />
        </div>
      )}
      <figcaption className="p-1 md:p-0">
        <p className="mb-1 lg:mb-2 text-xs uppercase">{partner.eyebrow}</p>
        <h3 className="mb-3 uppercase leading-tight">{partner.name}</h3>
        <p className="text-white/50 text-[13px] lg:text-base">
          {partner.description.description}
        </p>
      </figcaption>
    </figure>
  )
}
