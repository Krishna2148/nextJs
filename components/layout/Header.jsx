import Link from "next/link";

const Header = () => {
    return (<>
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" href="#">Home</Link>
        <Link className="nav-link" href="#">Features</Link>
        <Link className="nav-link" href="#">Pricing</Link>
        {/* <Link className="nav-link disabled">Disabled</Link> */}
      </div>
    </div>
  </div>
</nav>
       
    </>);
}

export default Header;