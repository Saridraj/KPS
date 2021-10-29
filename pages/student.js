import Nav from '../components/Nav.js'
import studentstyles from '../styles/student.module.css'
import Footer from '../components/Footer.js'

const school = () => {
    return (
        <>
        <Nav/>
        <div className={studentstyles.banner}>
            <div className={studentstyles.container}>
                <h1>ข้อมูลนักเรียน</h1>
            </div>      
        </div>
        <section>
            <div className={studentstyles.sec1}>
                <h1>section1</h1>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default school

