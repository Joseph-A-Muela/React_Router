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
        return(
            <div id='playGame'>
            	<Pongscore position={'left'} score={this.state.score.left} />
            	<Pongscore position={'right'} score={this.state.score.right} />
            	<Pongpaddle paddle={this.state.paddle.left} />
            	<Pongpaddle paddle={this.state.paddle.right} />
            	<Pongball ball= {this.state.ball} />
            </div>
        );
    },
    componentDidMount: function() {
    	Loop( function(tick) {
    		this.state.ball.x += this.state.ball.vx * tick;
    		this.state.ball.y += this.state.ball.vy * tick;
    		if(this.state.ball.x > 19) {
    			this.state.ball.vx *= -1;
    		} else if(this.state.ball.x < 0) {
    			this.state.ball.vx *= -1;
    		}
    		if (this.state.ball .y > 14) {
    			this.state.ball.vy *= -1;
    		}else if(this.state.ball.y < 0) {
    			this.state.ball.vy *= -1;
    		}
    		this.forceUpdate();
    	}.bind(this));
    }
});

const Pongball = React.createClass ({
	render: function() {
		let style = {
				width: '1em',
				height: '1em',
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

const Pongpaddle = React.createClass({
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
			<div onMouseMove={this.movePaddle} style={style} />
		);
	},
	movePaddle: function(event) {
		// this.props.paddle.y =
	}
});

const Pongscore = React.createClass({
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






