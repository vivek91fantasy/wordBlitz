// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { BasePopup } from "./BasePopup";
 import CCCMap from "./CCCMAP";
import Network from "../Network/Network";

export  enum PopUpType {
    Error = 0, 
    Stats = 1, 
    None = 100
}



const {ccclass, property} = cc._decorator;

@ccclass
export default class PopupManager extends cc.Component {
@property({type: cc.Enum(PopUpType)})
currentPopup: PopUpType = PopUpType.Error;

@property([BasePopup])
popUps:BasePopup[];

 overLayeredPopups: PopUpType[];





public static instance: PopupManager;

onLoad(){
    PopupManager.instance = this;
}

showPopUp(popUpType: PopUpType, data?: any,cb?: Function): void{
    if(this.currentPopup == popUpType)
    return;

    this.popUps[popUpType].show(data, cb);
    this.currentPopup = popUpType;
    this.overLayeredPopups.push(popUpType);
}

hidePopUp(popUpType: PopUpType, data?: any,cb?: Function): void{
   
    this.popUps[popUpType].hide(data, cb);
    this.overLayeredPopups = this.overLayeredPopups.filter((value: PopUpType, index: number, array: PopUpType[]) => {
        return value != popUpType;
    })

    this.currentPopup = this.overLayeredPopups.length > 0 ? this.overLayeredPopups[this.overLayeredPopups.length] : PopUpType.None;
}

hideCurrentPopUp(){
    this.hidePopUp(this.currentPopup);
}

hideAllPopUp(){
    this.overLayeredPopups.forEach(element => {
        this.hidePopUp(element);
    });
}

}
