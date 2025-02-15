//components imports
import Link from "next/link"
import Image from "next/image"
import MainHeaderBackground from "./header-brackgound"

//Assets imports
import logoImg from '@/assets/logo.png'

// Css imports
import classes from './main-header.module.css'

export default function MainLayout({children}){
    return (
    <>
    <MainHeaderBackground/>
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="A plate with food on it" priority/>
        NextLevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
            <li>
                <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
                <Link href="/community">Browse Community</Link>
            </li>
        </ul>
      </nav>
    </header>
    </>)
}