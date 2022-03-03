import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import Menu from './Menu';

const StyledRightNav = styled.div`
    @media (max-width: 768px) {
 
    padding-top: 3.5rem;
    justify-content:flex-start;
    flex-direction: column;
    gap: 20px;
    background-color: #a5a5a5a4;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width:200px;
}
`;


const RightNav = () => {
    return (<>

        <StyledRightNav>
            <Menu />
        </StyledRightNav>
        </>
    );
};

export default RightNav;