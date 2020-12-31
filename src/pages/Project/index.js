import CardProject from 'components/molecules/CardProject'
import Navbar from '../../components/molecules/Navbar'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from 'config/redux/action/Product'
import Footer from 'components/molecules/Footer';

const Project = () => {
    const dispatch = useDispatch()
    const [product, setProduct] = useState([])
    const s3url = useSelector((state) => state.s3url)
    const isLoading = useSelector((state) => state.isLoading)

    useEffect(() => {
        const getAllProducts = async () => {
            const products = await dispatch(getProducts({limit:500}));
            setProduct(products);
        }
        getAllProducts();
    }, [dispatch])

    return (
        <>
            <Navbar activePage="project"/>
                <section className="main">
                    <div className="container-sm py-5">
                        <div className="row">
                            {product.map((item) => {
                                return <CardProject key={item._id} link={"/projectDetail/"+item._id} image={`${s3url}${item.imageId[0].imageUrl}`} name={item.title} brand={item.brand}/>
                            })}
                        </div>
                    </div>
                </section>
            <Footer/>
        </>
    )
}

export default Project;
