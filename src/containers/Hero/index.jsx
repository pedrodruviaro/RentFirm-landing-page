import React from "react";
import { Container, Wrapper } from "./styles.jsx";
import { Button } from "../imports";

export const Hero = () => {
    return (
        <Wrapper>
            <Container>
                <div>
                    <span>Welcome to Besnik Agency</span>
                    <h1>Discover a place you'll love to live.</h1>
                    <p>
                        Get the best real estate deals first, before they hit
                        the mass market! HOT FORECLOSURE DEALS with one simple
                        search
                    </p>
                    <Button>More About Us</Button>
                </div>

                <div>
                    <img
                        src="/assets/images/hero.svg"
                        alt="Welcome to Besnik Agency"
                    />
                </div>
            </Container>
        </Wrapper>
    );
};
