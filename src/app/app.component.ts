import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Shape } from './shape';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  shapeCount = 0; 

  shapes : Array<Shape> = []; 

  shapeStream : Observable<Shape>; 

  ngOnInit() {

    this.shapeStream = Observable.timer(500,1000)
      .map( event => this.createNewShape() );
    
    this.shapeStream
   // .filter( shape  => shape["color"] == "red" )
    .map( shape  => { shape["type"]="rect"; return shape} )
    .subscribe( event => this.addShape(event))
    //this.shapeStream.filter( event => event.type=="rect").subscribe( event => this.addShape(event))
    //;
  }

  addShape(shape : Shape)
  {
    this.shapes.push(shape);
    //this.shapes.unshift(shape);
    //this.shapes.splice(10,10);
  }

  createNewShape() : Shape{
    this.shapeCount ++; 

    let type = "rect"; 
    if (Math.random()>0.5)
      type = "circle";

    let color = "red"; 
    if (Math.random()<0.3)
      color = "blue";
    if (Math.random()>0.6)
      color = "green";

    let shape = {
      id : this.shapeCount,
      type: type,
      color: color
    };
    return shape; 
  }


}
