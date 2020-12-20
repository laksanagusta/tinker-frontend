import React from 'react'
import Footer from '../../components/molecules/Footer'
import Navbar from '../../components/molecules/Navbar'

const Home = () => {
    return (
        <>
            <Navbar isPrimary activePage="about"/>
                <section className="main">
                    <div className="container flex-wrap">
                        <div class="d-flex align-content-center flex-wrap" style={{height:610}}>
                            <div class="order-3 p-2 bd-highlight" style={{maxWidth:400}}>Hello! I’m Dika, a Software Developer who is passionate to create decent apps.</div>
                        </div>
                    </div>
                </section>
            <Footer isPrimary/>
        </>
    )
}

export default Home;
