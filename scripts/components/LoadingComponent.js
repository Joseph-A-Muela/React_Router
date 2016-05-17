import React from 'react';

const LoadingComponent = React.createClass({
	render: function() {
		return(
			<section id="loadPage">
				<div className="text">LOADING...</div>
				<div className="board">
				  	<div className="left">
				  	</div>
				  	<div className="right">
				  	</div>
				  	<div className="ball">
				  	</div>
				  	<div className="ballhit">
				  	</div>
				</div>
				<div className="credit">Ping Pong by
				  <a href="http://kieranhunter.co.uk" target="_blank">Kieran Hunter</a>
				</div>
			</section>
		);
	}
});

export default LoadingComponent;
