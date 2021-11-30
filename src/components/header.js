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
        <div className="container mx-auto">
          <Link to="/" className="pointer-events-auto">
            <img src={tivLogo} alt="Tiv" />
          </Link>
        </div>

        <button
          type="button"
          className="absolute top-6 right-[70px] z-50 flex items-center gap-4 text-black hover:text-gray-900 pointer-events-auto"
          onClick={toggleMenu}
        >
          <span
            className="text-[9px] font-bold uppercase text-white"
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
            <span className="both-span-full flex justify-center text-orange transform scale-75">
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

        <div className="z-10 container mx-auto flex">
          <div className="self-center">
            <p className="max-w-xs text-white/50">
              Tiv is the only debit card that rewards you for time spent playing
              your favorite games. No matter your skill level.
            </p>
            <button
              type="button"
              className="button button-lg button-outline mt-7"
            >
              Join the Waitlist
            </button>
          </div>

          <div className="flex-grow ml-[20%] flex flex-col">
            <nav className="flex-grow flex flex-col justify-center">
              {mainMenuItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="flex items-center gap-5"
                >
                  <span
                    className="text-stroke-white text-4xl font-black"
                    aria-hidden="true"
                  >
                    0{index + 1}
                  </span>
                  <span
                    className={classNames(
                      'px-2 pb-4 text-8xl font-medium leading-none hover:text-stroke-orange',
                      item.path === currentPath && 'corners'
                    )}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>

            <div className="flex justify-between text-white/40 pl-20 pb-2">
              <nav className="flex gap-4">
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

              <nav className="flex gap-4">
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
        </div>
      </section>
    </>
  )
}
