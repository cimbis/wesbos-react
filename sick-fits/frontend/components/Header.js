import Link from "next/link";
import styled from "styled-components";

import Nav from "./Nav";


const Logo = styled.h1`
    position: relative;
    margin-left: 2rem;
    background: red;
    font-size: 4rem;
    transform: skew(-7deg);
    z-index: 2;
    a {
        padding: 0.5rem 1rem;
        color: white;
        text-decoration: none;
        text-transform: uppercase;
    }
`;

export default function Header() {
    return (
        <header>
            <div className="bar">
                <Logo>
                    <Link href={ "/" }>Sick Fits</Link>
                </Logo>
            </div>

            <div className="sub-bar"></div>

            <Nav/>
        </header>
    );
}
