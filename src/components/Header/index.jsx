import React, { useEffect, useState } from "react";
import { Container, Hamburger, Navbar, Wrapper } from "./styles.jsx";
import { Button } from "../Button";

export const Header = () => {
    const [headerActive, setHeaderActive] = useState(false);
    const [navbarOpen, setNavbarOpen] = useState(false);

    useEffect(() => {
        function handleScroll(e) {
            if (window.scrollY >= 30) {
                setHeaderActive(true);
            } else {
                setHeaderActive(false);
            }
        }
        window.document.addEventListener("scroll", handleScroll);

        return () => {
            window.document.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Wrapper>
            <Container active={headerActive}>
                <span>
                    <img src="/assets/images/logo.svg" alt="Besnik Rent Firm" />
                </span>

                <Navbar active={navbarOpen}>
                    <nav>
                        <a href="/">Home</a>
                        <a href="/">Fratures</a>
                        <a href="/">Service</a>
                        <a href="/">Listed</a>
                        <a href="/">Contact</a>
                    </nav>

                    <div>
                        <Button secondary>Sign up</Button>
                        <Button>Register</Button>
                    </div>
                </Navbar>

                <Hamburger
                    active={navbarOpen}
                    onClick={() => setNavbarOpen(!navbarOpen)}
                >
                    <span></span>
                </Hamburger>
            </Container>
        </Wrapper>
    );
};
