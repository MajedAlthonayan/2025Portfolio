import ParticlesBackground from "./components/background/ParticlesBackground";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import "./globals.css";

export default function Home() {
	return (
		<html>
			<body>
				<div className="">
					<main className="">
						<ParticlesBackground />
						<Navigation />
						<Main />
						<Footer />
					</main>
				</div>
			</body>
		</html>
	);
}
