//play state

var playState={
    create: function(){
        var player = game.add.sprite(50,50,'characters');
        player.frame = 0;
        game.add.existing(player);
        player.anchor.setTo(.5,1);
    },
    update: function(){

    }
}
