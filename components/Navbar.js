import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/NavBar.module.scss";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li
          className={
            router.pathname == "/" ? `${styles.active} nav-item` : "nav-item"
          }
        >
          <Link href="/">
            <a className="nav-link home">Home</a>
          </Link>
        </li>
        <li
          className={
            router.pathname == "/about"
              ? `${styles.active} nav-item`
              : "nav-item"
          }
        >
          <Link href="/about">
            <a className="nav-link about">About</a>
          </Link>
        </li>
        <li
          className={
            router.pathname == "/blog"
              ? `${styles.active} nav-item`
              : "nav-item"
          }
        >
          <Link href="/blog">
            <a className="nav-link blog">Blog</a>
          </Link>
        </li>
        <li
          className={
            router.pathname == "/contact"
              ? `${styles.active} nav-item`
              : "nav-item"
          }
        >
          <Link href="/contact">
            <a className="nav-link contact">Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
