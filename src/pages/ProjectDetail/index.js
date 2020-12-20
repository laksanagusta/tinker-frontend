import CardProject from 'components/molecules/CardProject'
import Navbar from '../../components/molecules/Navbar'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from "react-router-dom";
import { getProjectDetails } from 'config/redux/action/Product'
import ListProductContent from 'components/molecules/ListProductContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HtmlParser from 'react-html-parser';

const ProjectDetail = () => {
    const dispatch = useDispatch()
    const [product, setProduct] = useState([])
    const {productId} = useParams()
    const [productContent, setProductContent] = useState([])
    const [productTech, setProductTech] = useState([])
    const projectDetail = useSelector((state) => state.projectDetail)

    useEffect(() => {
        getProductDetails()
        console.log(product)
    }, [])

    const getProductDetails = async () => {
        const products = await dispatch(getProjectDetails({productId}));
        setProduct(products)
        setProductContent(products.descriptionId)
        setProductTech(products.featureId)
    }

    return (
        <>
            <Navbar activePage="projectDetail"/>
            <section className="main" style={{marginTop:100}} >
                <div className="container mt-5">
                    <div className="row mb-5">
                        <div className="col-md-3">
                            <h5 className="fw-bold" style={{color:'NavajoWhite '}}>Tools</h5>
                            <div className="d-flex flex-wrap mb-3">
                                {productTech.map((item, index) => {
                                    const iconName = item.iconName.split("-");

                                    return <div className="bd-highlight" style={{paddingRight:20}}><FontAwesomeIcon icon={[iconName[0], iconName[1]]}/> {item.name}</div>
                                })}
                            </div>
                            <h5  className="fw-bold" style={{color:'NavajoWhite '}}>Client</h5>
                            <p>{product.client}</p>
                        </div>
                        <div className="col-md-9">
                            <h4  className="fw-bold" style={{color:'NavajoWhite '}}>Brief</h4>
                            <p>{HtmlParser(product.description)}</p>
                        </div>
                    </div>
                    {productContent.map((item) => {
                       return <ListProductContent key={item._id} position={item.position} title={item.title} image={"http://localhost:5000/"+item.imageUrl} description={item.description}/>
                    })}
                </div>
            </section>
        </>
    )
}

export default ProjectDetail;
