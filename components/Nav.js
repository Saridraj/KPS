import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import Image from 'next/image'
import Logo from '../public/logo-kp.png'
import { FiMenu, FiX } from 'react-icons/fi'
import React, { useState, useEffect} from 'react'




function Nav() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const [nav, setNav] = useState(false)

useEffect(() => {
    const changeBackground =() => {
        if (window.scrollY >100) {
            setNav(true);
        } else {
            setNav(false);
        }   
       };  window.addEventListener ('scroll', changeBackground)
            changeBackground();
            return () => {
                window.removeEventListener('scroll', changeBackground);
            }
       

})
   

        return (
        
            <nav className={nav ? navStyles.navactive : navStyles.nav}>
                <div className={navStyles.logo}>
                    <div className={navStyles.logokp}>
                        <Image
                            src={Logo}
                            alt="logo"
                            width={80}
                            height={80}
                        />
                    </div>
                    <Link href='/'>
                        <div className={navStyles.Brand}>
                            <div className={navStyles.Brandh1}><h1>โรงเรียนโคกปรงวิทยาคม</h1></div> 
                            <div className={navStyles.Brandh2}><h2>Khokprongwittayakhom School</h2></div> 
                        </div>
                     </Link>
                </div>
                
                <ul className={click ? navStyles.menuactive : navStyles.menu}>
                    <li>
                        <Link href='/'><button>หน้าแรก</button></Link>
                    </li>
                    <li>
                        <Link href='/school'><button>ข้อมูลโรงเรียน</button></Link>
                    </li>
                    <li>
                        <Link href='/personal'><button>บุคลากร</button></Link>
                    </li>
                    <li>
                        <Link href='/student'><button>ข้อมูลนักเรียน</button></Link>
                    </li>
                    <li>
                        <Link href='/activity'><button>กิจกรรม</button></Link>
                    </li>
                    <li>
                        <Link href='/contact'><button>ติดต่อเรา</button></Link>
                    </li>
                    
                </ul>
                <div className= {navStyles.mobilemenu} onClick={handleClick}>
                        
                        {
                            click ? (
                                <FiX />
                            ) : (
                                <FiMenu />
                            )
                            
                        }
                    </div>
                
            </nav>
            
        )
    }

   




export default Nav
