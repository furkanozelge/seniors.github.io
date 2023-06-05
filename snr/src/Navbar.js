import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/project" className="site-title">
        <img src={require('./logo.png')} width="75px" alt='logo' />
        
      </Link>
      <ul>
        <CustomLink to="/project">What is Our Project?</CustomLink>
        <CustomLink to="/who-are-we">Who are We?</CustomLink>
        <CustomLink to="/reports">Reports</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
