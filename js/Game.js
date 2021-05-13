class Game{
    constructor(){
        this.gameBg=loadImage("Images/seaBg1.png");

        this.shellImg1=loadImage("Images/Shells/Shell1.png")
        this.shellImg2=loadImage("Images/Shells/Shell2.png")
        this.shellImg3=loadImage("Images/Shells/shell3.png")
        this.shellImg4=loadImage("Images/Shells/shell4.png")
        this.shellImg5=loadImage("Images/Shells/Shell5.png")
        this.shellImg6=loadImage("Images/Shells/shell6.png")
        this.shellImg7=loadImage("Images/Shells/shell7.png")
        this.shellImg8=loadImage("Images/Shells/shell8.png")
        this.shellImg9=loadImage("Images/Shells/shell9.png")
        this.shellImg10=loadImage("Images/Shells/shell10.png")
        this.shellImg11=loadImage("Images/Shells/shell11.png")
        this.shellImg12=loadImage("Images/Shells/shell12.png")
        this.shellImg13=loadImage("Images/Shells/shell13.png")
        this.shellImg14=loadImage("Images/Shells/shell14.png")
        this.shellImg15=loadImage("Images/Shells/shell15.png")
        this.shellImg16=loadImage("Images/Shells/Shell16.png")
        this.shellImg17=loadImage("Images/Shells/shell17.png")
        this.coralImg1=loadImage("Images/Coral1.png")
        this.coralImg2=loadImage("Images/Coral2.png")
        this.weedImg=loadImage("Images/Sea weed.png")


        this.player=createSprite(50,height-150)
        this.playerImg=loadImage("Images/girl2CollectingShellsNoBg.png")
        this.player.addImage("player",this.playerImg);
    }

    play(){
        background(this.gameBg);
    }

    spawnShells(){

       if(frameCount%40===0){
        var shell = createSprite(random(300,windowWidth-50),random(windowHeight-180,windowHeight-300));
        var rand = Math.round(random(1,17));
        switch (rand) {
            case 1:shell.addImage("shell",this.shellImg1); 
                break;
            case 2:shell.addImage("shell",this.shellImg2); 
                break;   
            case 3:shell.addImage("shell",this.shellImg3); 
                break;   
            case 4:shell.addImage("shell",this.shellImg4); 
                break;
            case 5:shell.addImage("shell",this.shellImg5); 
                break;
            case 6:shell.addImage("shell",this.shellImg6); 
                break;
            case 7:shell.addImage("shell",this.shellImg7); 
                break;
            case 8:shell.addImage("shell",this.shellImg8); 
                break;
            case 9:shell.addImage("shell",this.shellImg9); 
                break;
            case 10:shell.addImage("shell",this.shellImg10); 
                break;
            case 11:shell.addImage("shell",this.shellImg11); 
                break;
            case 12:shell.addImage("shell",this.shellImg12); 
                break;
            case 13:shell.addImage("shell",this.shellImg13); 
                break;
            case 14:shell.addImage("shell",this.shellImg14); 
                break;
            case 15:shell.addImage("shell",this.shellImg15); 
                break;
            case 16:shell.addImage("shell",this.shellImg16); 
                break;
            case 17:shell.addImage("shell",this.shellImg17); 
                break;
                
                
            default:
                break;
        }
        shell.scale=0.2;
       }

       if(frameCount%1000===0){
        var coral1 = createSprite(random(300,windowWidth-50),random(windowHeight-180,windowHeight-300));
        coral1.addImage("coral",this.coralImg1);
        coral1.scale=0.3;      
       }

       if(frameCount%1000===0){
        var coral2 = createSprite(random(300,windowWidth-50),random(windowHeight-180,windowHeight-300));
        coral2.addImage("coral",this.coralImg2);
        coral2.scale=0.2;      
       }

    if(frameCount%700===0){
        var weed = createSprite(random(300,windowWidth-50),random(windowHeight-180,windowHeight-300));
        weed.addImage("weed",this.weedImg); 
        weed.scale=0.2;      
       }
        drawSprites(); 
    }
    moveLeft(){
        this.player.x=this.player.x-5
    }
    moveRight(){
        this.player.x=this.player.x+5
    }
    moveDown(){
        this.player.y=this.player.y+5
    }
    moveUp(){
        this.player.y=this.player.y-5
    }
    
}