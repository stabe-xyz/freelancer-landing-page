import Footer from './footer'
import Header from './header'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <hr />
      <Footer />
    </>
  )
}

export default Layout
