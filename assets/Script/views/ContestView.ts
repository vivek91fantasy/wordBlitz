// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import  IContestView, { ContestData } from "./IContestView";


const {ccclass, property} = cc._decorator;

@ccclass
export default class ContestView extends cc.Component implements IContestView{

    setContestData(contestData: ContestData): void {
        
    }
    onSubmission(): void {
        
    }

    @property(cc.Label)
    prizePoolValue: cc.Label = null;
    @property(cc.Label)
    bonusValue: cc.Label = null;
    @property(cc.Label)
    entryValue: cc.Label = null;

  
   
}
