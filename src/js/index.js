// Javascript Entry Point

//GAME IS DEPLOYED AT tiy-2016q1-charlesconley-destiny_game.surge.sh


import $ from 'jquery';
import possibleScenes  from './scenarios';

class Game {
	constructor (possibleScenes) {
		this.possibleScenes = possibleScenes;
		// this.paths = [];
	}


	template(obj) {

		var buttons = obj.paths.map(path => {
			return `<li><button data-next=${obj.scenario}>${obj.label}</button></li>`
		});

		return `
			<h3>${obj.message}</h3>
			<ul>${buttons.join('')}</ul>
		`
	}

	loadScene(sceneName) {
		console.log(sceneName);

		var each = this.possibleScenes[sceneName];
		console.log(each);
		var view = this.template(each);
		$('.app').html(view);

	}

	start() {

		this.loadScene('start_scenario');

		$('body').on('click', 'button', function(event){
			var nextScene = $(event.target).data('next');
			loadScene('nextScene');
		})



	}

}

// console.log(possibleScenes);

var adventure = new Game(possibleScenes);
// console.log(adventure);
// adventure.start();
// adventure.template();
adventure.start('start_scenario');









