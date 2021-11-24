import styled, { css } from "styled-components";

export const Container = styled.button`
    font-weight: 500;
    padding: 1em 2.375em;

    border-radius: 0.75rem;

    color: ${(props) => props.theme.light};
    background-color: ${(props) => props.theme.accentDark};

    &:focus,
    &:hover {
        outline: 1px solid ${(props) => props.theme.accentDark};
        outline-offset: 1px;
    }

    ${(props) =>
        props.secondary &&
        css`
            background-color: ${(props) => props.theme.light};
            color: ${(props) => props.theme.accentDark};
        `}

    ${(props) =>
        props.outlined &&
        css`
            background-color: transparent;
            color: ${(props) => props.theme.light};
            border: 1px solid currentColor;
        `}
`;
