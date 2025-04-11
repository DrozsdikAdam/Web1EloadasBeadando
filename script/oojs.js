class Image 
{
    constructor(src, x, y, width, height) 
    {
        this.kep = document.createElement("img");
        this.kep.src = src;
        this.kep.style.position = "absolute";
        this.kep.style.left = x+"px";
        this.kep.style.top = y+"px";
        this.kep.width = width;
        this.kep.height = height;
        document.querySelector(".kep").appendChild(this.kep);
    }
    
    show() {
        this.kep.style.visibility = "visible";
    }
    
    hide() {
        this.kep.style.visibility = "hidden";
    }
    
    putAt(x, y) {
        this.kep.style.left = x+"px";
        this.kep.style.top = y+"px";        
    }
    
    resize(width, height) {
        this.kep.width = width;
        this.kep.height = height;    
    }

    newimage(){
        let randomNum = Math.floor(Math.random() * 5) + 1;
        this.kep.src = "images/" + randomNum + ".png";
        this.show();
    }
    returntonormal(x,y,width,height)
    {
        this.kep.style.left = 10 + "px";
        this.kep.style.top = 10 +"px";
        this.kep.width = 100;
        this.kep.height = 100;
    }
    
}