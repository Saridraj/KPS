import Nav from '../components/Nav.js'
import personalstyles from '../styles/personal.module.css'
import Footer from '../components/Footer.js'


const school = () => {
    return (
        <>
        <Nav/>
        <div className={personalstyles.banner}>
            <div className={personalstyles.container}>
                <h1>บุคลากร</h1>
            </div>      
        </div>
        <section>
            <div className={personalstyles.sec1}>
                <h1>section1</h1>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default school

