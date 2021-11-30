import Header from '@/components/header'
import Footer from '@/components/footer'

import './global.css'

export default function Layout (props) {
  const { currentPath, children } = props

  return (
    <>
      <Header currentPath={currentPath} />
      <div>{children}</div>
      <Footer />
    </>
  )
}
