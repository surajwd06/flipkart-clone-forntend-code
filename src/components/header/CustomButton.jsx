import React, { useContext, useState } from 'react';
import { Badge, Box, Button, Typography, styled } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogDialog from '../login/LogDialog';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Wrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    margin: '0 3% 0 auto',
    '& > *': {
        marginRight: '20px !important' ,
        color: '#000000',
        fontSize: '14px',
        alignItem: 'center',
        fontWeight:600,
    },
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
    }));


const Container = styled(Link)(({ theme }) => ({
    display: 'flex',
    textDecoration:'none',
    color:'initial',
    [theme.breakpoints.down('md')]:{
        display:"block"
    }

}))

const LoginButton = styled(Button)`
color:#000000;
text-transform:none;
padding:9px 40px;
border-radius:2px;
box-shadow:none;
height:32px;
font-weight:600
`;
const CustomButton = () => {
    const [hideval, showval] = useState(false);

    const { account, setAccount } = useContext(DataContext);
    const {cartItems}=useSelector(state=>state.cart)
 
    return (
        <Wrapper >
            {
                account ? <Profile account={account} setAccount={setAccount} /> : <LoginButton variant='contained' onClick={() => showval(!false)}>Login</LoginButton>
            }
            <Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>
            <Typography style={{ marginTop: 3, width: 135 }}>More</Typography>
            <Container to='/cart'>
            <Badge badgeContent={cartItems?.length} color="secondary">
                <ShoppingCartIcon />
                </Badge>
                <Typography style={{marginLeft:'10px'}}>Cart</Typography>
            </Container>
            <LogDialog hideval={hideval} showval={showval} />
        </Wrapper>
    )
}
export default CustomButton;