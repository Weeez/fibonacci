import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fib-comp',
  templateUrl: './fib-comp.component.html',
  styleUrls: ['./fib-comp.component.sass']
})
export class FibCompComponent implements OnInit{

  ngOnInit(){
    this.showFibonacci();
  }

  fibArray = [0,1];
  showFibMessage= '';
  inputValue = 2;
  
  showFibonacci(): void {
    let tmpMessage= '';

    for(let i = 0; i < this.inputValue; i++){
      tmpMessage += this.fibArray[i] + ', ';
    }

    tmpMessage = tmpMessage.slice(0, this.showFibMessage.length-2);
    this.showFibMessage = tmpMessage;
  }

  clearMessage(){
    this.showFibMessage = '';
  }

  calculateFibonacci() : void{
    this.clearMessage();
    
    if(this.inputValue > this.fibArray.length){
      let lastIndex = this.fibArray.length-1;
      let lastLastIndex = this.fibArray.length-2;

      while(lastIndex < this.inputValue-1){
        this.fibArray.push(this.fibArray[lastIndex] + this.fibArray[lastLastIndex]);

        lastIndex = this.fibArray.length-1;
        lastLastIndex = this.fibArray.length-2;        
      }
    }
    this.showFibonacci();    
  }
}
