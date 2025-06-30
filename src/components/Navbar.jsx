import './Navbar.scss';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">ToshibaCommerce</div>
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#body">Products</a></li>
        <li><a href="#footer">Contact</a></li>
      </ul>
    </nav>
  );
}
