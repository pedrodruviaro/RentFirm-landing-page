import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    position: fixed;
    max-width: 100vw;
    width: 100%;
    left: 0;
    top: 0;
    background-color: transparent;

    transition: background-color 200ms ease-in-out, box-shadow 250ms ease-in-out;

    ${(props) =>
        props.active &&
        css`
            box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
            background-color: #fff;
        `}
`;

export const Container = styled.header`
    height: 4rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 68.75rem;
    padding-inline: 1.5rem;
    margin-inline: auto;

    @media (min-width: 40rem) {
        padding-inline: 2rem;
    }

    @media (min-width: 55rem) {
        padding-inline: 2.5rem;
    }

    @media (min-width: 63rem) {
        display: grid;
        grid-template-columns: max-content 1fr;

        span {
            margin-right: 4rem;
        }

        > div {
            display: none;
        }
    }
`;

export const Hamburger = styled.div`
    display: grid;
    gap: 5px;
    cursor: pointer;
    justify-items: end;

    &:hover,
    &:focus {
        outline: 1px solid ${(props) => props.theme.medium};
        outline-offset: 2px;
    }

    &::before,
    &::after {
        content: "";
        display: block;
        background-color: ${(props) => props.theme.accentDark};
        width: 1.8rem;
        height: 3px;
        transition: width 200ms ease-in-out;
    }

    span {
        display: block;
        background-color: ${(props) => props.theme.accentDark};
        width: 1.8rem;
        height: 3px;
        transition: width 200ms ease-in-out;
    }

    ${(props) =>
        props.active &&
        css`
            span {
                width: 1.2rem;
            }

            &::after {
                width: 0.6rem;
            }
        `}
`;

export const Navbar = styled.section`
    display: grid;
    grid-template-rows: min-content 1fr;
    gap: 4rem;

    position: fixed;
    top: 4rem;
    right: 0;
    bottom: 0;

    background-color: ${(props) => props.theme.accentDark};
    z-index: 999;
    padding: 1rem;

    transition: transform 200ms linear;
    transform: translateX(100%);

    nav {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        a {
            color: ${(props) => props.theme.light};

            font-size: 1.275rem;
        }
    }

    @media (min-width: 63rem) {
        position: initial;
        background-color: transparent;

        display: flex;
        align-items: center;

        padding: 0;
        justify-content: space-between;

        transform: none;

        nav {
            flex-direction: row;
            gap: 1.85rem;

            a {
                color: #4f5361;
                font-size: 1rem;
            }
        }

        div {
            display: flex;
            gap: 1rem;
            align-items: center;

            button:first-child {
                color: ${(props) => props.theme.dark};
                background-color: transparent;
            }
        }
    }

    ${(props) =>
        props.active &&
        css`
            transform: translateX(0);
        `}
`;
