import Nav from '../components/Nav.js'
import schoolstyles from '../styles/school.module.css'
import Footer from '../components/Footer.js'


const school = () => {
    return (
    <>  
        <Nav/>
        <div className={schoolstyles.banner}>
            <div className={schoolstyles.container}>
                <h1>ข้อมูลโรงเรียน</h1>
            </div>      
        </div>
        <section>
            <div className={schoolstyles.sec1}>
                <h1>section1</h1>
            </div>
        </section>
        <Footer/>
    </>
          
    )
}

export default school 

