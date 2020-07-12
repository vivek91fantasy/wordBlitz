// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;



export default interface ITouchHandler{

    onTouchDown(touch: any): void

    onTouchUp(touch: any): void

    onTouchCancel(touch: any): void

    onTouchMove(touch: any): void

}
