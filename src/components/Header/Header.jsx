import "./Header.css"

function Header() {
  return (
    <>
    <header>
      <div className="header-left">
        <h1 className="TaskFlow">Taskflow</h1>
      </div>
      <div className="header-right">
        <h3>userName</h3>
        <div className="useravatar">
          <img src="https://as1.ftcdn.net/v2/jpg/00/64/67/52/1000_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.jpg" alt="User Avatar" />
        </div>
      </div>
    </header>
    <hr className="sidebar-divider" />
    </>
  )
}

export default Header;