import styled from "styled-components";

export const Container = styled.div`
    padding: 80px;
    height: 100vh;
    color: #FFFFFF;

    video {
        object-fit: cover;
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -99;
    }

    a:nth-child(-n+4) {
        margin-right: 16px;
    }

    a img {
        width: 30px;
    }
`;