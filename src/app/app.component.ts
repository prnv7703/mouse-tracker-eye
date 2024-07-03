import { Component } from '@angular/core';



function func(x: number, y: number, mouseX: number, mouseY: number){
  const dx = mouseX - x;
  const dy = mouseY - y;

  // Calculate the distance between (x, y) and (mouseX, mouseY)
  const distance = Math.sqrt(dx * dx + dy * dy);

  // Calculate the unit vector in the direction of the line
  const unitVectorX = dx / distance;
  const unitVectorY = dy / distance;

  // Scale the unit vector by the desired distance (20 units)
  const scaleFactor = 22;
  const scaledX = unitVectorX * scaleFactor;
  const scaledY = unitVectorY * scaleFactor;

  // Calculate the target point
  const targetX = x + scaledX;
  const targetY = y + scaledY;

  return { x: (targetX - x), y: (targetY - y) };
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'masti';

  eyeBallOneDefaultX !: number;
  eyeBallOneDefaultY !: number;
  eyeBallTwoDefaultX !: number;
  eyeBallTwoDefaultY !: number;

  eyeOnePos !: {x:number, y:number}
  eyeTwoPos !: {x:number, y:number}
  rotate !: number;

  yesButton = 50;
  noButton = 50;

  onMouseMove(event: MouseEvent){
    this.eyeBallOneDefaultX = window.innerWidth/2 - 50 - 35;
    this.eyeBallOneDefaultY = 100 + 35;
    this.eyeBallTwoDefaultY = 100 + 35;
    this.eyeBallTwoDefaultX = window.innerWidth/2 + 50 + 35;

    this.eyeOnePos = func(this.eyeBallOneDefaultX, this.eyeBallOneDefaultY, event.pageX, event.pageY);
    this.eyeTwoPos = func(this.eyeBallTwoDefaultX, this.eyeBallTwoDefaultY, event.pageX, event.pageY);

    if (event.pageX < window.innerWidth/2)
      this.rotate = 0;
    else
      this.rotate = 180;
  }

  onClickNo(){
    if (this.yesButton < 150)
      this.yesButton = this.yesButton * 1.1;
    else
      alert("Arre maan jao na smuuu :(");
  }

  onClickYes(){
    this.yesButton = 50;
    alert("Hehe me too :)\nHappy Birthday Babessss!!!");
  }
}
