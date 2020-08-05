import React from 'react';

const About = ({ name }) => {
	return (
		<section className="about" id="about">
			<h3>
				Hi! I'm {name} <i className="animated hover-rotate em em-raised_hand_with_fingers_splayed" />
			</h3>
			<div className="details">
				<div className="item text-muted">
					<p>
						I'm a frontend developer from Turkey <i className="animated hover-bounce em-svg em-heart f-12" />
						I founded HenoApp and DepremX. I develop web sites.
					</p>
					<p>
						Some of my previous works:
						<a rel="noopener noreferrer" target="_BLANK" href="https://heno.app">
							Betternode
						</a>
						,
						<a rel="noopener noreferrer" target="_BLANK" href="https://depremx.org">
							CryptoBeanie
						</a>
						,
						<a rel="noopener noreferrer" target="_BLANK" href="https://tuval.co">
							ClixWall
						</a>
					</p>
				</div>
			</div>
		</section>
	);
};

export { About };
