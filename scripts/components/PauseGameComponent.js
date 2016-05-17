import React from 'react';

const PauseGameComponent = React.createClass({
	render: function() {
		return(
			<section id="pauseGame">
				<a href='startGame'><h1>Start Game</h1></a>
				<a href='restartGame'><h1>Restart</h1></a>
				<a href='quitGame'><h1>Quit</h1></a>
				<a href="menu"><h2>Back to Menu</h2></a>
			</section>
		);
	}
});

export default PauseGameComponent;
