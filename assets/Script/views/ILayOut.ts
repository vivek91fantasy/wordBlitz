// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;


export type PaddingData = {
    width: number,
    height: number,
    padding: number,
    size: number,
}

export  interface ILayOut {

   
    draw(size: number, data: any[][]): void;

}

export interface ILayOutConfig{
    paddingData: PaddingData,

    layOutData: any[][]

    getLayOutConfig(screenWidth: number, screenHeight: number): PaddingData; 

}

export  interface ILayOutEffects {

    fall(): void;

    rotate(): void;
}

export interface ILayOutLine{

    drawPos: number[]

    drawLine(i: number, j: number): void
}
