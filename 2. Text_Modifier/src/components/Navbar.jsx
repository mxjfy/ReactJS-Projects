
const Navbar = (props) => {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} px-5`}>
            <div className="container-fluid">
                <a href="#" className="navbar-brand">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        
                    </ul>
                    <div className="form-check form-switch">
                        <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                        <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} role="button" htmlFor="flexSwitchCheckChecked"><strong>{props.mode === 'light' ? 'Dark' : 'Light'} Mode</strong></label>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;