export default function Ticker(props) {
  const { children } = props

  return (
    <div className="py-1 overflow-hidden bg-orange font-bold text-sm lg:text-[17px] lg:leading-normal whitespace-nowrap">
      <div className="flex space-x-24 animate-ticker md:animation-duration-20 xl:animation-duration-30 motion-reduce:!animate-none">
        <span>{children}</span>
        {Array(10).fill(<span aria-hidden="true">{children}</span>)}
      </div>
    </div>
  )
}
