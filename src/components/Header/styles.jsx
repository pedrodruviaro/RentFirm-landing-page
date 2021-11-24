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

    max-width: 68.75rem;
    padding-inline: 1.5rem;
    margin-inline: auto;

    @media (min-width: 40rem) {
        padding-inline: 2rem;
    }

    @media (min-width: 55rem) {
        padding-inline: 2.5rem;
    }
`;
