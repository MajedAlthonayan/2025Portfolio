export default function Footer() {
	return (
		<footer className="bg-accent text-white section">
			<div className="container">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
					<div>
						<h3 className="brand-font text-3xl font-medium mb-4 text-cream">
							Majed Althonayan
						</h3>
						<p className="text-cream leading-relaxed opacity-90 text-sm">
							Built on Next.js
						</p>
					</div>
					<div></div>
				</div>
				<div className="border-t border-cream opacity-20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
					<div className="flex space-x-8 mt-4 md:mt-0"></div>
				</div>
			</div>
		</footer>
	);
}
