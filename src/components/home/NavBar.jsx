import {Box, Typography } from '@mui/material';
import { navData } from '../../constent/data'
import styled from '@emotion/styled';

const Component = styled(Box)(({ theme }) => ({
    display: 'flex',
    margin: '55px 138px 0 138px',
    justifyContent: 'space-between',
    overflow:'overlay',
    // [theme.breakpoints.down('lg')]: {
    //     margin:0
    // }
}));

const Container = styled(Box)`
padding:12px 8px;
text-align:center;
`;
const Text = styled(Typography)`
font-size:14px;
font-weight:600;
font-family:inherit;

`;
const NavBar = () => {
    return (
        <Box style={{  background:'#ffffff'}}>
        <Component>
            {
                navData && navData.map((data, i) => {
                    const { url, text } = data;
                    return (
                        <Container key={i}>
                            <img src={url} alt='nav' style={{ width: 64 }} />
                            <Text>{text}</Text>
                        </Container>
                    )
                })

            }
        </Component>
        </Box>
    )
}
export default NavBar;