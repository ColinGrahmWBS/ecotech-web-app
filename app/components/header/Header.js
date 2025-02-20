import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
	return (
		<div className={styles.header}>
			<div className={styles.headerContent}>
				<div className={styles.logoBox}>
					<Image src="/logo.png" alt="logo" width={200} height={48} />
				</div>
				<div className={styles.actionBox}>
					<button className={styles.alertsButton}>
						<i className="bi bi-bell-fill"></i>
					</button>
				</div>
			</div>
		</div>
	);
}
