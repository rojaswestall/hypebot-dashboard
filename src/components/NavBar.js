import React, { Component } from 'react';

class NavBar extends Component {

	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container">
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
						<a className="navbar-brand" href="">Omega Delta Phi Alpha Alpha</a>
						<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
							<li className="nav-item active">
								<a className="nav-link" href="">Manage Tasks<span className="sr-only">(current)</span></a>
							</li>
							<li className="nav-item">
								<a className="nav-link disabled" href="">Stats</a>
							</li>
							<li className="nav-item">
								<a className="nav-link disabled" href="">Task History</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default NavBar;