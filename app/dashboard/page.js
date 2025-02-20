import Link from "next/link";
import styles from "./dashboardPage.module.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function Dashboard() {
	return (
		<>
			<Header></Header>
			<main>
				<div className={styles.mainContent}>
					<div className={styles.dashboardContent}>
						<div className={styles.sideBar}>
							<div className={styles.sideBarMenu}>
								<Link
									className={styles.navLink}
									href="/dashboard">
									Dashboard
								</Link>
								<Link
									className={styles.navLink}
									href="/dashboard">
									1. Obergeschoss
								</Link>
								<Link
									className={styles.navLink}
									href="/dashboard">
									2. Obergeschoss
								</Link>
								<Link
									className={styles.navLink}
									href="/dashboard">
									3. Obergeschoss
								</Link>
								<Link
									className={styles.navLink}
									href="/dashboard">
									4. Obergeschoss
								</Link>
								<Link
									className={styles.navLink}
									href="/dashboard">
									5. Obergeschoss
								</Link>
								<div />
							</div>
						</div>
						<div className={styles.toPourList}>
							<h1>Zu gießende Pflanzen</h1>
						</div>
					</div>
				</div>
			</main>
			<Footer></Footer>
		</>
	);
}
