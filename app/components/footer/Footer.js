import styles from "./footer.module.css";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerContent}>
				<p>WBS IT-Service GmbH</p>
				<p>v{process.env.APP_VERSION}</p>
			</div>
		</footer>
	);
}
