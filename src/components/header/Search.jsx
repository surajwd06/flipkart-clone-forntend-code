import { Box, InputBase, List, ListItem, styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions/productAction';
import { Link } from 'react-router-dom';
const SearchContainer = styled(Box)`
background:#f0f5ff;
width:38%;
border-radius:2px;
margin-left:10px;
display:flex;
`;

const InputSearchBase = styled(InputBase)`
width: 100%;
padding: 0 16px;
border-radius: 2px 0 0 2px;
border: 0;
outline: 0 none;
font-size: 14px;
height: 36px;

`;

const SearchIconWrapper = styled(Box)`
   color:blue;
   padding: 5px 10px;
   display:flex;

`;
const ListWrapper = styled(List)`
position:absolute;
background:#ffffff;
color:#000000;
margin-top:36px;
`;
const Search = () => {
    const [text, setText] = useState('');
    const { products } = useSelector(state => state.getProducts);
    const dispatch = useDispatch()
    const getText = (text) => {
        setText(text)
    }
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    return (
        <SearchContainer>
            <InputSearchBase
                placeholder="Search for products, brands and more"
                onChange={(e) => getText(e.target.value)}
                value={text}
            />
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            {
                text && <ListWrapper>
                    {products && products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())) && products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => {
                        return <ListItem key={product.id} >
                            <Link
                            to={`/product/${product.id}`}
                            onClick={()=>setText('')}
                            style={{textDecoration:'none',color:'inherit'}}
                            >
                                {product.title.longTitle}
                            </Link>
                        </ListItem>
                    })
                    }
                </ListWrapper>
            }
        </SearchContainer>
    )
}
export default Search;