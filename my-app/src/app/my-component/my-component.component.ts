import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponentComponent } from '../second-component/second-component.component';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [CommonModule, SecondComponentComponent, ReactiveFormsModule],
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.scss'
})
export class MyComponentComponent {
  username = 'Alexey';
  isLogin = false;
  users = [
    { id:0, name:"Ivan" },
    { id:1, name:"Pavel" },
    { id:2, name:"Anna" },
  ];
  greet(){
    alert(`Hello ${this.username}`);
  };
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  })
  submit(){
    alert (`${[this.profileForm.value.name]} и ${[this.profileForm.value.email]}`);
  }
} 
 