class ProductionIntro extends AdventureScene {
    constructor() {
        super('Production_intro');
    }

    preload(){
        this.load.path = './assets/';
        this.load.image('sn', 'Studio.png');
        this.load.image('star', 'Star.png');
        this.load.image('preview', 'starting-room.jpg')
        this.load.image('start', 'playbtn.png')
        this.load.image('title', 'gtitle.png')
        this.load.image('light', 'light.png')
        this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
        
    }

    create() {

        this.cameras.main.setBackgroundColor('#fffff1');

        //create image object 
        let prod = this.add.image(
            960,//x
            540,//y
            'sn',//studioname
        )
        prod.setScale(2) //resize

        //create image object 
        let star1 = this.add.image(
            0,//x
            0,//y
            'star',//imagename
        )
        star1.setScale(.1) //resize

        let star2 = this.add.image(
            0,//x
            0,//y
            'star',//imagename
        )
        star2.setScale(.1) //resize

        this.tweens.add({
            targets: prod,
            alpha: {start: 0, to: 1},
            duration: 4000,
         });


         this.tweens.add({
            targets: star1,
            x:635,
            y:490,
            duration: 3500,
            ease: 'Linear',
            scale: 0.2,
            //repeat: -1,
        });


        this.tweens.add({
            targets: star2,
            x:1320,
            y:490,
            duration: 3500,
            ease: 'Linear',
            scale: 0.2,
            //repeat: -1,
        });


        this.tweens.add({
            targets: [star1, star2],
            scale: {start: 0.3, to: 50},
            delay: 6000,
            duration: 4000,
            //ease: "Sine",
            //repeat: -1
         });


         this.tweens.add({
            targets: prod,
            delay: 6000,
            alpha: {start: 0, to: 1, to : 0},
            duration: 2000,
            //ease: "Sine",
            //repeat: -1
         });

        

        this.time.delayedCall(8000, () => {
            this.cameras.main.fadeOut(2000, 0,0,0);
        });





        //MENU PART:

        let mainu = this.add.image(
            960, 
            540,
            "preview",
         )
         mainu.setScale(1)

         this.tweens.add({
            targets: mainu,
            x:960,
            y:540,
            alpha: {start: 0, to: 1},
            delay: 11000,
            duration: 1000
        });

        this.time.delayedCall(11000, () => {
            this.cameras.main.fadeIn(2000, 0,0,0);
        });



        let flicker = this.add.image(
            920,//x
            420,//y
            'light',//studioname
        )
        flicker.setScale(1)

        this.tweens.add({
            // x: 900,
            // y: 900,
            targets: flicker,
            delay: 11000,
            alpha: {start:0, to: 1},
            ease: 'Sine.InOut',
            duration: 3000,
            repeat: -1,
            yoyo: true,
        })



        let title = this.add.image(
            850,//x
            450,//y
            'title',//studioname
        )
        title.setScale(1)


        this.tweens.add({
            // x: 900,
            // y: 900,
            targets: title,
            delay: 13000,
            alpha: {start:0, to: 1},
            duration: 3000,
        })


        let play = this.add.image(
            930,//x
            580,//y
            'start',//studioname
        )
        play.setScale(0.3)

        this.tweens.add({
            // x: 900,
            // y: 900,
            targets: play,
            delay: 14000,
            alpha: {start:0, to: 1},
            duration: 3000,
        })



        play.setInteractive();
        play.on('pointerover', () => {
            this.tweens.add({
                targets: play,
                scaleX: .5,
                scaleY: .5,
                duration: 200
            });
        });
        
        play.on('pointerout', () => {
            this.tweens.add({
                targets: play,
                scaleX: .3,
                scaleY: .3,
                duration: 200
            });
        });


        play.on('pointerdown', () => {
            this.cameras.main.fadeOut(1000, 0, 0, 0);
            this.time.delayedCall(1000, () => this.scene.start('beginning'));
        });


    }


    


}



class Room1 extends AdventureScene {
    constructor() {
        super('beginning');
    }

    preload(){
        this.load.path = './assets/';
        this.load.image('rm', 'starting-room.jpg');
        this.load.image('player', 'guy.png');
        this.load.image('light', 'light.png');
        this.load.image('knob', 'Knob.png');
        this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');

    }


