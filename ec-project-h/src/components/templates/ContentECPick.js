import React from 'react';
import styled from 'styled-components'
import ECPICK from '../atoms/TextForMiddle';

const Block=styled.div`
    display:flex;
    background: #F2F2F2;
    width:100%;
    height:32%;
`

const EmptyBlock=styled.div`
    width:22%;
`

const ECPickBlock = styled.div`
    margin-top:100px;
  width:75%;
`;

function ContentECPick(){
    return (
    <Block>
        <EmptyBlock></EmptyBlock>
        <ECPickBlock>
            <ECPICK>EC PICK</ECPICK>
        </ECPickBlock>
    </Block>
    );
}

export default ContentECPick;