import { AppBar, Box, Drawer, IconButton, ListItem, Toolbar, Typography, styled } from '@mui/material';
// import { Menu } from '@mui/icons-material'
// component
import Search from './Search';
import CustomButton from './CustomButton';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const StyledHeader = styled(AppBar)`
background:#ffffff;
height:55px;
`;

const Component = styled(Link)`
line-height:5px;
margin-left:8%;
text-decoration:none;
color:inherit;
`;
const SubHeading = styled(Typography)`
padding-left: 83px;
color:#9e9e9e;
font-size:12px;
font-style:italic;
font-weight:600;
`;
const PlusImage = styled('img')({
    padding: 4,
    width: 10,
    height: 10
})

const CustomButtonWrapper = styled(Box)(({ theme }) => ({
    margin: '0 5% 0 auto',
    [theme.breakpoints.down('sm')]:{
        display:'none',
    }
}))

const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('md')]: {
        display: 'block',
    }
}))

const List = () => {
    return (
        <Box style={{width:200}} onClick={handleClouse}>
            <List>
                <ListItem button>
                    <CustomButton />
                </ListItem>
            </List>
        </Box>
    )
}

const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/flipkart-095e08.svg'
    const subURL = 'https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/plus-brand-bc165b.svg'
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClouse = () => {
        setOpen(false)
    }


    return (
        <>
            <StyledHeader>
                <Toolbar style={{ minHeight: '55px' }}>
                    <MenuButton onClick={handleOpen}>
                       {()=>List()}
                    </MenuButton>
                    <Drawer open={open} onClose={handleClouse} ></Drawer>
                    <Component to='/'>
                        <img src={logoURL} alt='' />
                        <Box style={{ display: 'flex' }}>
                            <SubHeading>Join&nbsp;
                                <Box component='span' style={{ color: "#ffc200" }}>Plus</Box>
                            </SubHeading>
                            <PlusImage src={subURL} alt='subLogo' />
                        </Box>
                    </Component>
                    <Search />
                    <CustomButtonWrapper>
                        <CustomButton />
                    </CustomButtonWrapper>
                </Toolbar>
            </StyledHeader>
        </>
    )
}
export default Header;