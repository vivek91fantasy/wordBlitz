// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import {ILayOut, PaddingData, ILayOutConfig, ILayOutLine} from "./ILayOut";
import { Tile } from "../scehma/Tile";
import WordTile from "./WordTile";
import { TouchHandler } from "../controller/TouchHandler";
import BoundChecker from "./BoundChecker";
import {ITouchable} from "./IToggle"

const {ccclass, property} = cc._decorator;

@ccclass
export default class LayOut extends TouchHandler implements ILayOut, ILayOutConfig, ILayOutLine{
    drawPos: number[];
   
   
    
    @property
    paddingData: PaddingData;
  
    layOutData: string[][];

    @property(cc.Prefab)
    tilePrefab: cc.Prefab;

    @property(cc.Vec2)
    origin: cc.Vec2;

    tileArray: WordTile[][];



    onLoad(){
        this.paddingData = this.getLayOutConfig(screen.width, screen.height);
        console.log("padding data is " , this.paddingData);

        this.draw(4, null);
        
    }

    getLayOutConfig(screenWidth: number, screenHeight: number): PaddingData {

        console.log("widht and height are ", screenWidth, "  ", screenHeight);
       return {
        width: 903,
        height: screenHeight,
        padding: 20,
        size: 40,
       };
    
    }
    
    draw(size: number, data: string[][]): void {

        let totalGrid = size * size;

        let width = this.paddingData.width - (this.paddingData.padding * (size - 1)); 
        let sizeX = width / size;
        this.tileArray = [];

        console.log("width ", width);
        console.log("sizeX ", sizeX);
        for(let i = 0; i < size; i++)
        {
            this.tileArray[i] = [];
            for(let j = 0; j < size; j++)
            {
                let pos  = new cc.Vec2(
                    sizeX * j + (this.paddingData.padding * j) + (sizeX / 2),
                    sizeX * i + (this.paddingData.padding * i) + (sizeX / 2)
                );
                console.log(" pos are ", pos);
                let alphaObj = cc.instantiate(this.tilePrefab);
                alphaObj.setParent(this.node);
                alphaObj.width = sizeX;
                alphaObj.height = sizeX;
                alphaObj.setPosition(pos);
                this.tileArray[i].push(alphaObj.getComponent(WordTile));
            }
        }

       
        
    }

    drawLine(i: number, j:number): void {

    }
    
    onTouchDown(touch: any): void {
        console.log("touch down called");
        console.log(this.)
    }
    onTouchUp(touch: any): void {
       console.log("touch up called");


    }
    onTouchCancel(touch: any): void {
        console.log("touch cancel called");
    }
    onTouchMove(event: cc.Event.EventTouch): void {
       // console.log("touch move called", event.touch.getLocation());
        this.checkTouchEvent(event.touch.getLocation(), this.tileArray);
       
    }

    checkTouchEvent(touchPos: cc.Vec2, tileArray: WordTile[][]){
        for(let i = 0; i <tileArray.length; i++)
        {
            for(let j = 0; j < tileArray[i].length; j++)
            {
                let touchable:ITouchable  = tileArray[i][j].getComponent(BoundChecker);
                touchable.isTouchable(touchPos);
            }
        }
    }
}
