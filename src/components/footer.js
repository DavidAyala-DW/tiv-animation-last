import { Link } from 'gatsby'

import tivLogo from '@/images/tiv-logo.svg'

const mainMenuItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Partners', path: '/partners' },
  { label: 'Contact', path: '/contact' }
]

export default function Header () {
  return (
    <footer className="relative bg-gray-dark text-white/50">
      <section className="py-16 mb-1 border-t border-gray-800/80">
        <div className="container grid grid-cols-3 justify-between items-center">
          <Link to="/" className="justify-self-center">
            <img src={tivLogo} width={119} height={57} alt="Tiv" />
          </Link>

          <nav className="order-first flex gap-5 text-lg">
            {mainMenuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="hover:text-white/80"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <nav className="justify-self-end flex gap-5 text-lg">
            {mainMenuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="hover:text-white/80"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="py-2 border-t border-gray-800/80">
        <div className="container grid grid-cols-3 items-center">
          <p className="text-[13px]">All rights reserved © 2021 Tiv INC.</p>
          <nav className="justify-self-center flex gap-12 text-[15px]">
            {mainMenuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="hover:text-white/80"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </footer>
  )
}
