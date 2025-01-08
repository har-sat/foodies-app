import classes from "./main-header.module.css";

import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo.png";
import Background from "./main-header-bg";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Background />
      <Link href="/" className={classes.logo}>
        <Image className={classes.logo} src={logo} alt="brand logo" priority />
        Foodies Corner
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href={"/meals"}>Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href={"/community"}>Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
