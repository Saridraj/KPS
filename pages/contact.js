import Nav from '../components/Nav.js'
import contactstyles from '../styles/contact.module.css'
import Footer from '../components/Footer.js'

const school = () => {
    return (
        <>
            <Nav />
            <div className={contactstyles.banner}>
                <div className={contactstyles.container}>
                    <h1>ติดต่อเรา</h1>
                </div>
            </div>
            <section>
                <div className={contactstyles.sec1}>
                    <div className={contactstyles.contact}>
                        <center><h1>โรงเรียนโคกปรงวิทยาคม สังกัดสำนักงานเขตพื้นที่การศึกษามัธยมศึกษา เพชรบูรณ์</h1></center>
                        <h3>ที่ตั้ง : เลขที่ 315 หมู่ 9 ตำบลโคกปรง อำเภอวิเชียรบุรี จังหวัดเพชรบูรณ์ 67130</h3>
                        <h3>โทรศัพท์ : 056-029406</h3>
                        <h3>E-mail : kokprong@gmail.com</h3>
                        <h3>Facebook :โรงเรียนโคกปรงวิทยาคม</h3>
                        <center><iframe className={contactstyles.contactmap} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3840.1969024686014!2d101.15188491458711!3d15.740719552339446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311fbb2e2c8a05a9%3A0x8323c34cba7b36ca!2sKhok%20Plong%20Wittayakhom%20School!5e0!3m2!1sen!2sth!4v1636984256922!5m2!1sen!2sth" width="80%" height="80%" allowfullScreen="" loading="lazy"></iframe></center>
                    </div>

                </div>
            </section>
            <Footer />
        </>
    )
}

export default school

