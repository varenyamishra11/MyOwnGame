class Game{
    constructor(){
        this.gameBg=loadImage("Images/seaBg1.png");
        this.introBg=loadImage("Images/Instructions_page_updated.png")
        this.endBg=loadImage("Images/GameEndScreen.jpg")

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
        this.binsImg=loadImage("Images/Waste/newBins.png")
        /*this.paperDustbinImg=loadImage("Images/Waste/Paper_Dustbin.png")
        this.plasticDustbinImg=loadImage("Images/Waste/Plastic_Dustbin.png")
        this.glassDustbinImg=loadImage("Images/Waste/Glass_Dustbin.png")
        this.metalDustbinImg=loadImage("Images/Waste/metalBin.png")*/

        this.PlasticBottleImg=loadImage("Images/Waste/plasticBottle.png");
        //this.bluePlasticImg=loadImage("Images/Waste/bluePlastic_bag.png");
        this.yellowPlasticImg=loadImage("Images/Waste/Yellow_Plastic_Bag.png");
        this.crushedCanImg=loadImage("Images/Waste/crushedCan.png");
        this.AluminiumCanImg=loadImage("Images/Waste/Aluminium_can.png");
        this.glassBottleImg=loadImage("Images/Waste/glassBottle.png")
        
        this.player=createSprite(50,height-150)
        this.player.debug=true;
        this.player.setCollider("circle",35,90,20)
        this.playerImg=loadImage("Images/girl2CollectingShellsNoBg.png")
        this.player.addImage("player",this.playerImg);
        this.bins=createSprite(1120,557);
        this.bins.addImage("Dustbins",this.binsImg);
        this.bins.scale=1.8
       /* this.plasticDustbin=createSprite(1019,565);
        this.paperDustbin=createSprite(1163,557);
        this.glassDustbin=createSprite(1307,557);
        this.metalDustbin=createSprite(1219,557);
        this.paperDustbin.addImage("paper",this.paperDustbinImg);
        this.glassDustbin.addImage("glass",this.glassDustbinImg);
        this.plasticDustbin.addImage("plastic",this.plasticDustbinImg);
        this.metalDustbin.addImage("Metal",this.metalDustbinImg);
        this.plasticDustbin.scale=0.5;*/

        this.shellGroup=new Group();
        this.coralGroup=new Group();
        this.weedGroup=new Group();
        this.plastic1Group=new Group();
        this.plastic2Group=new Group();
        this.metal1Group=new Group();
        this.metal2Group=new Group();
        this.glassGroup=new Group();

        this.Plastic1Btn=createButton("Dispose bottle in 'Plastic' Bin")
        this.Plastic1Btn.position(593,118)
        this.Plastic1Btn.hide();

        this.Plastic2Btn=createButton("Dispose polythene in 'Plastic' Bin")
        this.Plastic2Btn.position(593,118)
        this.Plastic2Btn.hide();

        this.Metal1Btn=createButton("Dispose can in 'Metal' Bin")
        this.Metal1Btn.position(593,118)
        this.Metal1Btn.hide();

        this.Metal2Btn=createButton("Dispose can in 'Metal' Bin")
        this.Metal2Btn.position(593,118)
        this.Metal2Btn.hide();

        this.GlassBtn=createButton("Dispose bottle in 'Glass' Bin")
        this.GlassBtn.position(593,118)
        this.GlassBtn.hide();

    }

    

    play(){
        background(this.gameBg);
    }

    introduce(){
        background(this.introBg);
    }

    end(){
        background(this.endBg);
    }

    scoreCondition(){
        if(score>=100 && score<=106){
            score=score+25;
            swal({
                title: "That's Awesome",
                text: "You got Bonus of +25 points!!",
                icon: "success",
                button: "Oh Yess!!",
              });
        }

    }
        
        

    spawnShells(){

       if(frameCount%150===0){
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

        for (let index = 0; index <this.shellGroup.length; index++) {
            if(frameCount%1150===0){
                this.shellGroup[index].destroy();
            }
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

       for (let index = 0; index <this.coralGroup.length; index++) {
        if(frameCount%2525===0){
            this.coralGroup[index].destroy();
        }
    }

    if(frameCount%700===0){
        var weed = createSprite(random(300,windowWidth-50),random(windowHeight-180,windowHeight-300));
        weed.debug=true;
        weed.addImage("weed",this.weedImg); 
        weed.scale=0.2;  
        this.weedGroup.add(weed);    
       }

       for (let index = 0; index <this.weedGroup.length; index++) {
        if(frameCount%1535===0){
            this.weedGroup[index].destroy();
        }
    }

    if(frameCount%1350===0){
        var plasticBottle = createSprite(random(300,windowWidth-50),random(windowHeight-180,windowHeight-300));
        plasticBottle.debug=true;
        plasticBottle.addImage("plasticBottle",this.PlasticBottleImg); 
        plasticBottle.scale=0.1;  
        this.plastic1Group.add(plasticBottle);    
       }

       for (let index = 0; index <this.plastic1Group.length; index++) {
        if(frameCount%2882===0){
            this.plastic1Group[index].destroy();
        }
    }

       /*if(frameCount%939===0){
        var bluePlastic = createSprite(random(300,windowWidth-50),random(windowHeight-180,windowHeight-300));
        bluePlastic.debug=true;
        bluePlastic.addImage("bluePlastic",this.bluePlasticImg); 
        bluePlastic.scale=0.2;  
        this.wasteGroup.add(bluePlastic);    
       }*/

       if(frameCount%1447===0){
        var yellowPlastic = createSprite(random(300,windowWidth-50),random(windowHeight-180,windowHeight-300));
        yellowPlastic.debug=true;
        yellowPlastic.addImage("yellowPlastic",this.yellowPlasticImg); 
        yellowPlastic.scale=0.2;  
        this.plastic2Group.add(yellowPlastic);    
       }

       for (let index = 0; index <this.plastic2Group.length; index++) {
        if(frameCount%2424===0){
            this.plastic2Group[index].destroy();
        }
    }

       if(frameCount%1417===0){
        var crushedCan = createSprite(random(300,windowWidth-50),random(windowHeight-180,windowHeight-300));
        crushedCan.debug=true;
        crushedCan.addImage("Crushed can",this.crushedCanImg); 
        crushedCan.scale=0.1;  
        this.metal1Group.add(crushedCan);    
       }

       for (let index = 0; index <this.metal1Group.length; index++) {
        if(frameCount%2424===0){
            this.metal1Group[index].destroy();
        }
    }

       if(frameCount%1323===0){
        var AluminiumCan= createSprite(random(300,windowWidth-50),random(windowHeight-180,windowHeight-300));
        AluminiumCan.debug=true;
        AluminiumCan.addImage("Aluminium can",this.AluminiumCanImg); 
        AluminiumCan.scale=0.1;  
        this.metal2Group.add(AluminiumCan);    
       }

       for (let index = 0; index <this.metal2Group.length; index++) {
        if(frameCount%2999===0){
            this.metal2Group[index].destroy();
        }
    }
       
       if(frameCount%1567===0){
        var glassBottle= createSprite(random(300,windowWidth-50),random(windowHeight-180,windowHeight-300));
        glassBottle.debug=true;
        glassBottle.addImage("Glass Bottle",this.glassBottleImg); 
        glassBottle.scale=0.2;  
        this.glassGroup.add(glassBottle);    
       }

       for (let index = 0; index <this.glassGroup.length; index++) {
        if(frameCount%3003===0){
            this.glassGroup[index].destroy();
        }
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

        for (let index = 0; index <this.plastic1Group.length; index++) {
            if(this.plastic1Group[index].isTouching(this.player)){
                this.Plastic1Btn.show();
                this.btnStyle()
                console.log(this.plastic1Group.length);
                this.Plastic1Btn.mousePressed(()=>{
                    this.plastic1Group[index].destroy();
                    this.Plastic1Btn.hide();
                    //var R = Math.round(random(0,2));
                setTimeout(() => {
                    textSize(30);
                    text("Bravo!!Hats off to you",934,52)
                }, 1000);
                    score=score+5;
                })
            }
            else{
                this.Plastic1Btn.hide();
            }
        }

        for (let index = 0; index <this.plastic2Group.length; index++) {
            if(this.plastic2Group[index].isTouching(this.player)){
                this.Plastic2Btn.show();
                this.btnStyle()
                console.log(this.plastic2Group.length);
                this.Plastic2Btn.mousePressed(()=>{
                    this.plastic2Group[index].destroy();
                    this.Plastic2Btn.hide();
                    //var Ra = Math.round(random(0,2));
                setTimeout(() => {
                    textSize(30);
                    text("Good job :D. Did you know? 8 million pieces of plastic pollution find their way into our ocean daily.",934,52)
                }, 10000);
                    score=score+5;
                })
            }
            else{
                this.Plastic2Btn.hide();
            }
        }

        for (let index = 0; index <this.metal1Group.length; index++) {
            if(this.metal1Group[index].isTouching(this.player)){
                this.Metal1Btn.show();
                this.btnStyle()
                console.log(this.metal1Group.length);
                this.Metal1Btn.mousePressed(()=>{
                    this.metal1Group[index].destroy();
                    this.Metal1Btn.hide();
                    //var Ran = Math.round(random(0,2));
                setTimeout(() => {
                    textSize(30);
                    text("Bravo👏👏. Did you know? 79% of plastic waste is sent to landfills or the ocean, while only 9% is recycled, and 12% gets incinerated. ",934,52)
                }, 6000);
                    score=score+5;
                })
            }
            else{
                this.Metal1Btn.hide();
            }
        }

        for (let index = 0; index <this.metal2Group.length; index++) {
            if(this.metal2Group[index].isTouching(this.player)){
                this.Metal2Btn.show();
                this.btnStyle()
                console.log(this.metal2Group.length);
                this.Metal2Btn.mousePressed(()=>{
                    this.metal2Group[index].destroy();
                    this.Metal2Btn.hide();
                    //var Rand = Math.round(random(0,2));
                //setTimeout(() => {
                    textSize(30);
                    text("Good job!!You are helping the Environment immensely",934,52)
               // }, 2000);
                    score=score+5;
                })
            }
            else{
                this.Metal2Btn.hide();
            }
        }        

        for (let index = 0; index <this.glassGroup.length; index++) {
            if(this.glassGroup[index].isTouching(this.player)){
                this.GlassBtn.show();
                this.btnStyle()
                console.log(this.glassGroup.length);
                this.GlassBtn.mousePressed(()=>{
                    this.glassGroup[index].destroy();
                    this.GlassBtn.hide();
                    //var Rando = Math.round(random(0,2));
                setTimeout(() => {
                    textSize(30);
                    text("Excellent👏👏you are inspiring others too",934,52)
                }, 6000);
                    score=score+5;
                })
            }
            else{
                this.GlassBtn.hide();
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

    btnStyle(){
        this.Plastic1Btn.class("PBtn");
        this.Plastic2Btn.class("PBtn");
        this.Metal1Btn.class("MBtn");
        this.Metal2Btn.class("MBtn"); 
        this.GlassBtn.class("GBtn");
    }
}