import Link from 'next/link'

const Header = () => (
  <div className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container">
      <div className="row">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li>
          <Link href="/about">
              <a className="nav-link">About</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default Header