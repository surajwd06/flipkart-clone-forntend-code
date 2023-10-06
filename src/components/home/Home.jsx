import { Box} from "@mui/material";
import styled from "@emotion/styled";
import Banner from "./Banner";
import NavBar from "./Navbar";
import { useEffect } from "react";
import { getProducts } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import Slide from "./Slide";
import MidSlide from "./MidSide";
import MidSection from "./MidSection";

const Component = styled(Box)`
padding:10px 10px;
background-color:#f2f2f2;
`;
const Home = () => {

    const { products } = useSelector(state => state.getProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    return (
        <>
            <NavBar />
            <Component>
                <Banner />
                <MidSlide products={products} title="Deal of the Day" timer={true}/>
                <MidSection/>
                <Slide products={products} title="Discount for You" timer={false}/>
                <Slide products={products} title="Suggesting Item" timer={false}/>
                <Slide products={products} title="Top selection" timer={false}/>
                <Slide products={products} title="Trending Offers" timer={false}/>
                <Slide products={products} title="Sessigns Top Picks" timer={false}/>
                <Slide products={products} title="Top Deals on Accesseries" timer={false}/>
            </Component>
        </>
    )
}
export default Home;