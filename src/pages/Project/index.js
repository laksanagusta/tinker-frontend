import CardProject from 'components/molecules/CardProject'
import Navbar from '../../components/molecules/Navbar'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from "react-router-dom";
import { getProducts } from 'config/redux/action/Product'
import Footer from 'components/molecules/Footer';

const Project = () => {
    const dispatch = useDispatch()
    const [product, setProduct] = useState([])

    useEffect(() => {
        getAllProducts()
    }, [])

    const getAllProducts = async () => {
        const products = await dispatch(getProducts({limit:500}));
        setProduct(products);
    }

    return (
        <>
            <Navbar activePage="project"/>
                <section className="main" style={{marginTop:100}}>
                    <div className="container-sm mt-5">
                        <div className="row">
                            {product.map((item) => {
                                return <CardProject link={"/projectDetail/"+item._id} image={"http://localhost:5000/"+item.imageId[0].imageUrl} name={item.title} brand={item.brand}/>
                            })}
                        </div>
                    </div>
                </section>
            <Footer/>
        </>
    )
}

export default Project;
