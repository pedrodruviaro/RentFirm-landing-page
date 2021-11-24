import React, { useEffect, useState } from "react";
import { Container, Wrapper } from "./styles.jsx";

export const Header = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        function handleScroll(e) {
            if (window.scrollY >= 30) {
                setActive(true);
            } else {
                setActive(false);
            }
        }
        window.document.addEventListener("scroll", handleScroll);

        return () => {
            window.document.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Wrapper active={active}>
            <Container>header</Container>
        </Wrapper>
    );
};
