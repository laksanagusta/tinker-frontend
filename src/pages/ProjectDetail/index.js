import Navbar from '../../components/molecules/Navbar'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { getProjectDetails } from 'config/redux/action/Product'
import ListProductContent from 'components/molecules/ListProductContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HtmlParser from 'react-html-parser';
import Footer from 'components/molecules/Footer';

const ProjectDetail = () => {
    const dispatch = useDispatch()
    const [product, setProduct] = useState([])
    const {productId} = useParams()
    const [productContent, setProductContent] = useState([])
    const [productTech, setProductTech] = useState([])
    const s3url = useSelector((state) => state.s3url)

    useEffect(() => {
        const getProductDetails = async () => {
            const products = await dispatch(getProjectDetails({productId}));
            setProduct(products)
            setProductContent(products.descriptionId)
            setProductTech(products.featureId)
        }
        getProductDetails()
    }, [dispatch, productId])

    return (
        <>
            <Navbar activePage="projectDetail"/>
            <section className="main">
                <div className="container py-5">
                    <div className="row mb-5">
                        <div className="col-md-3">
                            <h5 className="fw-bold" style={{color:'BurlyWood'}}>Tools</h5>
                            <div className="d-flex flex-wrap mb-3">
                                {productTech.map((item, index) => {
                                    const iconName = item.iconName.split("-");

                                    return <div key={item._id} className="bd-highlight text-secondary" style={{paddingRight:20}}><FontAwesomeIcon icon={[iconName[0], iconName[1]]}/> {item.name}</div>
                                })}
                            </div>
                            <h5  className="fw-bold" style={{color:'BurlyWood '}}>Client</h5>
                            <p className="text-secondary">{product.client}</p>
                            <h5  className="fw-bold" style={{color:'BurlyWood '}}>Duration</h5>
                            <p className="text-secondary">{product.duration}</p>
                        </div>
                        <div className="col-md-9">
                            <h4  className="fw-bold" style={{color:'BurlyWood '}}>Brief</h4>
                            <div className="text-secondary">{HtmlParser(product.description)}</div>
                        </div>
                    </div>
                    {productContent.map((item, index) => {
                        return <ListProductContent key={item._id} position={item.position} title={item.title} image={`${s3url}${item.imageUrl}`} description={item.description}/>
                    })}
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default ProjectDetail;
