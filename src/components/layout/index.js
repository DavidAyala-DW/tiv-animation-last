import { graphql, useStaticQuery } from 'gatsby'
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
    }
  }
`

export default function Layout (props) {
  const { currentPath, children } = props
  const data = useStaticQuery(headerFooterQuery)

  return (
    <>
      <Header data={data.contentfulMenu} currentPath={currentPath} />
      <div>{children}</div>
      <Footer data={data.contentfulFooter} />
    </>
  )
}
