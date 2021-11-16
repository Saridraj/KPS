import React from 'react'
import footerStyles from '../styles/Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
    return (
        <div className={footerStyles.footer00}>
            <div className={footerStyles.footer}>
                <div className={footerStyles.footer1}>

                    <div className={footerStyles.footerbrand}>
                        <center>
                            <Image
                                src="/logo-kp.png"
                                width={80}
                                height={80}
                            />
                            <h4>โรงเรียนโคกปรงวิทยาคม</h4>
                            <p>สำนักงานเขตพื้นที่การศึกษามัธยมศึกษาเพชรบูรณ์</p>
                        </center>



                    </div>

                </div>
                <div className={footerStyles.footer2}>
                    <center>
                        <ul>
                            <li><Link href='/'><button>หน้าแรก</button></Link></li>
                            <li><Link href='/school'><button>ข้อมูลโรงเรียน</button></Link></li>
                            <li><Link href='/personal'><button>บุคลากร</button></Link></li>
                            <li><Link href='/student'><button>ข้อมูลนักเรียน</button></Link></li>
                            <li><Link href='/activity'><button>กิจกรรม</button></Link></li>
                            <li><Link href='/contact'><button>ติดต่อเรา</button></Link></li>
                        </ul>
                    </center>

                </div>
                <div className={footerStyles.footer3}>
                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2Fkhokprongwittayakhom%2Fphotos%2F%3Fref%3Dpage_internal&tabs=timeline&width=300&height=200&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="300" height="200" scrolling="no"  allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </div>
            </div>
            <div className={footerStyles.footer4}>
            <center>
            <p>Copyright @ 2021 Khokprongwittayakhom School All rights reserved</p>
            </center>
            

            </div>
        </div>

    )
}

export default Footer
