import React from 'react';

const SettingsComponent = React.createClass({
	render: function() {
		return(
			<section id="settings">
				<h1>Settings</h1>
				<h3>Sound</h3>
				<h3>Brightness</h3>
				<h3>Button layout</h3>
				<a href="#menu"><h2>Back to Menu</h2></a>
			</section>
		);
	}
});

export default SettingsComponent;
