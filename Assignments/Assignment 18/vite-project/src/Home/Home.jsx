import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'

import './Home.css'

export default function Home () {
    return (
        <>
        <NavBar></NavBar>
            <div className="d-flex flex-row justify-content-between">
                
                <div className='d-flex justify-content-center align-items-center'>
                    <h1>Youssef Mostafa ELSayed<tr /></h1>
                    <h2>Frontend Developer || Software Engineer</h2>
                </div>

                <iframe src="https://youssef-mostafa-portfolio-jet.vercel.app/" className='webSite'  />

            </div>
            <Footer></Footer>

        </>
    );
};