import React from 'react';

const MenuComponent = React.createClass({
	render: function() {
		return (
			<section id="menu">
				<a href="#game"><h1>Start Game</h1></a>
				<a href="#leaders"><h2>Leader Board</h2></a>
				<a href="#settings"><h2>Settings</h2></a>
			</section>
		);
	}
});

export default MenuComponent;
