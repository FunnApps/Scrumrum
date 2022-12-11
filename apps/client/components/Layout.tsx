import Header from './Header'
import Sidebar from './Sidebar'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="d-flex">
        <Sidebar />
        <main className="main">{children}</main>
      </div>
    </>
  )
}

export default Layout
