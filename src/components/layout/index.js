import { graphql, useStaticQuery, withPrefix } from 'gatsby'
import favicon from '../../images/favicon.ico'
import Helmet from 'react-helmet'
import Header from '@/components/header'
import Footer from '@/components/footer'

import './global.css'

const headerFooterQuery = graphql`
  query HeaderFooterQuery {
    contentfulMenu {
      primaryNav {
        links {
          label
          url
        }
      }
      secondaryNavs {
        id
        links {
          label
          url
        }
      }
      socialNav {
        links {
          label
          url
        }
      }
      joinDescription {
        joinDescription
      }
      joinButtonLabel
    }

    contentfulTicker {
      showTicker
      text
    }

    contentfulFooter {
      primaryNav {
        links {
          label
          url
        }
      }
      secondaryNav {
        links {
          label
          url
        }
      }
      socialNav {
        links {
          label
          url
        }
      }
      legalText
      tinyText {
        childMdx {
          body
        }
      }
    }
  }
`

export default function Layout(props) {
  const { currentPath, children } = props
  const data = useStaticQuery(headerFooterQuery)

  return (
    <>
      <Helmet>
        <link rel="icon" href={favicon} />

        {/* Global site tag (gtag.js) - Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CMS10WR867"
        />
        <script src={withPrefix('ga.js')} type="text/javascript" />
      </Helmet>
      <Header
        data={data.contentfulMenu}
        currentPath={currentPath}
        ticker={data.contentfulTicker}
      />
      <div className="min-h-screen">{children}</div>
      <Footer data={data.contentfulFooter} />
    </>
  )
}
