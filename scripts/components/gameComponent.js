import React from 'react';

const Loop = function(func) {
    (function loop(time) {
        func(Math.min((Date.now() - time) / 1000, 1));
        window.requestAnimationFrame(loop.bind(null, Date.now()));
    })(Date.now());
};

const GameComponent = React.createClass ({
	getInitialState: function() {
		return{
			ball: {
				y: Math.floor(Math.random() * 19),
				x: Math.floor(Math.random() * 14),
				vx: 5 * (Math.random() < 0.5 ? 1 : -1),
				vy: 4 * (Math.random() < 0.5 ? 1 : -1)
			},
			score: {
				left: 0,
				right: 0
			},
			paddle: {
				left: {
					x: 0.15,
					y: 5
				},
				right: {
					x: 19 - 0.15,
					y: 7
				}
			}
		};
	},
    render: function() {
    	let style = {
    		width: '100%',
    		height: '100%',
    		border: 'dotted .1em white'
    	};
        return(
            <div id='playGame' style={style} >
            	<PongScore position={'left'} score={this.state.score.left} />
            	<PongScore position={'right'} score={this.state.score.right} />
            	<PongPaddle paddle={this.state.paddle.left} />
            	<PongPaddle paddle={this.state.paddle.right} />
            	<PongBall ball= {this.state.ball} />
            </div>
        );
    },
    componentDidMount: function() {
    	Loop( function(tick) {
    		this.state.ball.x += this.state.ball.vx * tick;
    		this.state.ball.y += this.state.ball.vy * tick;
    		if(this.state.ball.vx > 0
    		&& this.state.ball.x > 19 - 1
    		&& this.state.ball.y > this.state.paddles.right.y - 2
    		&& this.state.ball.y < this.state.paddles.right.y + 2 ) {
    			this.state.ball.vx *= -1;
    		}
    		if(this.state.ball.vx < 0
    		&& this.state.ball.x < 0 + 1
    		&& this.state.ball.y > this.state.paddles.left.y - 2
    		&& this.state.ball.y < this.state.paddles.left.y + 2 ) {
    			this.state.ball.vx *= -1;
    		}
    		if(this.state.ball.vx > 0
    		&& this.state.ball.x > 19) {
    			this.state.ball.vx *= -1;
    			this.state.ball.score.left++;
    		}
    		if(this.state.ball.vy < 0
    		&& this.state.ball.x < 0) {
    			this.state.ball.vx *= -1;
    			this.state.score.right++;
    		}
    		if(this.state.ball.vy > 0
    		&& this.state.ball.y > 14) {
    			this.state.ball.vy *= -1;
    		}
    		if(this.state.ball.vy < 0
    		&& this.state.ball.y < 0) {
    			this.state.ball.vy *= -1;
    		}
    		this.forceUpdate();
    	}.bind(this));
    }
});

const PongBall = React.createClass ({
	render: function() {
		let style = {
				width: '.8em',
				height: '.8em',
				top: this.props.ball.y + 'em',
				left: this.props.ball.x + 'em',
				position: 'absolute',
				backgroundColor: 'red',
				borderRadius: '.5em'
			};
		return(
			<div style= {style} />
		);
	}
});

const PongPaddle = React.createClass({
	render: function() {
		let style = {
			width: '.5em',
			height: '4em',
			position: 'absolute',
			left: this.props.paddle.x + 'em',
			top: this.props.paddle.y + 'em',
			backgroundColor: 'white'
		};
		return(
			<div style={style} onMouseMove={this.movePaddle} />
		);
	},
	movePaddle: function(event) {
		this.props.paddle.y = event.clientY / window.getSizeOfEms() - 2;
	}
});

const PongScore = React.createClass({
	render: function() {
		let style = {
			fontSize: '1.4em',
			position: 'absolute',
			top: '.1em'
		};
		if(this.props.position == 'left') {
			style.left = '1em';
		} else if(this.props.position == 'right') {
			style.right = '1em';
		}
		return(
			<div style={style}>
				{this.props.score}
			</div>
		);
	}
});

export default GameComponent;






