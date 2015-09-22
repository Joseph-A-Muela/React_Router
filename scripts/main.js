'use strict';
$('#sec_one').hide();
var Router = Backbone.Router.extend({
	routes: {
		'load' : 'load',
		'menu' : 'menu',
		'game': 'game',
		'leaders': 'leaders',
		'settings': 'settings'

	},
	load: function(){
		$('section').hide();
		$('#load').show();
	},
	menu: function(){
		$('section').hide();
		$('#menu').show();
	},
	game: function(){
		$('section').hide();
		$('#game').show();
	},
	leaders: function(){
		$('section').hide();
		$('#leaders').show();
	},
	settings: function(){
		$('section').hide();
		$('#settings').show();
	}


});

var page = new Router();
Backbone.history.start();


window.onload =function(){
		page.navigate('load', {trigger: true});
	window.setTimeout(function(){
		page.navigate('menu', {trigger:true})
	}, 4000);

}
