// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { TouchHandler } from "../controller/TouchHandler";
import IToggle, { ITouchable } from "./IToggle";

const {ccclass, property} = cc._decorator;

@ccclass
export default class WordTile extends  cc.Component implements IToggle{
   
  
    isSelected: boolean;
    



    @property(cc.Label)
    alphabetValue: cc.Label;

    onLoad(){
        let num = Math.floor(Math.random() * 100);
        this.alphabetValue.string = ""+num; 
    }

   

    onSelect(): void {

        this.isSelected = !this.isSelected;
 
     }

   
}
