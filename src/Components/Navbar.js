const Navbar = () => {
    const spacerStyle = {
      marginRight: "200px", // Adjust the margin value as needed
    };

    const spacerStyle1 = {
        marginRight: "40px", // Adjust the margin value as needed
      };

    const linkStyle = {
        color: "black", // Change font color to black
    };

    const brandStyle = {
        fontSize: "24px", // Adjust the font size as needed
        fontWeight: "bold", // Make it bold
    };
    
    const navItemStyle = {
        fontWeight: "bold", // Make nav items bold
      };

    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#" style={brandStyle}>
              COST ESTIMATOR
              <span style={spacerStyle}></span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#" style={{ ...linkStyle, ...navItemStyle }}>
                    Our Services
                    <span style={spacerStyle1}></span>
                  </a>
                </li>
  
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#" style={{ ...linkStyle, ...navItemStyle }}>
                    Technologies
                    <span style={spacerStyle1}></span>
                  </a>
                </li>
  
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#" style={{ ...linkStyle, ...navItemStyle }}>
                    Expertise
                    <span style={spacerStyle1}></span>
                  </a>
                </li>
  
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#" style={{ ...linkStyle, ...navItemStyle }}>
                    Case Studies
                    <span style={spacerStyle1}></span>
                  </a>
                </li>
  
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#" style={{ ...linkStyle, ...navItemStyle }}>
                    Careers
                    <span style={spacerStyle1}></span>
                  </a>
                </li>
  
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#" style={{ ...linkStyle, ...navItemStyle }}>
                    Resources
                    <span style={spacerStyle1}></span>
                  </a>
                </li>
  
                <li className="nav-item">
                  <button type="button" className="btn btn-primary" >
                    Contact us
                  </button>
                </li>
  
                
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  };
  
  export default Navbar;
  










