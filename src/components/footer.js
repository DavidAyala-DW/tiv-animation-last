import { Link } from 'gatsby'
import Nav from '@/components/nav'
import SocialNav from '@/components/social-nav'

import tivLogo from '@/images/tiv-logo.svg'

export default function Footer (props) {
  const { data } = props

  return (
    <footer className="relative bg-gray-dark text-white/50">
      <section className="py-4 lg:py-16 mb-1 border-t border-gray-800/80">
        <div className="container flex flex-col lg:grid grid-cols-3 justify-between items-center gap-4 lg:gap-10">
          <Link to="/" className="justify-self-center">
            <img
              src={tivLogo}
              width={119}
              height={57}
              alt="Tiv"
              className="h-12 lg:h-auto"
            />
          </Link>
          <Nav
            links={data.primaryNav.links}
            className="order-first gap-5 text-lg"
          />
          <SocialNav
            links={data.socialNav.links}
            className="justify-self-end gap-5 text-lg"
          />
        </div>
      </section>

      <section className="pt-4 pb-7 md:py-2 border-t border-gray-800/80">
        <div className="container flex flex-col md:grid grid-cols-3 items-center gap-4">
          <Nav
            links={data.secondaryNav.links}
            className="md:col-start-3 lg:col-start-2 lg:justify-self-center md:order-last gap-6 md:gap-12 text-[15px]"
          />
          <p className="text-[13px]">{data.legalText}</p>
        </div>
      </section>
    </footer>
  )
}
