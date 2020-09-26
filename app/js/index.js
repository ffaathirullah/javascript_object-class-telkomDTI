/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Title')
/* coding examples */

class person{
  constructor(name){
    this.name = name;
  }
  toString(){
    return (`Name : ${this.name}`);
  }
}

function Person(name){
  this.name = name
  this.greeting = function() {
    alert("Hi " + this.name + "");
  }
}

let person1  = new Person("husna");
let person2  = new Person("fachrul");

person1.greeting()
person2.greeting()
