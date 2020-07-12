

const {ccclass, property} = cc._decorator;

@ccclass
export default interface IToggle  {

    isSelected: boolean;

    onSelect(): void;
  
}

export interface ITouchable{
    size: cc.Vec2;
    anchor: cc.Vec2;

    isTouchable(touchPoint: cc.Vec2): boolean;
}
