// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { TouchHandler } from "../controller/TouchHandler";

const {ccclass, property} = cc._decorator;

@ccclass
export default class WordTile extends  TouchHandler{



    onTouchDown(touch: any): void {
        throw new Error("Method not implemented.");
    }
    onTouchUp(touch: any): void {
        throw new Error("Method not implemented.");
    }
    onTouchCancel(touch: any): void {
        throw new Error("Method not implemented.");
    }
    onTouchMove(touch: any): void {
        throw new Error("Method not implemented.");
    }

   
}
