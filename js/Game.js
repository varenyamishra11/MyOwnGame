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
        this.paperDustbinImg=loadImage("Images/Waste/Paper_Dustbin.png")
        this.plasticDustbinImg=loadImage("Images/Waste/Plastic_Dustbin.png")
        this.glassDustbinImg=loadImage("Images/Waste/Glass_Dustbin.png")

        this.PlasticBottleImg=loadImage("Images/Waste/plasticBottle.png");
        //this.bluePlasticImg=loadImage("Images/Waste/bluePlastic_bag.png");
        this.yellowPlasticImg=loadImage("Images/Waste/Yellow_Plastic_Bag.png");
        this.crushedCanImg=loadImage("Images/Waste/crushedCan.png");
        this.AluminiumCanImg=loadImage("Images/Waste/Aluminium_can.png");
        
        this.player=createSprite(50,height-150)
        this.player.debug=true;
        this.player.setCollider("circle",35,90,20)
        this.playerImg=loadImage("Images/girl2CollectingShellsNoBg.png")
        this.player.addImage("player",this.playerImg);
        this.plasticDustbin=createSprite(1019,565);
        this.paperDustbin=createSprite(1163,557);
        this.glassDustbin=createSprite(1307,557);
        this.paperDustbin.addImage("paper",this.paperDustbinImg);
        this.glassDustbin.addImage("glass",this.glassDustbinImg);
        this.plasticDustbin.addImage("plastic",this.plasticDustbinImg);
        this.plasticDustbin.scale=0.5;

        this.shellGroup=new Group();
        this.coralGroup=new Group();
        this.weedGroup=new Group();
        this.plasticGroup=new Group();
        this.metalGroup=new Group();
        this.glassGroup=new Group();

      
    }

    play(){
        background(this.gameBg);
    }

    spawnShells(){

       if(frameCount%200===0){
        var shell = createSprite(random(300,windowWidth-50),random(windowHeight-180,windowHeight-300));
        shell.debug=true;
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

    this.shellGroup.add(shell);
       }

       if(frameCount%1200===0){
        var coral1 = createSprite(random(300,windowWidth-50),random(windowHeight-180,windowHeight-300));
        coral1.debug=true;
        coral1.addImage("coral",this.coralImg1);
        coral1.scale=0.3;      
        this.coralGroup.add(coral1);
       }

       if(frameCount%1500===0){
        var coral2 = createSprite(random(300,windowWidth-50),random(windowHeight-180,windowHeight-300));
        coral2.debug=true;
        coral2.addImage("coral",this.coralImg2);
        coral2.scale=0.2;    
        this.coralGroup.add(coral2);  
       }

    if(frameCount%700===0){
        var weed = createSprite(random(300,windowWidth-50),random(windowHeight-180,windowHeight-300));
        weed.debug=true;
        weed.addImage("weed",this.weedImg); 
        weed.scale=0.2;  
        this.weedGroup.add(weed);    
       }

    if(frameCount%850===0){
        var plasticBottle = createSprite(random(300,windowWidth-50),random(windowHeight-180,windowHeight-300));
        plasticBottle.debug=true;
        plasticBottle.addImage("plasticBottle",this.PlasticBottleImg); 
        plasticBottle.scale=0.1;  
        this.plasticGroup.add(plasticBottle);    
       }

       /*if(frameCount%939===0){
        var bluePlastic = createSprite(random(300,windowWidth-50),random(windowHeight-180,windowHeight-300));
        bluePlastic.debug=true;
        bluePlastic.addImage("bluePlastic",this.bluePlasticImg); 
        bluePlastic.scale=0.2;  
        this.wasteGroup.add(bluePlastic);    
       }*/

       if(frameCount%847===0){
        var yellowPlastic = createSprite(random(300,windowWidth-50),random(windowHeight-180,windowHeight-300));
        yellowPlastic.debug=true;
        yellowPlastic.addImage("yellowPlastic",this.yellowPlasticImg); 
        yellowPlastic.scale=0.2;  
        this.plasticGroup.add(yellowPlastic);    
       }

       if(frameCount%917===0){
        var crushedCan = createSprite(random(300,windowWidth-50),random(windowHeight-180,windowHeight-300));
        crushedCan.debug=true;
        crushedCan.addImage("Crushed can",this.crushedCanImg); 
        crushedCan.scale=0.1;  
        this.metalGroup.add(crushedCan);    
       }

       if(frameCount%923===0){
        var AluminiumCan= createSprite(random(300,windowWidth-50),random(windowHeight-180,windowHeight-300));
        AluminiumCan.debug=true;
        AluminiumCan.addImage("Aluminium can",this.AluminiumCanImg); 
        AluminiumCan.scale=0.1;  
        this.metalGroup.add(AluminiumCan);    
       }
       
        drawSprites(); 
    }

    

    calculateScore(){
        for (let index = 0; index <this.shellGroup.length; index++) {
            if(this.shellGroup[index].isTouching(this.player)){
                score=score+2;
                this.shellGroup[index].destroy();
            }
            
        }

        for (let index = 0; index <this.coralGroup.length; index++) {
            if(this.coralGroup[index].isTouching(this.player)){
                score=score+5;
                this.coralGroup[index].destroy();
            }
            
        }

        for (let index = 0; index <this.weedGroup.length; index++) {
            if(this.weedGroup[index].isTouching(this.player)){
                 score=score-4;
                this.weedGroup[index].destroy();
            }
            
        }
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
    dropWaste(){
        /*if(this.plasticGroup.isTouching(this.player)){
            this.plasticGroup.x=this.player.x;
            this.plasticGroup.y=this.player.y;
            if(this.plasticGroup.isTouching(this.plasticDustbin)){
                score=score+5
                this.plasticGroup[index].destroy();
            }
        }*/


        for (let index = 0; index <this.plasticGroup.length; index++) {
            if(this.plasticGroup[index].isTouching(this.player)){
                PlasticBtn.show();
                 //score=score+5;
                //this.plasticGroup[index].destroy();
            }
            
        }
    }

    plasticDisposed() {
  for (let index = 0; index <this.plasticGroup.length; index++) {
    this.plasticGroup[index].destroy();
  }
}
    
}