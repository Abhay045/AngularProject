import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  userForm: FormGroup;
  studentData: any;


  constructor(private fb: FormBuilder) {

    this.studentData = [];

    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      id: ['',[ Validators.required]],
      course: ['', Validators.required ],
      number: ['', [Validators.required,Validators.pattern('[0-9]+$')]]
    })
  }
  get name() {
    return this.userForm.get('name'); 
    }
    get id() {
      return this.userForm.get('id'); 
     }
     get course() {
      return this.userForm.get('course'); 
     }
     get number() {
      return this.userForm.get('number'); 
     }
   


  addItem() {
    // add validations here
    
    if (this.userForm.invalid) {
      // alert("please fill all required fields");
      return;
    } else{

    this.studentData.push(this.userForm.value);
    this.userForm.reset();
    alert("Successfull!");
    }

  }

  reset() {
    this.userForm.reset();
  }



}
