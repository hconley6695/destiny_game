// Javascript Entry Point

//GAME IS DEPLOYED AT tiy-2016q1-charlesconley-destiny_game.surge.sh


import $ from 'jquery';
import possibleScenes  from './scenarios';

class Game {
	constructor (possibleScenes) {
		this.possibleScenes = possibleScenes;
	}


	template(view) {

		var buttons = view.paths.map(path => {
			return `<li><button data-next=${path.scenario}>${path.label}</button></li>`
		});

		return `
			<h3>${view.message}</h3>
			<ul>${buttons.join('')}</ul>
		`
	}

	loadScene(sceneName) {
		console.log(sceneName);

	}

	// start() {
	// 	console.log('hi');
	// 	var allMsg = possibleScenes.message;
	// 	console.log(allMsg);

	// 	// var hello = possibleScenes.message.map(msg => {
	// 	// 	return `<li> ${msg.message}</li>`
	// 	// });

	// 	// console.log(hello);
	// }

}

// console.log(possibleScenes);

var adventure = new Game(possibleScenes);
// console.log(adventure);
// adventure.start();
// adventure.template();
adventure.loadScene();








