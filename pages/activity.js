import Nav from '../components/Nav.js'
import activitystyles from '../styles/activity.module.css'
import Footer from '../components/Footer.js'


const school = () => {
    return (
        <>
        <Nav/>
        <div className={activitystyles.banner}>
            <div className={activitystyles.container}>
                    <h1>กิจกรรม</h1>
            </div>      
        </div>
        <section>
            <div className={activitystyles.sec1}>
                <h1>section1</h1>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default school

