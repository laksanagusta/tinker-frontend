import CardDesign from 'components/molecules/CardDesign'
import Navbar from '../../components/molecules/Navbar'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getDesign } from 'config/redux/action/Design'
import Footer from 'components/molecules/Footer';

const Design = () => {
    const dispatch = useDispatch()
    const [design, setDesign] = useState([])
    const s3url = useSelector((state) => state.s3url)

    useEffect(() => {
        const getAllDesigns = async () => {
            const designs = await dispatch(getDesign({limit:500}));
            setDesign(designs);
        }
        getAllDesigns();
    }, [dispatch])

    return (
        <>
            <Navbar activePage="design"/>
                <section className="main">
                    <div className="container-sm py-5">
                        <div className="row">
                            {design.map((item) => {
                                return <CardDesign key={item._id} link="https://dribbble.com/notdika" image={`${s3url}${item.imageUrl}`} name={item.title} tag={item.tag}/>
                            })}
                        </div>
                    </div>
                </section>
            <Footer/>
        </>
    )
}

export default Design;
