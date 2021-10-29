import Nav from '../components/Nav.js'
import contactstyles from '../styles/contact.module.css'
import Footer from '../components/Footer.js'

const school = () => {
    return (
        <>
        <Nav/>
        <div className={contactstyles.banner}>
            <div className={contactstyles.container}>
                    <h1>ติดต่อเรา</h1>
            </div>      
        </div>
        <section>
            <div className={contactstyles.sec1}>
                <h1>section1</h1>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default school

