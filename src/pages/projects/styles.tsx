import styled from "styled-components";

export const Container = styled.div`
    background-color: #FFFFFF;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px 15px 20px 15px;
    height: 100%;

    div:nth-child(-n+3) {
        margin-bottom: 15px;
    }
`;

export const Project = styled.div`
    background-color: grey;
    border-radius: 5px;
    cursor: pointer;
    height: 620px;
    width: 49.6%;
`;

export const ItemTop = styled.div `
    padding-top: 65px;
    height: 33%;
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;

    h2 {
        font-size: 40px;
        margin: 0px;
    }

    p {
        margin-top: 15px;
        font-size: 21px;
        line-height: 1.381;
        font-weight: 400;
        letter-spacing: .011em;
        font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
    }
`;

export const ItemBottom = styled.div `
    height: 54%;
`;

export const Video = styled.video`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;