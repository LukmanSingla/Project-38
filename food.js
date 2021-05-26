class Food{
    constructor(){
    reference=database.ref("Pet/");
    reference.on("value",function(data){
        petposition=data.val();
        foodN=petposition.food;
        timeN=petposition.time;
        a=petposition.time2;
    });
    // pet = createSprite(200,350,10,10);
    // pet.addAnimation("pet",petImg);
    // pet.addAnimation("pet1",petImg2);
    // pet.scale=0.2;
    this.button3=createButton(gameState);
    this.button3.position(300,30);
    this.button3.style("border-radius:20px;background-color:blue;color:white");
    this.button=createButton();
    this.button2=createButton();
    this.button4=createButton();
    this.button5=createButton();
    this.button6=createButton();
    this.button7=createButton();
    this.button4.html('I want to take bath');
    this.button4.position(240,60);
    this.button5.html('I am very sleepy');
    this.button5.position(380,60);
    this.button6.html("Let's play");
    this.button6.position(100,100); 
    this.button7.html("Let's play in park");
    this.button7.position(200,100); 

    this.button2.html('Feed the Food');
    this.button2.position(120,60);
    this.button3.hide();
    this.button.html('Add Food');
    this.button.position(30,60);
    this.button3.html('hungry');
    }


    getState(){
        var refer=database.ref("gameState");
        refer.on("value",function(data){
            gameState=data.val();
        });
    }
    updateGame(state){
        firebase.database().ref("/").update({
            gameState:state
        })
    }
    changeState(){
        this.button4.mousePressed(()=>{
            this.updateGame("washroom");
        })
        this.button5.mousePressed(()=>{
            this.updateGame("sleep");
        })
        this.button6.mousePressed(()=>{
            this.updateGame("play2");
        })
        this.button7.mousePressed(()=>{
            this.updateGame("play");
        })
    }


    hungry(){
        fill("white");
        textSize(20);
        text("I am your puppy muku and I am hungry",100,150);
 
        text("Milk Bottles remaining : " + foodN,150,450);
 
        this.button.mousePressed(function(){
            if(petposition != undefined && foodN<20){
                reference.update(
                    {
                        food:foodN+1,
                        time:timeN,
                        time2:a
                    }
                );
            }
            
        });

        this.button2.mousePressed(() =>{
            if(petposition != undefined) {
            reference.update(
                {
                    food:foodN-1,
                    time:timeN,
                    time2:a
                }
            );      
        }
    }
    )
        bg="green";
    }
}