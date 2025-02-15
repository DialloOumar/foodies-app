//components imports
import Link from "next/link"
import Image from "next/image"
import MainHeaderBackground from "./header-brackgound"
import NavLink from "./nav-link"

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
                <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
                <NavLink href="/community">Browse Community</NavLink>
            </li>
        </ul>
      </nav>
    </header>
    </>)
}