// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import IPopupBase from "./IPopupBase";
import { PopUpType } from "./PopupManager";
import IAnimBase from "./IAnimBase";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ErrorPopup extends cc.Component implements IPopupBase, IAnimBase{
    @property({type: cc.Enum(PopUpType)})
    popUpType: PopUpType;
    @property(cc.Animation)
    animation: cc.Animation;
    show(data: Object, callBack: Function): void {
       
    }
    hide(): void {
        throw new Error("Method not implemented.");
    }
    onAnimStart(): void {
        throw new Error("Method not implemented.");
    }
    onAnimEnd(): void {
        throw new Error("Method not implemented.");
    }

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}
}
