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
        game.load.spritesheet('characters', 'assets/sprites/dot8x8.png', 8, 8, 4);
        game.load.spritesheet('enemies', 'assets/sprites/metalslug_mummy37x45.png', 37, 45);
        game.load.tilemap('level', 'assets/maps/level1_lumi.csv', null, Phaser.Tilemap.CSV);
        game.load.image('tiles', 'assets/sprites/tileset8x8.png');
        game.load.spritesheet('tilemap', 'assets/sprites/tileset8x8.png', 8, 8, 4);
        game.load.spritesheet('led', 'assets/sprites/led8x8.png', 8, 8, 2);
        /**** Load audio assets ****/

    },
    create: function(){
        game.state.start('title');
    }
};
