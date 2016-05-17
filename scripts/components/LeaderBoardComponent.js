import React from 'react';

const LeaderBoardComponent = React.createClass({
	render: function() {
		return(
			<section id="leaders">
				<h1>Leader Board</h1>
				<ol>
					<li>Joseph</li>
					<li>Jen</li>
					<li>Morry</li>
					<li>William</li>
					<li>Martin</li>
					<li>Anna</li>
					<li>Maria</li>
					<li>Dana</li>
					<li>Dan</li>
					<li>Nate</li>
					<li>Aaron</li>
					<li>Mike</li>
				</ol>
				<a href="#menu"><h2>Back to Menu</h2></a>
			</section>
		);
	}
});

export default LeaderBoardComponent;
