import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav.js'
import Footer from '../components/Footer.js'
import Image from 'next/image'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

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
                  <p>โรงเรียนโคกปรงวิทยาคม  มุ่งมั่นพัฒนาคุณภาพการศึกษา  บริหารจัดการโดยใช้เทคโนโลยี ยึดมั่นหลักธรรมาภิบาล  ภายใต้การมีส่วนร่วมชองชุมชน  ผู้เรียนมีคุณธรรมนำสู่ความเป็นมาตรฐานสากลบนพื้นฐานของปรัชญาเศรษฐกิจพอเพียง </p>
              </div>
          </div>
        </div>
        
          
      </div>
    </div>
 
    

    <section id="sec1" >
          <div className={styles.sec1}>
          <Carousel>
              <Carousel.Item>
                  <Image 
                      width={1080}
                      height={540}
                      src="/news1.jpg"
                  />
              </Carousel.Item>
              <Carousel.Item>
                  <Image 
                      width={1080}
                      height={540}
                      src="/news2.jpg"
                  />
              </Carousel.Item>    

          </Carousel>
          </div>
      
    </section>


    <section id="sec2" >
        <div className={styles.sec2}>
            <div className={styles.sec2box1}>
                <h3>พันธกิจ</h3>
                <ul>
                  <li>ส่งเสริมพัฒนาผู้เรียนให้มีคุณภาพตามเกณฑ์มาตรฐานการศึกษาขั้นพื้นฐาน</li>
                  <li>ปลูกฝังและส่งเสริมนักเรียนดีมีคุณธรรม มีจิตสาธารณะมีค่านิยมที่พึงประสงค์บนพื้นฐานปรัชญาของเศรษฐกิจพอเพียง</li>
                  <li>พัฒนาระบบการบริหารจัดการโดยใช้เทคโนโลยีและหลักธรรมาภิบาล</li>
                  <li>พัฒนาครูและบุคลากรทางการศึกษาให้มีคุณภาพตามมาตรฐานวิชาชีพและมีความเชี่ยวชาญ</li>
                  <li>พัฒนากระบวนการจัดกิจกรรมการเรียนการสอนสู่ความเป็นมาตรฐานสากล</li>
                  <li>ส่งเสริมสนับสนุนและประสานความร่วมมือชุมชนองค์กรภายนอกเครือข่ายร่วมพัฒนาคุณภาพการศึกษา</li>
                </ul>
            </div>
            <div className={styles.sec2box1}>
                <h3>เป้าประสงค์</h3>
                <ul>
                  <li>นักเรียนได้รับการพัฒนาความสามารถเต็มศักยภาพและสมรรถนะสำคัญมีคุณลักษณะอันพึงประสงค์จบหลักสูตรการศึกษาขั้นพื้นฐานอย่างมีคุณภาพอยู่ในสังคมได้อย่างมีความสุข</li>
                  <li>ครูและบุคลากรได้รับการพัฒนาเป็นครูมืออาชีพและเชี่ยวชาญ</li>
                  <li>โรงเรียนมีการบริหารจัดการอย่างมีประสิทธิภาพ</li>
                  <li>สถานศึกษาได้รับการสนับสนุนยอมรับเป็นที่ประจักษ์แก่ชุมชน</li>
                </ul>
            </div>
        
        </div>
    </section>
    <section id="sec3" >
      
        <div className={styles.sec3}>
          <div className={styles.sec3head}>
                <center>
                  <h3>หลักสูตรทวิศึกษาและห้องเรียนอาชีพ</h3>
                  <h4>ความร่วมมือระหว่างโรงเรียนโคกปรงวิทยาคมกับวิทยาลัยการอาชีพวิเชียรบุรี</h4>
                </center> 
          </div>
          <div className={styles.sec3picset1}>
                <div className={styles.sec3text}>
                  <p>โรงเรียนโคกปรงวิทยาคมของเรานอกเหนือจากการจัดการศึกษาในระดับชั้นมัธยมศึกษาตามหลักสูตรแกนกลางการจัดการศึกษาขั้นพื้นฐาน พุทธศักราช 2551 ตามหลักเกณฑ์ของกระทรวงศึกษาธิการ แล้ว ทางโรงเรียนของเรายังศึกษาบริบทของผู้เรียนอย่างต่อเนื่อง จึงทำให้รู้ว่านักเรียนของโรงเรียนโคกปรงวิทยาคมส่วนใหญ่ เมื่อจบการศึกษามักจะก้าวเข้าสู่ตลาดแรงงานมากกว่าการศึกษาต่อ ทางโรงเรียนของเราจึงได้เล็งเห็นช่องทางในการพัฒนาศักยภาพผู้เรียน โดยการพัฒนาหลักสูตรทวิศึกษาขึ้นมาเพื่อใช้จัดการเรียนการสอนภายในโรงเรียน </p>
                </div>
                <div className={styles.sec3box}>
                  <Image
                      className={styles.sec3pic1}
                      width={480}
                       height={350}
                      src="/sec3pic1.jpg"
                  /> 
                </div>
          </div>
          
          <div className={styles.sec3picset2}>
              <div className={styles.sec3text}>
                <p>นักเรียนที่ได้เข้าเรียนในหลักสูตรทวิศึกษานี้ จะได้รับการจัดการเรียนการสอนในวิชาภาคบังคับของสายสามัญที่โรงเรียนโคกปรงวิทยาคมตามจำนวนหน่วยกิตที่กระทรวงศึกษาธิการกำหนด และระหว่างนั้นจะมีการเข้ารับการเรียนการสอน รวมไปถึงการอบรมตามหลักสูตรของสายอาชีพจากวิทยาลัยการอาชีพวิเชียบุรี จนกระทั่งจบหลักสูตร นั่นทำให้นักเรียนกลุ่มทวิศึกษา มีความรู้ในหลากหลายด้าน รวมไปถึงมีทักษะในการปฏิบัติงาน  เพื่อนำไปประกอบอาชีพในอนาคต เมื่อจบการศึกษา นักเรียนทวิศึกษาจะได้รับทั้งประกาศนียบัตรของหลักสูตรมัธยมศึกษาตอนปลาย (ม.6) ในสายสามัญ และได้รับประกาศนียบัตรวิชาชีพ (ปชว.) ของสายอาชีพ</p>
              </div>
              <div className={styles.sec3box}>
              <Image
                    className={styles.sec3pic2}
                    width={480}
                     height={350}
                    src="/sec3pic2.jpg"
                />
              </div>
          </div>
        </div>
    </section>
    <Footer/>
    </>
  )
}

