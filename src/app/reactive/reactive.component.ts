import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms"; //Validator

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  ngOnInit() {
  }

    userForm = new FormGroup({
     Name : new FormControl('',Validators.required),
     Email : new FormControl('',[Validators.required, Validators.email]),
     Gender : new FormControl('',Validators.required),
     Age : new FormControl('',Validators.required),
     Aadhar : new FormControl('',Validators.required)
   });

    //This is For every element. But we can use only one for all, see below.
  //  get Name(){   
  //    return this.userForm.get('Name'); 
  //  }
  //  get Email(){
  //    return this.userForm.get('Email');
  //  }
  //  get Age(){
  //    return this.userForm.get('Age');
  //  }
  //  get Gender(){
  //   return this.userForm.get('Gender');
  // }
  // get Aadhar(){
  //   return this.userForm.get('Aadhar');
  // }

  get f() { return this.userForm.controls; }  //This is only one for all

  submitted = false;

  onSubmit(){
    this.submitted = true;

    if(this.userForm.invalid){
      return;
    }
    alert('Success! \n' + JSON.stringify(this.userForm.value));
    this.userForm.reset();
  }

}
