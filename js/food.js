class Food{
    constructor(){
this.foodStock=foodStock
this.lastFed=lastFed
    }
    getFoodStock(){

    }
    updateFoodStock(){

    }
    deductFood(){

    }
    display(){
    var x=80,y=100;

    imageMode(CENTER);
    Image(this.Image,720,220,70,70);

    if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
            if(i%10==0){
                x=80;
                y=y+50;
            }
            image(this.Image,x,y,50,50);
            x=x+30;
        }
    
    }
    }
    bedroom(){
        background(bedroom,550,500);  
    }
      
    garden(){
        background(garden,550,500);  
    } 

    washroom(){
        background(washroom,550,500); 
    }
}