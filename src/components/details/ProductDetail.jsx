import { Box, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material'
import React from 'react';
import { LocalOffer as Badge } from '@mui/icons-material';
import styled from '@emotion/styled';

const SmallText = styled(Box)`
&>p{
    font-size:14px;
    margin-top:10px;
    vertical-align:baseline;
}
`;
const StyleBdge = styled(Badge)`
margin-right:10px;
color:#00CC00;
font-size:20px;
`;
const ColumnText = styled(TableRow)`
font-size:13px;
vertical-align:baseline;
& >td{
    font-size:14px;
    margin-top:10px;
    border:none;
}
`;

const ProductDetail = ({ product }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000))
    return (
        <>   <Typography style={{ fontSize: 28 }}>
            {product.title && product.title.shortTitle ? product.title.shortTitle:""}
        </Typography>
            <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}> 8 Rating & 1 Reviews
                <Box component='span' >
                    <img src={fassured} alt='img' style={{ width: 77, marginLeft: 20 }} />
                </Box>
            </Typography>
            <Typography>
                <Box component='span' style={{ fontSize: 28 }}>₹{product && product.price && product.price.cost ?product.price.cost:""}</Box>&nbsp;&nbsp;&nbsp;
                <Box component='span' style={{ color: '#878787' }}><strike>₹{product && product.price && product.price.mrp ?product.price.mrp:""}</strike></Box>&nbsp;&nbsp;
                <Box component='span' style={{ color: '#388E3C', }}>{product && product.price && product.price.discount ?product.price.discount:""}</Box>&nbsp;&nbsp;&nbsp;
            </Typography>
            <Typography>Available offers</Typography>
            <SmallText>
                <Typography><StyleBdge /> Partner OfferBuy this product and get upto ₹500 off</Typography>
                <Typography><StyleBdge />Bank Offer10% Instant Discount on ICICI Bank Credit Card, up to ₹1250 on orders of ₹5,000 and above T&C</Typography>
                <Typography><StyleBdge />Bank Offer10% Instant Discount on Axis Bank Credit Card, up to ₹1250, on orders of ₹5,000 and above T&C</Typography>
                <Typography><StyleBdge />Bank Offer5% off on Flipkart Axis Bank Credit Card, up to ₹625, on orders of ₹5,000 and aboveT&C</Typography>
                <Typography><StyleBdge />Special PriceGet extra 10% off (price inclusive of cashback/coupon)T&</Typography>
                <Typography><StyleBdge />Get Extra 10% Off on Combo Purchase with Select SoundbarsT&</Typography>
                <Typography><StyleBdge />Partner OfferSign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹20,000*Know Mor</Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>Delivery By {date.toDateString()} | ₹60</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                        <TableCell style={{ color: '#878787' }}>No Warranty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                        <TableCell>
                            <Box component='span' style={{ color: '#2874f0' }}>SuperComNet</Box>
                            <Typography>GST invoice avilable</Typography>
                            <Typography>View more seller starting from ₹{product && product.price && product.price.cost ?product.price.cost:""}</Typography>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell colSpan={2}>
                            <img src={adURL} style={{ width: 300 }} alt='super coin' />
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Description</TableCell>
                        <TableCell style={{ color: '#878787' }}>{product && product.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
        </>

    )
}

export default ProductDetail