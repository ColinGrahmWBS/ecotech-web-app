import styles from "../dashboard/dashboardPage.module.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Sidebar from "../components/sideBar/Sidebar";

export default function Dashboard() {
	return (
		<>
			<Header></Header>
			<main>
				<div className={styles.mainContent}>
					<div className={styles.dashboardContent}>
						<Sidebar></Sidebar>
						<div className={styles.toPourList}>
							<h1>3. Obergeschoss</h1>
						</div>
					</div>
				</div>
			</main>
			<Footer></Footer>
		</>
	);
}
