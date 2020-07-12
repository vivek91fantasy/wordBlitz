// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { ITouchable } from "./IToggle";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BoundChecker extends cc.Component implements ITouchable{
    size: cc.Vec2;
    anchor: cc.Vec2;
    bounds: cc.Vec2;
    
    onLoad(){
       this.size = new cc.Vec2(this.node.width, this.node.height);
       this.anchor = new cc.Vec2(this.node.anchorX, this.node.anchorY);
    }
   
    isTouchable(touchPoint: cc.Vec2): boolean {

        return  this.isTouchPointInsideBoundingBox(touchPoint, this.node.getBoundingBox());
    
    }

    isTouchPointInsideBoundingBox(touch: cc.Vec2, rect: cc.Rect): boolean
    {
        return (touch.x >= rect.xMin && touch.y >= rect.yMin && touch.x <= rect.xMin && touch.y <= rect.yMax);
    }


   
}
