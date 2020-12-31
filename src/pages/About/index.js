import { getSocialMedia } from 'config/redux/action/SocialMedia'
import React, {useEffect, useState} from 'react'
import Navbar from '../../components/molecules/Navbar'
import { useDispatch } from 'react-redux';
import SocialMedia from 'components/molecules/SocialMedia';
import Footer from 'components/molecules/Footer';
import { getEducation } from 'config/redux/action/Education';
import Education from 'components/molecules/Education';
import { getExperience } from 'config/redux/action/Experience';
import Experience from 'components/molecules/Experience';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
    const dispatch = useDispatch()
    const [socialMedia, setSocialMedia] = useState([])
    const [education, setEducation] = useState([])
    const [experience, setExperience] = useState([])
    useEffect(() => {
        const getSocialMediaHandle = async () => {
            const socialMedia = await dispatch(getSocialMedia())
            setSocialMedia(socialMedia)
        }
    
        const getEducationHandle = async () => {
            const education = await dispatch(getEducation())
            setEducation(education)
        }
    
        const getExperienceHandle = async () => {
            const experience = await dispatch(getExperience())
            setExperience(experience)
        }
        getSocialMediaHandle()
        getEducationHandle()
        getExperienceHandle()
    }, [dispatch])

    return (
        <>
            <Navbar activePage="about"/>
                <section className="main">
                    <div className="container flex-wrap py-5">
                        <div className="d-flex align-content-center flex-wrap pt-5" style={{height:"100%"}}>
                            <div className="row">
                                <div className="col-md-1"></div>
                                <div className="col-md-10 mb-5 px-5">
                                    <h4 className="mb-4 text-secondary"><span role="img" aria-label="hand" aria-labelledby="dika">👋</span> Hi there, my name is Dika Laksana.</h4>
                                    <p className="text-secondary">I am a Software Developer.</p>
                                    <p className="text-secondary">My curiosity about human behaviour influences my programming journey
                                    towards crafting creative solutions. This interest shapes my executions
                                    when transforming useful insights into thoughtful and intuitive experiences.</p>
                                    <p className="text-secondary">I enjoy working in dynamic environments where I can contribute while
                                    learning different skills from others.</p>

                                    <h4 className="mt-5 fw-bold" style={{color:'NavajoWhite '}}>Skills</h4>
                                    <div className="d-flex flex-wrap col-md-8 mb-3">
                                            <div className="bd-highlight text-secondary mb-2" style={{paddingRight:20}}><FontAwesomeIcon icon={["fab", "react"]}/> React</div>
                                            <div className="bd-highlight text-secondary mb-2" style={{paddingRight:20}}><FontAwesomeIcon icon={["fab", "node"]}/> Node</div>
                                            <div className="bd-highlight text-secondary mb-2" style={{paddingRight:20}}><FontAwesomeIcon icon={["fas", "code-branch"]}/> Redux</div>
                                            <div className="bd-highlight text-secondary mb-2" style={{paddingRight:20}}><FontAwesomeIcon icon={["fas", "robot"]}/> Phonegap</div>
                                            <div className="bd-highlight text-secondary mb-2" style={{paddingRight:20}}><FontAwesomeIcon icon={["fab", "laravel"]}/> Laravel</div>
                                            <div className="bd-highlight text-secondary mb-2" style={{paddingRight:20}}><FontAwesomeIcon icon={["fab", "php"]}/> PHP</div>
                                            <div className="bd-highlight text-secondary mb-2" style={{paddingRight:20}}><FontAwesomeIcon icon={["fab", "js"]}/> Javascript</div>
                                            <div className="bd-highlight text-secondary mb-2" style={{paddingRight:20}}><FontAwesomeIcon icon={["fab", "js"]}/> Express</div>
                                            <div className="bd-highlight text-secondary mb-2" style={{paddingRight:20}}><FontAwesomeIcon icon={["fab", "github"]}/> Github</div>                                            
                                            <div className="bd-highlight text-secondary mb-2" style={{paddingRight:20}}><FontAwesomeIcon icon={["fas", "database"]}/> MongoDB</div>
                                            <div className="bd-highlight text-secondary mb-2" style={{paddingRight:20}}><FontAwesomeIcon icon={["fas", "database"]}/> PostgreSQL</div>
                                            <div className="bd-highlight text-secondary mb-2" style={{paddingRight:20}}><FontAwesomeIcon icon={["fas", "database"]}/> MySql</div>
                                            <div className="bd-highlight text-secondary mb-2" style={{paddingRight:20}}><FontAwesomeIcon icon={["fab", "google"]}/> Firebase</div>
                                            <div className="bd-highlight text-secondary mb-2" style={{paddingRight:20}}><FontAwesomeIcon icon={["fab", "figma"]}/> Figma</div>
                                            <div className="bd-highlight text-secondary mb-2" style={{paddingRight:20}}><FontAwesomeIcon icon={["fab", "aws"]}/> Amazon Web Services</div>
                                    </div>

                                    <h4 className="mt-5 fw-bold" style={{color:'NavajoWhite '}}>Contact</h4>

                                    <div className="row">
                                        {socialMedia.map((item) => {
                                            return <SocialMedia key={item._id} image={item.imageUrl} username={item.code} name={item.name} link={item.link} />
                                        })}   
                                    </div> 

                                    <h4 className="mt-5 fw-bold" style={{color:'NavajoWhite '}}>Education</h4>
                                    {education.map((item) => {
                                        return <Education key={item._id} title={item.title} name={item.name} duration={item.duration}/>
                                    })}

                                    <h4 className="mt-5 fw-bold" style={{color:'NavajoWhite '}}>Work Experience</h4>
                                    {experience.map((item) => {
                                        return <Experience key={item._id} title={item.title} name={item.name} duration={item.duration}/>
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
