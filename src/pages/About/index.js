import { getSocialMedia } from 'config/redux/action/SocialMedia'
import React, {useEffect, useState} from 'react'
import Navbar from '../../components/molecules/Navbar'
import { useSelector, useDispatch } from 'react-redux';
import SocialMedia from 'components/molecules/SocialMedia';
import Footer from 'components/molecules/Footer';
import { getEducation } from 'config/redux/action/Education';
import Education from 'components/molecules/Education';

const About = () => {
    const dispatch = useDispatch()
    const [socialMedia, setSocialMedia] = useState([])
    const [education, setEducation] = useState([])
    useEffect(() => {
        getSocialMediaHandle()
        getEducationHandle()
    }, [])

    const getSocialMediaHandle = async () => {
        const socialMedia = await dispatch(getSocialMedia())
        setSocialMedia(socialMedia)
    }

    const getEducationHandle = async () => {
        const education = await dispatch(getEducation())
        setEducation(education)
        console.log(education)
    }

    return (
        <>
            <Navbar activePage="about"/>
                <section className="main">
                    <div className="container flex-wrap">
                        <div className="d-flex align-content-center flex-wrap pt-5" style={{height:"100%"}}>
                            <div className="row">
                                <div className="col-md-1"></div>
                                <div className="col-md-10 mt-5 px-5">
                                    <h4 className="mb-4">👋 Hi there, my name is Dika Laksana.</h4>
                                    <p>I am a Software Developer.</p>
                                    <p>My curiosity about human behaviour influences my programming journey
                                    towards crafting creative solutions. This interest shapes my executions
                                    when transforming useful insights into thoughtful and intuitive experiences.</p>
                                    <p>I enjoy working in dynamic environments where I can contribute while
                                    learning different skills from others.</p>

                                    <h4 className="mt-5 fw-bold" style={{color:'NavajoWhite '}}>Contact</h4>

                                    <div className="row">
                                        {socialMedia.map((item) => {
                                            return <SocialMedia image={item.imageUrl} username={item.code} name={item.name} link={item.link} />
                                        })}   
                                    </div> 

                                    <h4 className="mt-5 fw-bold" style={{color:'NavajoWhite '}}>Education</h4>
                                    {education.map((item) => {
                                        return <Education title={item.title} name={item.name} duration={item.duration}/>
                                    })}
                                    
                                                                
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                        </div>
                    </div>
                </section>
            <Footer/>
        </>
    )
}

export default About;
