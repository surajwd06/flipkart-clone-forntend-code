import { Grid, styled } from '@mui/material';
import { ImageURL } from '../../constent/data';
import React from 'react';

const Wrapper = styled(Grid)`
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
`;

const Image = styled('img')(({ theme }) => ({
    display: 'flex',
    marginTop: 20,
    justifyContent: 'space-between',
    width: '100%',
    [theme.breakpoints.down('md')]: {
        objectFit: 'cover',
        height: 120
    }
}));

const MidSection = () => {
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (
        <React.Fragment> <Wrapper container={true} lg={12} sm={12} md={12} xs={12} >
            {
                ImageURL && ImageURL.map((image, i) => (
                    <Grid key={i} item={true} lg={4} md={4} sm={12} xs={12}>
                        <img src={image} style={{ width: '100%' }} />
                    </Grid>
                ))
            }
        </Wrapper>
            <Image src={url} />
        </React.Fragment>
    )
}

export default MidSection;