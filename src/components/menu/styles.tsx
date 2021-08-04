import styled from 'styled-components';

export const Ul = styled.ul`
    background: rgba(0,0,0,0.8);
    backdrop-filter: saturate(180%) blur(20px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px;
    position: fixed;
    height: 44px;
    width: 100%;
    list-style-type: none;
    margin: 0px;
    z-index: 999;

    li {
        color: #f5f5f7;
        cursor: pointer;
        margin-right: 44px;
        opacity: .8;
    }

    

    li:hover {
        opacity: 1;
        webkit-transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
        transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
    }
`;