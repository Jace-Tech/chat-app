import Container from "../container/Container"
import "./header.css"

const Header = () => {
    return (
        <div className="header">
            <Container size={"xl"}>
                <div className={"flex header-nav"}>
                    <a href={"/"} className={"header-logo "}>DevChat.</a>

                    <ul className={"header-menu"}>  
                        <li className="header-menu-item">
                            <button href="">Login</button>
                        </li>

                        <li className="header-menu-item">
                            <button href="" className={"outlined"}>Register</button>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default Header