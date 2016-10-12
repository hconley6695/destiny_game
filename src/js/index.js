// Javascript Entry Point
import $ from 'jquery';
import scenarios from './scenarios';

function slide(scenario) {
	var buttons = scenario.paths.map (path => {
		return `<li><button> ${path.label} </button></li>`
	});
	return `<p> ${scenario.message}</p>
			<ul>${buttons.join('')}</ul>`

}

function loadScene(scenario) {
	var eachSlide = slide(scenario);
	$('.app').html(eachSlide);

}

loadScene(scenarios.start_scenario);




