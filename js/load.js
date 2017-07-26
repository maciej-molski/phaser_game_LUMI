//load.js
var loadState={
    preload: function(){
        var loadingLabel = game.add.text(80, 150, 'loading...',
        {font: '30px Courier', fill: '#ffffff'});

        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.PageAlignHorizontally = true;
        game.scale.PageAlignVertically = true;
        game.stage.backgroundColor = '#000000';

        /**** Load graphics assets ****/
        game.load.spritesheet('characters', 'assets/sprites/metalslug_monster39x40.png', 39, 40);
        game.load.spritesheet('enemies', 'assets/sprites/metalslug_mummy37x45.png', 37, 45);
        /**** Load audio assets ****/

    },
    create: function(){
        game.state.start('title');
    }
};
