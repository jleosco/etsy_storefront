import { useContext } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { AuthContext } from "../providers/AuthProvider"
import Button from '@mui/material/Button';

const Layout = () => {
  const navigate = useNavigate()
  const {authenticated, handleLogout} = useContext(AuthContext)
  return (
    <div>
      <div style={{ border: '1px solid black'}}>
        <Button>
          <Link to='/'>Home</Link>
        </Button>
        <Button>
          <Link to='/products'>Products</Link>
        </Button>
        <Button>
          <Link to='/categories'>Categories</Link>
        </Button>
    </div>
    <Outlet />
  </div>
  )
}

export default Layout;