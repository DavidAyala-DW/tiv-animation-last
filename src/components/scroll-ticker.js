import classNames from 'classnames'
import { useState, useEffect, useRef } from 'react'
import { useWindowScroll, useWindowSize } from 'react-use'

export default function ScrollTicker(props) {
  const { children, className } = props
  const [offsetX, setOffsetX] = useState(0)
  const ref = useRef()
  const { height: windowHeight } = useWindowSize()
  const { y: windowScrollY } = useWindowScroll()

  useEffect(() => {
    const distaceFromTop = ref.current.getBoundingClientRect().top

    setOffsetX((distaceFromTop / windowHeight) * 100 - 100)
  }, [windowHeight, windowScrollY])

  return (
    <div
      ref={ref}
      className={classNames(
        'overflow-hidden bg-orange font-medium text-5xl md:text-6xl lg:text-[120px] lg:text-stroke-white lg:text-stroke-2 lg:!text-orange uppercase leading-[1.2] whitespace-nowrap',
        className
      )}
    >
      <div
        className="h-[1.3em] pb-[0.15em] pl-[1.2em] flex space-x-[1.2em] items-center will-change-transform motion-reduce:!transform-none"
        style={{ transform: `translate3d(${offsetX}%, 0, 0)` }}
      >
        <span>{children}</span>
        {Array(2).fill(<span aria-hidden="true">{children}</span>)}
      </div>
    </div>
  )
}
