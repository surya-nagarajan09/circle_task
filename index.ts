interface  circleConfig{
  radius?: number;
}

class circle{
  circleRadius: number;
  constructor(obj: circleConfig)
  {
    this.circleRadius = obj.radius;

  }
  getradius():number {
    return this.circleRadius;
  }
  setRadius(obj:circleConfig):void
    {
        this.circleRadius=obj.radius;
  }
  getarea(): number{
    return (Math.PI*this.circleRadius*this.circleRadius)
  }
  getcircum(): number {
    return(Math.PI*2*this.circleRadius)
  }
}

(<HTMLHtmlElement>(document.getElementById("radiusbutton"))).addEventListener("click", () => {
  let radius = +((<HTMLInputElement>document.getElementById("radius")).value)
  let c: circleConfig = {
    radius:radius
  }
  let cir = new circle(c);
  (<HTMLHtmlElement>document.getElementById("area")).innerHTML = cir.getarea().toFixed(2);
});
(<HTMLHtmlElement>(document.getElementById("circumbutton"))).addEventListener("click", () => {
  let radius = +((<HTMLInputElement>document.getElementById("radius")).value)
  let c: circleConfig = {
    radius:radius
  }
  let cir = new circle(c);
  (<HTMLHtmlElement>document.getElementById("circum")).innerHTML = cir.getcircum().toFixed(2);
});
(<HTMLHtmlElement>(document.getElementById("reset"))).addEventListener("click", () => {
  (<HTMLHtmlElement>document.getElementById("area")).innerHTML = "";
  (<HTMLHtmlElement>document.getElementById("circum")).innerHTML = "";
  
})



