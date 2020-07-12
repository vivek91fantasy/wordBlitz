// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import ITouchHandler from "./ITouchHanlder";

const {ccclass, property} = cc._decorator;

@ccclass
export abstract class TouchHandler extends cc.Component implements ITouchHandler {
   
    onEnable(){
        this.node.on(cc.Node.EventType.TOUCH_START,  this.onTouchDown.bind(this));
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove.bind(this));
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchUp.bind(this));
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel.bind(this));
    }

    onDisable(){
        this.node.off(cc.Node.EventType.TOUCH_START,  this.onTouchDown.bind(this));
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove.bind(this));
        this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchUp.bind(this));
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel.bind(this));
    }
    abstract onTouchDown(touch: any): void
   abstract onTouchUp(touch: any): void 
   abstract onTouchCancel(touch: any): void 
   abstract onTouchMove(touch: any): void 
}
