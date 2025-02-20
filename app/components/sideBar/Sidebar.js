import Link from "next/link";
import styles from "./sidebar.module.css";

export default function Sidebar() {
	return (
		<div className={styles.sideBar}>
			<div className={styles.sideBarMenu}>
				<Link className={styles.navLink} href="/dashboard">
					Dashboard
				</Link>
				<Link className={styles.navLink} href="/1_OG">
					1. Obergeschoss
				</Link>
				<Link className={styles.navLink} href="/2_OG">
					2. Obergeschoss
				</Link>
				<Link className={styles.navLink} href="/3_OG">
					3. Obergeschoss
				</Link>
				<Link className={styles.navLink} href="/4_OG">
					4. Obergeschoss
				</Link>
				<Link className={styles.navLink} href="/5_OG">
					5. Obergeschoss
				</Link>
				<div />
			</div>
		</div>
	);
}
