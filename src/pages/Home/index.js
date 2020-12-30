import React from 'react'
import Footer from '../../components/molecules/Footer'
import Navbar from '../../components/molecules/Navbar'

const Home = () => {
    return (
        <>
            <Navbar activePage="home"/>
                <section className="main">
                    <div className="container flex-wrap">
                        <div className="d-flex align-content-center flex-wrap" style={{height:610}}>
                            <div className="order-3 p-2 bd-highlight text-secondary" style={{maxWidth:400}}>Hello! I’m Dika, a Software Developer who is passionate to create delightful experience through apps.</div>
                        </div>
                    </div>
                </section>
            <Footer/>
        </>
    )
}

export default Home;
