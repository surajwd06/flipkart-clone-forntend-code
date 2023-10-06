import styled from '@emotion/styled'
import { Box, Button, } from '@mui/material'
import { ShoppingCart as Card, FlashOn as Flash } from '@mui/icons-material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCard } from '../redux/actions/cardActions';
import { payUsingPaytm } from '../../service/api';

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    // [theme.breakpoints.down('lg')]:{
    //     padding:0,
    // }
}));
const Image = styled('img')({
    width: '95%',
    padding: '15px'
});

const StyleButton = styled(Button)(({ theme }) => ({
    width: '46%',
    height: '50px',
    borderRidus: '2px',
    // [theme.breakpoints.down('lg')]:{
    //     width:'46%'
    // },
    // [theme.breakpoints.down('sm')]:{
    //     width:'48%'
    // }
}));

const ActionItem = ({ product }) => {

    const navigate = useNavigate();
    const dispatch=useDispatch()
    const [quantity,setQuantity]=useState(1)
    const {id}= product;
    console.log("jfahdsjhid",id)

    const addItemToCart = () => {
        dispatch(addToCard(id,quantity));
        navigate('/cart')
    }

    const buyNow=()=>{
     let response=payUsingPaytm({amount:50000, email:"dfbjkdsfjdsbjvdsjbkj"})

     let information={
        action:'',
        params:response
     }
    }
    return (
        <LeftContainer>
            <Box style={{ padding: '15px 25px', border: '1px solid #f0f0f0' }}>
                <Image src={product.detailUrl} alt='product detail' />
            </Box>
            <StyleButton variant='contained' onClick={() => addItemToCart()} style={{ marginLeft: 10, background: '#ff9f00' }}><Card /> Add to Card</StyleButton>
            <StyleButton variant='contained' onClick={()=>buyNow()} style={{ marginLeft: 10, background: '#fb541b' }}><Flash /> Buy Now</StyleButton>
        </LeftContainer>
    )
}

export default ActionItem