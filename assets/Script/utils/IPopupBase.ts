// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { PopUpType } from "./PopupManager";



const {ccclass, property} = cc._decorator;

export default interface IPopupBase{

    popUpType: PopUpType;

    show(data: Object, callBack: Function): void;
    hide(callBack: Function): void;
}
