import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;
  rightEnabled:boolean;
  leftEnabled:boolean ;
  upEnabled:boolean ;
  downEnabled:boolean;

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Shuttle in flight.';
       this.takeOffEnabled=false;
    }
 }

 moveRocket(rocketImage, direction) {
  this.rightEnabled = false;
  this.leftEnabled= false;
  this.upEnabled = false;
  this.downEnabled = false;
  if (direction === 'right' && this.width<=460000 ) {
     let movementRight = parseInt(rocketImage.style.left) + 10 + 'px';
     rocketImage.style.left = movementRight;
     this.width = this.width + 10000;
  }else if (this.width>460000){
    this.checkRocketImagePosition();
    this.rightEnabled = true;
  }
  if (direction === 'left' && this.width>-10000) {
    let movementLeft = parseInt(rocketImage.style.left) - 10 + 'px';
    rocketImage.style.left = movementLeft;
    this.width = this.width - 10000;
 }else if (this.width<10000){
  this.checkRocketImagePosition();
  this.leftEnabled = true;
}
 if (direction === 'up' && this.height<=330000) {
  let movementUp = parseInt(rocketImage.style.bottom) + 10 + 'px';
  rocketImage.style.bottom = movementUp;
  this.height = this.height + 10000;
} else if(this.height>330000){
  this.checkRocketImagePosition();
  this.upEnabled = true;
}
if (direction === 'down' && this.height>=10000) {
  let movementDown = parseInt(rocketImage.style.bottom) - 10 + 'px';
  rocketImage.style.bottom = movementDown;
  this.height = this.height - 10000;
}else if (this.height<10000){
  this.checkRocketImagePosition();
  this.downEnabled = true;
}
}

checkRocketImagePosition(){
if(this.height>=330000 || this.height<=10000 || this.width>=460000 || this.width<-10000){
  this.color = 'orange';
} else {
  this.color = 'blue';
}
}

}