    onEnter() {
        const plains = this.add.image(0, 0, 'rm');
        plains.setScale(.75);
        plains.setOrigin(0);
        plains.setDepth(-1);

        let guy = this.add.image(
            800,
            840,
            'player'
            );
            guy.setScale(.5);

            let originalY = 840;
            guy.setInteractive()
            .setOrigin(0.5,0.5)
            .on('pointerdown', () => {
                this.showMessage("I've gotta get outta of here somehow.");
                this.add.tween({
                    targets: guy,
                    y: '-=' + this.s, 
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100,
                    onComplete: function () {
                      guy.y = originalY; // Reset the y position to the original value
                    }
                  });
            });


        let flicker = this.add.image(
            690,//x
            365,//y
            'light',//studioname
        )
        flicker.setScale(1)

        this.tweens.add({
            // x: 900,
            // y: 900,
            targets: flicker,
            alpha: {start:0, to: 1},
            ease: 'Sine.InOut',
            duration: 3000,
            repeat: -1,
            yoyo: true,
        })


        let door = this.add.image(
            1400,//x
            575,//y
            'knob',//studioname
        )
            

        door.setInteractive()
            .setOrigin(0.5,0.5)
            .on('pointerover', () => {
                this.showMessage("Wait...did he leave the door open? Is this a trap?");
                this.tweens.add({
                    targets: door,
                    scaleX: 1.5,
                    scaleY: 1.5,
                    duration: 200
                });
            });

        door.on('pointerout', () => {
            this.tweens.add({
                targets: door,
                scaleX: 1,
                scaleY: 1,
                duration: 200
            });
        });


        door.on('pointerdown', () => {
            this.showMessage("This is my chance!");
            this.gotoScene('garage');
        });


        let bed = this.add.circle(400, 790, 16, 0xffffff);

        bed.setInteractive()
        .on('pointerover', () => {
            this.showMessage("I won't be missing this bed anymore.");

        });


    }

}



class Garage extends AdventureScene {
    constructor() {
        super('garage');
    }

    preload(){
        this.load.path = './assets/';
        this.load.image('rm2', 'Garage.jpg');
        this.load.image('player', 'guy.png');
        this.load.image('screw', 'Flathead.png');
        this.load.image('paperclip', 'Clip.png');
        this.load.image('knob', 'Knob.png');
    }


    onEnter() {
        const plains = this.add.image(0, 0, 'rm2');
        plains.setScale(.75);
        plains.setOrigin(0);
        plains.setDepth(-1);

        let guy = this.add.image(
            800,
            840,
            'player'
            );
            guy.setScale(.5);

            let originalY = 840;
            guy.setInteractive()
            .setOrigin(0.5,0.5)
            .on('pointerdown', () => {
                this.showMessage("There's gotta be soemthing around here that can help me unlock the door.");
                this.add.tween({
                    targets: guy,
                    y: '-=' + this.s, 
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100,
                    onComplete: function () {
                      guy.y = originalY; // Reset the y position to the original value
                    }
                  });
            });


            let door = this.add.image(
                395,//x
                115,//y
                'knob',//studioname
            )
            door.setScale(.5)
                
    
            door.setInteractive()
                .setOrigin(0.5,0.5)
                .on('pointerover', () => {
                    this.showMessage("I'm never going back in there.");
                    this.tweens.add({
                        targets: door,
                        scaleX: 1,
                        scaleY: 1,
                        duration: 200
                    });
                });
    
            door.on('pointerout', () => {
                this.tweens.add({
                    targets: door,
                    scaleX: .5,
                    scaleY: .5,
                    duration: 200
                });
            });




            let pc = this.add.image(
                1375,//x
                325,//y
                'paperclip',//studioname
            )
            pc.setScale(.04)
                
    
            pc.setInteractive()
                .setOrigin(0.5,0.5)
                .on('pointerover', () => {
                    this.showMessage("I used to pick locks with this when I was younger.");
                    this.tweens.add({
                        targets: pc,
                        scaleX: 0.1,
                        scaleY: 0.1,
                        duration: 200
                    });
                });
    
            pc.on('pointerout', () => {
                this.tweens.add({
                    targets: pc,
                    scaleX: 0.04,
                    scaleY: 0.04,
                    duration: 200
                });
            });


            pc.on('pointerdown', () => {
                this.showMessage("Definitely should take this. ");
                this.gainItem('Paper clip');
                this.tweens.add({
                    targets: pc,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => pc.destroy()
                });
            });

            let screw = this.add.image(
                1375,//x
                365,//y
                'screw',//studioname
            )
            screw.setScale(.04)
                
    
            screw.setInteractive()
                .setOrigin(0.5,0.5)
                .on('pointerover', () => {
                    this.showMessage("Quieter than a hammer I guess.");
                    this.tweens.add({
                        targets: screw,
                        scaleX: 0.1,
                        scaleY: 0.1,
                        duration: 200
                    });
                });
    
            screw.on('pointerout', () => {
                this.tweens.add({
                    targets: screw,
                    scaleX: 0.04,
                    scaleY: 0.04,
                    duration: 200
                });
            });


            screw.on('pointerdown', () => {
                this.showMessage("This might come in Handy. ");
                this.gainItem('Flathead Screwdriver');
                this.tweens.add({
                    targets: screw,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => screw.destroy()
                });
            });


        let stair = this.add.rectangle(100, 275, 300, 700, 0xffffff);
        stair.setAlpha(.1);
        stair.setAngle(-7)


        stair.setInteractive()
                .setOrigin(0.5,0.5)
                .on('pointerover', () => {
                    this.showMessage("I hope the doors unlocked.");
                    
                });
    
            stair.on('pointerdown', () => {
                this.showMessage("This should be the way out.");
                this.gotoScene('stairs');
            });


    }

}    





