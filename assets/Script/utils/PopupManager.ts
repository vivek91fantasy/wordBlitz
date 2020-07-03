// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

export  enum PopUpType {
    Error = 0, 
    Stats = 1, 
    None = 100
}

@ccclass
export default class PopupManager extends cc.Component {
@property({type: cc.Enum(PopUpType)})
currentPopup: PopUpType = PopUpType.Error;

}
