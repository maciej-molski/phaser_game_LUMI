//play state
var cursors;
var playState={
    player: null,
    mob: null,

    create: function(){
        var self = this;
        cursors = game.input.keyboard.createCursorKeys(game);



        // game.input.activePointer.capture = true;
        game.physics.enable(self.player, Phaser.Physics.ARCADE);
    },
    update: function(){
        var self = this;
        self.player.animations.play('wait');
        // if(game.input.activePointer.isDown){
        //     self.player.xDest = game.input.x;
        //     self.player.yDest = game.input.y;
        // }
        game.physics.arcade.collide(self.player, self.enemy, function(){
            self.stopplayer();
        });
        self.moveplayer();
    }
}

function Player(x,y){
    var player = game.add.sprite(x,y,'characters');

    player.frame=0;
    player.frame = 0;
    player.anchor.setTo(0.5,1);
    player.animations.add('wait', [0,1,2,3,4], 5);

    player.update = function(){
        var self=this;
        self.body.velocity.x=0;
        self.body.velocity.y=0;
        if(cursors.right.isDown){
            self.body.velocity.x = 80;
            self.scale.x = 1;
        }
        else if(cursors.left.isDown){
            self.body.velocity.x = -80;
            self.scale.x = -1;
        }
        if(cursors.up.isDown){
            self.body.velocity.y=-80;
        }
        else if(cursors.down.isDown){
            self.body.velocity.y=80;
        }
    }
    player.stop = function(){
        var self = this;
        self.body.velocity.x = self.body.velocity.y = 0;
    }
    return player;
}

function Enemy(x,y){
    var enemy = game.add.sprite(x,y,'enemies');
    
    enemy.frame = 14;
    game.add.existing(enemy);
    game.physics.enable(enemy, Phaser.Physics.ARCADE);
    enemy.anchor.setTo(.5, 1);
    enemy.scale.x = -1;
    enemy.body.immovable = true;
}
