import { Link } from 'gatsby'
import Nav from '@/components/nav'
import SocialNav from '@/components/social-nav'

import tivLogo from '@/images/tiv-logo.svg'

export default function Footer (props) {
  const { data } = props

  return (
    <footer className="relative bg-gray-dark text-white/50">
      <section className="py-16 mb-1 border-t border-gray-800/80">
        <div className="container grid grid-cols-3 justify-between items-center">
          <Link to="/" className="justify-self-center">
            <img src={tivLogo} width={119} height={57} alt="Tiv" />
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

      <section className="py-2 border-t border-gray-800/80">
        <div className="container grid grid-cols-3 items-center">
          <p className="text-[13px]">{data.legalText}</p>
          <Nav
            links={data.secondaryNav.links}
            className="justify-self-center gap-12 text-[15px]"
          />
        </div>
      </section>
    </footer>
  )
}
