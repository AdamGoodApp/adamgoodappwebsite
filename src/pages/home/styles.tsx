import styled from 'styled-components';

export const Container = styled.div`
    background-color: #000000;
    height: 100vh;
    width: 100vw;
`;

export const IFrame = styled.iframe`
    height: 100%;
    width: 100%;
`;

export const Title = styled.div`
    color: #FFFFFF;
    width: 200px;
    height: 130px;
    position: absolute;
    bottom: 80px;
    left: 80px;
    z-index: 99;

    h1 {
        margin-top: 0px;
    }
`;