class Stairs extends AdventureScene {
    constructor() {
        super('stairs');
    }

    preload(){
        this.load.path = './assets/';
        this.load.image('st', 'Stairs.jpg');
        this.load.image('player', 'guy.png');
        this.load.image('point', 'arrow.png');
    };


    onEnter() {
        const plains = this.add.image(0, 0, 'st');
        plains.setScale(.75);
        plains.setOrigin(0);
        plains.setDepth(-1);

        let guy = this.add.image(
            800,
            840,
            'player'
            );
            guy.setScale(.5);

            let originalY = 840;
            guy.setInteractive()
            .setOrigin(0.5,0.5)
            .on('pointerdown', () => {
                this.showMessage("I needa get outta here.");
                this.add.tween({
                    targets: guy,
                    y: '-=' + this.s, 
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100,
                    onComplete: function () {
                      guy.y = originalY; // Reset the y position to the original value
                    }
                  });
            });




            let way= this.add.image(
                700,//x
                900,//y
                'point',//studioname
            )
            way.setScale(.3);
            way.setAlpha(0.5);
            way.setDepth(1);



            way.setInteractive()
                .setOrigin(0.5,0.5)
                .on('pointerover', () => {
                    this.showMessage("Did I forget something?");
                    
                });
    
            way.on('pointerdown', () => {
                this.showMessage("I need something else.");
                this.gotoScene('garage');
            });


            let door = this.add.image(
                727,//x
                160,//y
                'knob',//studioname
            )
            door.setScale(0.7);
                
    
            door.setInteractive()
                .setOrigin(0.5,0.5)
                .on('pointerover', () => {
                    this.tweens.add({
                        targets: door,
                        scaleX: 1,
                        scaleY: 1,
                        duration: 200
                    });
                    if (this.hasItem("Flathead Scredriver") && this.hasItem("Paper clip")) {
                        this.showMessage("Let's hope I still know how to do this.");
                    } else {
                        this.showMessage("It's locked. I needa find something to pick it with.");
                    }
                });
    
            door.on('pointerout', () => {
                this.tweens.add({
                    targets: door,
                    scaleX: .7,
                    scaleY: .7,
                    duration: 200
                });
            });
    
    
            door.on('pointerdown', () => {
                this.showMessage("This is my chance!");
                this.gotoScene('garage');
            });

    }




}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Garage, Stairs],//[ProductionIntro, Room1, Garage],
    title: "Adventure Game",
});

