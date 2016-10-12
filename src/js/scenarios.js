

var start_scenario = {
	message: 'You are walking along the beach minding your own business when you find an old piece of paper.',
	paths: [
		{label: 'Decide to look for treasure.', scenario: 'goTreasureHunting'},
		{label: 'Throw it back in the ocean.', scenario: 'endGame'	}
		]
};

var endGame = {
	message: 'You continue to walk along the beach, drink a pina colada, and go back to real life the next day, never knowing if the treasure was real.',
	paths: [
		{label: 'Play again.', scenario: 'start_scenario'}
	]
};

var goTreasureHunting = {
	message: 'You notice the X on the map is on an island off of the coast.  You gaze out towards the ocean and see an island about one mile away.  How should you get there?',
	paths: [
		{label: 'By Swimming.  It will be quicker.', scenario: 'sharkAttack'},
		{label: 'By Boat.  It will be safer.', scenario: 'landedOnIsland'}
	]	
};

var sharkAttack = {
	message: 'You start swimming towards the island, but get tired quickly.  You realize that you are surrounded by sharks.  They attack you and you cannot get away.  You die.',
	paths: [
		{label: 'Play again', scenario: 'start_scenario'}
	]
};

var landedOnIsland = {
	message: 'You find someone to take you to the island in a boat.  You land and look around.  A forest is in front of you and the beach seems to continue around the corner of some rocks.  Which way do you go?',
	paths: [
		{label: 'Go into the forest.', scenario: 'insideForest'},
		{label: 'Search the beach.', scenario: 'searchBeach'}
	]
};

var searchBeach = {
	message: 'You search the beach for more clues, but eventually give up.  You get back in the boat and head back to the main land with no treasure but with your life.',
	paths: [
		{label: 'Play again', scenario: 'start_scenario'}
	]
};

var insideForest = {
	message: 'You go into the forest and find a cave.  You enter the cave and see two tunnels.  Which one should you go into?',
	paths: [
		{label: 'The Left Tunnel.', scenario: 'leftTunnel'},
		{label: 'The Right Tunnel.', scenario: 'rightTunnel'}
	]	
};

var leftTunnel = {
	message: 'You chose poorly.  You stumble and trip over a rock.  You reach out to catch yourself but there is nothing there. You fall over a cliff to your death.',
	paths: [
		{label: 'Play again', scenario: 'start_scenario'}
	]	
};

var rightTunnel = {
	message: 'You chose wisely.  After walking for a mile, you enter a vast cavern which houses an enormous treasure of jewelry, gold coins, rubies, emeralds and diamonds.  You realize that you will never have to work again. You win!',
	paths: [
		{label: 'Play again', scenario: 'start_scenario'}
	]
};


export default {
	start_scenario,
	endGame,
	goTreasureHunting,
	sharkAttack,
	landedOnIsland,
	searchBeach,
	insideForest,
	leftTunnel,
	rightTunnel
}






