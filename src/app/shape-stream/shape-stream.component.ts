import { Observable } from 'rxjs/Rx';
import { Component, OnInit, Input } from '@angular/core';
import { Shape } from '../shape';

@Component({
  selector: 'shape-stream',
  templateUrl: './shape-stream.component.html',
  styleUrls: ['./shape-stream.component.css']
})
export class ShapeStreamComponent implements OnInit {

  @Input()
  name : string; 

  @Input()
  shapes : Array<Shape> = []; 

  shapeCount = 0; 
  constructor() { }

  ngOnInit() {
  }


}
