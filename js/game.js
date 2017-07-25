//game.js

var game = new Phaser.Game(480, 360, Phaser.AUTO, null, 'gameDiv');

//add each game state

game.state.add('boot', bootState);
game.state.add('load', bootState);
game.state.add('title', bootState);
game.state.add('play', bootState);

//call teh boot state
game.state.start('boot');
