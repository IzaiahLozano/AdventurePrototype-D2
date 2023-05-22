class ProductionIntro extends Phaser.Scene {
    constructor() {
        super('Production_intro');
    }

    preload(){
        this.load.path = './assets/';
        this.load.image('sn', 'Studio.png');
        this.load.image('star', 'Star.png');
        //this.load.audio('ptheme', 'intro.mp3');
    }

    create() {

        //create image object 
        let prod = this.add.image(
            400,//x
            250,//y
            'sn',//studioname
        )
        prod.setScale(0.8) //resize

        //create image object 
        let star1 = this.add.image(
            0,//x
            100,//y
            'star',//imagename
        )
        star1.setScale(0.1) //resize

        let star2 = this.add.image(
            0,//x
            100,//y
            'star',//imagename
        )
        star2.setScale(0.1) //resize

        // let theme = this.sound.add(
        //  "ptheme",
        // );
        // theme.play();

        this.tweens.add({
            targets: prod,
            alpha: {start: 0, to: 1},
            duration: 7000,
            //ease: "Sine",
            //repeat: -1
         });


         this.tweens.add({
            targets: star1,
            x:271,
            y:230,
            duration: 4000,
            ease: 'Linear',
            //repeat: -1,
        });


        this.tweens.add({
            targets: star2,
            x:544,
            y:230,
            duration: 4000,
            ease: 'Linear',
            //repeat: -1,
        });


        this.tweens.add({
            targets: [star1, star2],
            scale: {start: 0.1, to: 14},
            delay: 7000,
            duration: 4000,
            //ease: "Sine",
            //repeat: -1
         });


         this.tweens.add({
            targets: prod,
            delay: 7000,
            alpha: {start: 0, to: 1, to : 0},
            duration: 2000,
            //ease: "Sine",
            //repeat: -1
         });

         this.tweens.add({
            targets: [star1, star2],
            delay: 9000,
            alpha: {from: 1, to: 0},
            duration: 3000,
            ease: "Sine",
            //repeat: -1
         });

        

        this.time.delayedCall(8000, () => {
            this.cameras.main.fadeOut(2000, 0,0,0);
        });
        //this.input.on('pointerdown', () => theme.stop);
        //this.input.on('pointerdown', () => this.scene.start('Story'));
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