//play state

var playState={
    player: {
        xDest: null,
        yDest: null
    },
    enemy: {

    },
    create: function(){
        var self = this;
        self.player = game.add.sprite(100,100,'characters');
        self.player.frame = 0;
        game.add.existing(self.player);
        self.player.anchor.setTo(0.5,1);
        self.player.animations.add('wait', [0,1,2,3,4], 5);
        game.input.activePointer.capture = true;
        game.physics.enable(self.player, Phaser.Physics.ARCADE);
    },
    update: function(){
        var self = this;
        self.player.animations.play('wait');
        if(game.input.activePointer.isDown){
            self.player.xDest = game.input.x;
            self.player.yDest = game.input.y;
        }
        self.moveplayer(game.input.x, game.input.y);
    },
    moveplayer: function(){
        var self=this;
        if(Math.floor(self.player.x/2) == Math.floor(self.player.xDest/2)){
            self.player.body.velocity.x=0;
        }
        else if (Math.floor(self.player.x) < Math.floor(self.player.xDest)){
            self.player.body.velocity.x = 80;
            self.player.scale.x = -1;
        }
        else if (Math.floor(self.player.x) > Math.floor(self.player.xDest)){
            self.player.body.velocity.x = -80;
            self.player.scale.x = 1;
        }
        if(Math.floor(self.player.y/2) == Math.floor(self.player.yDest/2)){
            self.player.body.velocity.x=0;
        }
        else if (Math.floor(self.player.y) < Math.floor(self.player.yDest)){
            self.player.body.velocity.y = 80;
        }
        else if (Math.floor(self.player.y) > Math.floor(self.player.yDest)){
            self.player.body.velocity.y = -80;
        }
    }
}
