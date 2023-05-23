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
            this.time.delayedCall(1000, () => this.scene.start('Room1'));
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
        this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');

    }


    create(){

        


    }

}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [ProductionIntro],
    title: "Adventure Game",
});