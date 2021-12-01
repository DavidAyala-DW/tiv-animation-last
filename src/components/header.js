import classNames from 'classnames'
import { Link } from 'gatsby'
import { useState } from 'react'
import { Divide as Burger } from 'hamburger-react'
import MenuHex from '@/components/svg/menu-hex.svg'

import tivLogo from '@/images/tiv-logo.svg'
import menuBg from '@/images/menu-bg.svg'

const mainMenuItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Partners', path: '/partners' },
  { label: 'Contact', path: '/contact' }
]

export default function Header (props) {
  const { currentPath } = props
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu () {
    setIsMenuOpen((val) => !val)
  }

  return (
    <>
      <header className="fixed top-0 z-50 inset-x-0 pointer-events-none flex items-center justify-between py-6">
        <div className="container flex md:block justify-center">
          <Link to="/" className="pointer-events-auto">
            <img src={tivLogo} alt="Tiv" className="h-11 md:h-10 lg:h-auto" />
          </Link>
        </div>

        <button
          type="button"
          className="absolute top-2 md:top-4 lg:top-6 right-3 md:right-[70px] z-50 flex items-center gap-4 text-black hover:text-gray-900 pointer-events-auto scale-75 md:scale-100"
          onClick={toggleMenu}
        >
          <span
            className="text-[9px] font-bold uppercase text-white sr-only md:not-sr-only"
            aria-live="polite"
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </span>
          <span className="grid items-center justify-center" aria-hidden="true">
            <MenuHex
              className={classNames(
                'both-span-full',
                isMenuOpen && 'drop-shadow-xl'
              )}
            />
            <span className="both-span-full flex justify-center text-orange scale-75">
              <Burger color="currentColor" distance="sm" toggled={isMenuOpen} />
            </span>
          </span>
        </button>
      </header>

      <section
        className={classNames(
          'fixed inset-0 z-40 h-screen flex bg-gray-dark transition-opacity',
          !isMenuOpen && 'opacity-0 pointer-events-none'
        )}
      >
        <img
          src={menuBg}
          className="absolute top-0 right-0"
          aria-hidden="true"
        />

        <div className="z-10 container flex flex-col">
          <div className="flex-grow flex flex-col lg:flex-row justify-center gap-16 lg:gap-4">
            <nav className="lg:flex-grow lg:ml-[20%] flex flex-col justify-center items-center md:items-start gap-6 md:gap-0">
              {mainMenuItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative flex items-center gap-5"
                >
                  <span
                    className="absolute md:static top-1.5 -left-1.5 md:text-stroke-white text-xs md:text-4xl font-light md:font-black"
                    aria-hidden="true"
                  >
                    0{index + 1}
                  </span>
                  <span
                    className={classNames(
                      'px-3 pb-2 md:pb-4 text-5xl md:text-8xl font-black md:font-medium leading-none hover:text-stroke-orange',
                      item.path === currentPath && 'corners'
                    )}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>

            <div className="lg:self-center hidden md:block lg:order-first">
              <p className="max-w-xs text-white/50">
                Tiv is the only debit card that rewards you for time spent
                playing your favorite games. No matter your skill level.
              </p>
              <button
                type="button"
                className="button button-lg button-outline mt-7"
              >
                Join the Waitlist
              </button>
            </div>
          </div>

          <div className="self-center flex flex-wrap justify-between gap-x-16 lg:gap-x-32 text-white/40 pb-2">
            <nav className="flex gap-8">
              {mainMenuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="py-2 hover:text-white/80"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <nav className="flex gap-8">
              {mainMenuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="py-2 hover:text-white/80"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </section>
    </>
  )
}
