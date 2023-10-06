
import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { addEllipsis } from '../utils/common-utils';
import ButtonGroup from './ButtonGroup';
import { removeFromCard } from '../redux/actions/cardActions';
import { useDispatch } from 'react-redux';

const Component = styled(Box)`
    border-top: 1px solid #f0f0f0;
    border-radius: 0px;
    display: flex;
    background:#ffffff;
`;
const LeftComponent = styled(Box)`
    margin: 20px; 
    display: flex;
    flex-direction: column;
`;
const SmallText = styled(Typography)`
    color: #878787;
    font-size: 14px;
    margin-top: 10px;
`;
const Cost = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
`;

const MRP = styled(Typography)`
    color: #878787;
`;

const Discount = styled(Typography)`
    color: #388E3C;
`;

const Remove = styled(Button)`
    margin-top: 20px;
    font-size: 16px;
`;
const CartItem = ({ item }) => {

  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

  const dispatch=useDispatch()
  const removeItemFromCart=(id)=>{
    dispatch(removeFromCard(id))
  }
  return (
    <Component>
      <LeftComponent>
        <img src={item.url} alt='product' style={{width:110}}/>
        <ButtonGroup />
      </LeftComponent>
      <Box style={{margin:20}}>
        <Typography>{addEllipsis(item.title.longTitle) }</Typography>
        <SmallText>Seller:RetailNet
          <Box component='span'>
            <img src={fassured} alt='img' style={{ width: 50, marginLeft: 10 }} />
            
          </Box>
        </SmallText>
        <Typography style={{ margin: '20px 0' }}>
          <Cost component="span">₹{item.price.cost}</Cost>&nbsp;&nbsp;&nbsp;
          <MRP component="span"><strike>₹{item.price.mrp}</strike></MRP>&nbsp;&nbsp;&nbsp;
          <Discount component="span">{item.price.discount} off</Discount>
        </Typography>
        <Remove onClick={()=>removeItemFromCart(item.id)}>Remove</Remove>
      </Box>
    </Component>
  )
}

export default CartItem