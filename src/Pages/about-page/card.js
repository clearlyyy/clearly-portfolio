import React from 'react';

const GithubCard = () => {

	return (
		<div className="wrapper">
		<div className="card-border">
			<img src="https://iili.io/H1UqKPe.png" alt="sfml-gui header image" className="githubImage"/>
			<p className="Header-Text">clearlyyy/sfml-gui</p>
			<p className="desc-text">Lightweight Debugging GUI Framework made for SFML</p>
			<div className="lang-wrapper">
			<div className="lang-box"><p className="lang-text">C++</p></div>
		
			<div className="lang-box"><p className="lang-text">SFML</p></div>
			</div>

		</div>
		</div>
	)

}

export default GithubCard
