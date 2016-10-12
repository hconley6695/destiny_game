// Javascript Entry Point
import $ from 'jquery';
import scenarios from './scenarios';

function slide(scenario) {
	var buttons = scenario.paths.map(path => {
//THIS IS SENDING BACK OBJECT;
		console.log(scenario);
		//return `<li><button data-next="${path.scenarios.scenario}"> ${path.label} </button></li>`
		//NEED HELP HERE!!!
		return `<li><button data-next="${scenario}"> ${path.label} </button></li>`
	});
	return `<p> ${scenario.message}</p>
			<ul>${buttons.join('')}</ul>`

}

function loadScene(scenario) {

	var eachSlide = slide(scenario);
	$('.app').html(eachSlide);

}

//console.log(scenarios.goTreasureHunting.paths[1].scenario);
loadScene(scenarios.start_scenario);

$('.app').on('click', 'button', event => {
	var newScene = $(event.target).data('next');
//THIS IS SENDING BACK VALUE OF KEY OF OBJECT, NOT OF OBJECT.  THIS I WHERE I NEED MY HELP.
	console.log(newScene);

	loadScene(newScene);

});






