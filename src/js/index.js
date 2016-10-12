// Javascript Entry Point
import $ from 'jquery';
import scenarios from './scenarios';

function slide(scenario) {
	
	var buttons = scenario.paths.map(path => {
		return `<li><button data-next="${path.scenario}"> ${path.label} </button></li>`
	});
	
	return `<div><h3> ${scenario.message}</h3></div>
			<ul>${buttons.join('')}</ul>`

}

function loadScene(scenarioName) {
	var scenario = scenarios[scenarioName];
	var eachSlide = slide(scenario);
	$('.app').html(eachSlide);
}


loadScene('start_scenario');

$('.app').on('click', 'button', event => {
	var newScene = $(event.target).data('next');
	loadScene(newScene);

});






