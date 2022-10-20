import {Text} from './text.js';

class App {
    constructor() {
        this.setWebgl();

        WebFont.load({
            google: {
                families: ['Hind:70']
            },
            fontactive: () => {
                this.text = new Text();
                this.text.setText(
                    'K',
                    2,
                    document.body.clientWidth,
                    document.body.clientHeight,
                );
            }
        });
    }

    setWebgl() {
        this.renderer = new PIXI.Renderer({
            
        })
    }
} // class App

window.onload = () => {
    new App();
}