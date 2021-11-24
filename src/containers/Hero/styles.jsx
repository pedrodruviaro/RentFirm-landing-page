import styled from "styled-components";
import { DefaultContainer } from "../imports";

export const Wrapper = styled.div`
    background-color: #e6f0ff;
`;

export const Container = styled(DefaultContainer)`
    border: 1px solid blue;
    margin-top: 0;

    /* min-height: 100vh; */
    padding-top: calc(4rem + 3rem);

    display: grid;
    gap: 4rem;

    span {
        color: #687690;
        font-weight: 500;
        font-size: 1.125rem;
        line-height: 1.75rem;
    }

    h1 {
        font-weight: 700;
        font-size: clamp(3rem, 3vw, 4rem);
        line-height: 3.75rem;
    }

    p {
        font-size: 1.125rem;
        line-height: 1.6;

        margin-block: 2rem;
    }

    @media (min-width: 50rem) {
        grid-template-columns: 1.35fr 1fr;
        gap: 2rem;

        > div:first-child {
            align-self: start;
            margin-top: auto;
            margin-bottom: auto;
        }

        > div:last-child {
            display: grid;
            place-items: center;
        }
    }
`;
