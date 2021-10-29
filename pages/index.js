import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav.js'
import Footer from '../components/Footer.js'
import Image from 'next/image'
import Bannerpic from '../public/bannerpic.jpg'
import Link from 'next/link'
import { FiChevronDown} from 'react-icons/fi'



export default function Home() {



  return (
    <>
    <div>
      <Head>
        <title>KP School</title>
      </Head>
    </div>
    <Nav/>
    <div className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.bannercon}>
          <div className={styles.bannerpic}>
            
          </div>
          <div className={styles.text}>
              <div className={styles.head}>
                  <h3>ยินดีต้อนรับ</h3>
              </div>
              <div className={styles.subhead}>
                  <p>พันธกิจวิสัยทัศน์ปรัชญาบลาบลาบลาสวัสดีสวัสดีโรงเรียนโรงเรียน</p>
              </div>
          </div>
        </div>
        <div className={styles.boxtosec1}>
            <Link href="/#sec1" >
              <button className={styles.tosec1}>เยี่ยมชมโรงเรียน <br />
                <div className={styles.icontosec1}><FiChevronDown/></div>
              </button>
            </Link>
        </div>
          
      </div>
    </div>
    <section id="sec1" >
          <div className={styles.sec1}>
            <h1>section1</h1>
          </div>
      
    </section>
    <section id="sec2" >
      
        <div className={styles.sec2}>
            <h1>section2</h1>
          </div>
      
    </section>
    <section id="sec3" >
      
        <div className={styles.sec3}>
            <h1>section3</h1>
          </div>
    </section>
    <Footer/>
    </>
  )
}
