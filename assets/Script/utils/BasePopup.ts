// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import IPopupBase from "./IPopupBase";
import IAnimBase from "./IAnimBase";
import { PopUpType } from "./PopupManager";

const {ccclass, property} = cc._decorator;

export  enum PopUpState {
    Showing = 0,
    Hiding = 1
}

@ccclass
export  class BasePopup extends cc.Component implements IPopupBase, IAnimBase{
    callBack: Function;
    popUpState: PopUpState;

     show(data: Object, callBack: Function): void {
         this.callBack = callBack;
         this.node.active = true;
         this.playAnim(false);
         this.popUpState = PopUpState.Showing;
    }
    
    hide(data: any, callBack: Function = null): void {
        if(this.animation)
        {
            let cb = () =>{
                this.node.active = false;
                this.callBack = callBack;
                if(this.callBack)
                this.callBack();
            }
            this.callBack = cb;
        }
        else
        {
            this.node.active = false;
            if(callBack)
                callBack();
        }
    }

    @property({
        type: cc.Animation
    })
    animation: cc.Animation;

    onAnimStart(): void {
       if(this.popUpState == PopUpState.Showing)
       return;
       if(this.callBack)
            this.callBack();
    }
    onAnimEnd(): void {
        if(this.popUpState == PopUpState.Hiding)
       return;
       if(this.callBack)
            this.callBack();

        
    }

    playAnim(reverse: boolean = false): void{
        this.animation.play().wrapMode = reverse ? cc.WrapMode.Reverse : cc.WrapMode.Normal;
    }
   
  

 
}
