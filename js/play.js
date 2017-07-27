//play state
var cursors;
var map;
var playState={
    player: null,
    mob: null,
    layer: null,

    create: function(){
        var self = this;

        map = game.add.tilemap('level', 16, 16);
        map.addTilesetImage('tiles');
        map.setCollisionBetween(54, 62);

        // map.setCollision([54, 55, 56, 57, 58, 59, 60, 61, 62]);
        self.layer = map.createLayer(0);
        // this.layer.debug = true;
        self.layer.resizeWorld();


        cursors = game.input.keyboard.createCursorKeys(game);
        self.player = new Player(300,200);
        game.add.existing(self.player);
        game.physics.enable(self.player, Phaser.Physics.ARCADE);

        self.mob = game.add.group();
        self.mob.add(Enemy(100,100));
        self.mob.add(Enemy(200,100));
        self.mob.add(Enemy(100,200));
        self.mob.add(Enemy(200,200));
        self.mob.add(Enemy(400,200));
        self.mob.forEach(function(enemy,index){
            game.physics.enable(enemy, Phaser.Physics.ARCADE);
            enemy.body.immovable = true;
        });
        //game.input.activePointer.capture = true;
    },
    update: function(){
        var self = this;
        self.player.animations.play('wait');
        // if(game.input.activePointer.isDown){
        //     self.player.xDest = game.input.x;
        //     self.player.yDest = game.input.y;
        // }
        game.physics.arcade.collide(self.player, self.mob, function(){
            self.player.stop();
        });
        self.player.update();
        game.physics.arcade.collide(self.player, self.layer);
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

    enemy.xDest = x;
    enemy.yDest = y;

    enemy.frame = 14;
    game.add.existing(enemy);
    game.physics.enable(enemy, Phaser.Physics.ARCADE);
    enemy.anchor.setTo(.5, 1);
    enemy.scale.x = -1;
    enemy.body.immovable = true;

    enemy.gotoXY = function (x,y) {
        // if(Math.round(self.player.x/10) == Math.round(self.player.xDest/10)){
        //     self.player.body.velocity.x = 0;
        // }
        // else if (Math.floor(self.player.x) < Math.floor(self.player.xDest)){
        //     self.player.body.velocity.x = 80;
        //     self.player.scale.x = 1;
        // }
        // else if (Math.floor(self.player.x) > Math.floor(self.player.xDest)){
        //     self.player.body.velocity.x = -80;
        //     self.player.scale.x = -1;
        // }
        // if(Math.round(self.player.y/10) == Math.round(self.player.yDest/10)){
        //     self.player.body.velocity.y=0;
        // }
        // else if (Math.floor(self.player.y) < Math.floor(self.player.yDest)){
        //     self.player.body.velocity.y = 80;
        // }
        // else if (Math.floor(self.player.y) > Math.floor(self.player.yDest)){
        //     self.player.body.velocity.y = -80;
        // }
    }

    enemy.update = function(){

    }

    enemy.stop = function (){

    }
    return enemy;
}
