import styled from 'styled-components';

export const Ul = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0px;
    position: fixed;
    right: 80px;
    height: 80px;
    list-style-type: none;
    margin: 0px;
    width: 230px;
    z-index: 999;

    li {
        color: #FFFFFF;
        cursor: pointer;
    }

    .active {
        border-bottom: 1px solid #FFFFFF;
        font-size: 18px;
        transition: font-size 0.1s;
    }
`;