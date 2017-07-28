//play state
var cursors;
var map;
var playState={
    player: null,
    mob: null,
    layer: null,
    shadowTexture: null,
    lightFlag: false,

    create: function(){
        var self = this;

        map = game.add.tilemap('level', 8, 8);
        map.addTilesetImage('tiles');
        // map.setCollisionBetween(54, 62);

        map.setCollision([0]);
        self.layer = map.createLayer(0, 320, 320);
        // this.layer.debug = true;
        self.layer.resizeWorld();

        map.setTileIndexCallback(2, self.LightOn, this);
        // map.setTileIndexCallback(1, self.LightOff, this);


        cursors = game.input.keyboard.createCursorKeys(game);
        self.player = new Player(200,200);
        game.add.existing(self.player);
        game.physics.enable(self.player, Phaser.Physics.ARCADE);

        // self.mob = game.add.group();
        // self.mob.add(Enemy(100,100));
        // self.mob.add(Enemy(200,100));
        // self.mob.add(Enemy(100,200));
        // self.mob.add(Enemy(200,200));
        // self.mob.forEach(function(enemy,index){
        //     game.physics.enable(enemy, Phaser.Physics.ARCADE);
        //     enemy.body.immovable = true;
        // });
        //game.input.activePointer.capture = true;

        // Create the shadow texture
        this.shadowTexture = game.add.bitmapData(this.game.width, this.game.height);

        // Create an object that will use the bitmap as a texture
        var lightSprite = game.add.image(0, 0, this.shadowTexture);

        // Set the blend mode to MULTIPLY. This will darken the colors of
        // everything below this sprite.
        lightSprite.blendMode = Phaser.blendModes.MULTIPLY;
        console.log(self.lightFlag);
        console.log()

    },
    LightOn: function(){
        if(this.lightFlag == false){
            this.shadowTexture.context.fillStyle = 'rgb(0, 0, 0)';
            this.shadowTexture.context.fillRect(0, 0, this.game.width, this.game.height);
            // console.log('lighton');
            this.shadowTexture.dirty = true;
            this.lightFlag = true;
        }
    },
    LightOff: function(){
            this.shadowTexture.context.fillStyle = 'rgb(255, 255, 255)';
            this.shadowTexture.context.fillRect(0, 0, this.game.width, this.game.height);
            // console.log('lightoff');
            this.shadowTexture.dirty = true;
            this.lightFlag = false;
    },
    update: function(){
        var self = this;
        this.lightFlag = false;
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
        if(this.lightFlag==false){ self.LightOff(); }
        // console.log('lightFlag: '+this.lightFlag);
    }
}

function Player(x,y){
    var player = game.add.sprite(x,y,'characters');

    player.frame=0;
    player.frame = 0;
    player.anchor.setTo(0.5,0.5);
    player.animations.add('wait', [0,1,2,3], 10);

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

    // enemy.update = function(){
    //
    // }
    //
    // enemy.stop = function (){
    //
    // }
    return enemy;
}
