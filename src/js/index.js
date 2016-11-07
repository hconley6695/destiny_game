// Javascript Entry Point

//GAME IS DEPLOYED AT tiy-2016q1-charlesconley-destiny_game.surge.sh


import $ from 'jquery';
import {possibleScenes} from './scenarios';

class Game {
	constructor (possibleScenes) {
		this.possibleScenes = possibleScenes;
	}

	scene(view) {
		var buttons = view.paths.map(path => {
			return `<li><button data-next=${path.scenario}>${path.label}</button></li>`
		});

		return `
			<h3>${view.message}</h3>
			<ul>${buttons.join('')}</ul>
		`
	}

	// start() {
	// 	loadScene(possibleScenes[0]);
	// }

}

var adventure = new Game(possibleScenes);
adventure.scene();







