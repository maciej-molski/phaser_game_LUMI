//game.js

var game = new Phaser.Game(320, 320, Phaser.AUTO, null, 'gameDiv');
// var keyboard = new Keyboard(game);

//add each game state

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('title', titleState);
game.state.add('play', playState);

//call teh boot state
game.state.start('boot');
