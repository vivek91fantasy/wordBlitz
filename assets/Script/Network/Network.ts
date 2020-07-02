// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { WordGameState } from "../scehma/WordGameState";

const {ccclass, property} = cc._decorator;
import * as Colyseus from "colyseus";
@ccclass
export default class Network extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    client: Colyseus.Client;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        console.log("state called");
     this.client = new Colyseus.Client("ws://localhost:3000");

        this.client.joinOrCreate<WordGameState>("room1", {}, WordGameState).then((room: Colyseus.Room<WordGameState>) => {
            console.log("room is");
            console.log(room);
            room.onStateChange.once((state: WordGameState) => {
                console.log("state changed once board", state);
                
                state.gameBoard.forEach(element => {
                    console.log(element.letter);
                });
                console.log(state.gameTotalTime);

            })

            room.onStateChange((state: WordGameState) =>{
                console.log("state changerd");
                console.log(state);
            });
            console.log("sending a word");
            room.send("word", "abc");

            room.onMessage("score", (score: string) =>{
                console.log("receive score ", score);
            });
            
        });
    }

    // update (dt) {}
}
