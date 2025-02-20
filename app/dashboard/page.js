import styles from "./dashboardPage.module.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function Dashboard() {
	return (
		<>
			<Header></Header>
			<main>
				<div className={styles.mainContent}></div>
			</main>
			<Footer></Footer>
		</>
	);
}
