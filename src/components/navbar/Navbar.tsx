import './navbar.css';

export const Navbar = () => {
	return (
		<>
			<header>
				<nav>
					<img src="./LogoLV.svg" width="164px" height="30px" alt="Luis Vera" />

					<div>
						<ul>
							<li>
								<a className="nav__link" href="/#about">
									About
								</a>
							</li>
							<li>
								<a className="nav__link" href="/#projects">
									Projects
								</a>
							</li>
							<li>
								<a className="nav__link" href="/#technologies">
									Technologies
								</a>
							</li>
							<li>
								<a className="nav__link" href="/#contact">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		</>
	);
};
