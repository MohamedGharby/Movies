import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
Router


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private _AuthService:AuthService , private _Router:Router) { }

  error:string = ""

  registerForm = new FormGroup({
    first_name:new FormControl(null , [Validators.minLength(3) , Validators.maxLength(10) , Validators.required]),
    last_name:new FormControl(null, [Validators.minLength(3) , Validators.maxLength(10) , Validators.required]),
    age:new FormControl(null, [Validators.min(16) , Validators.max(80) , Validators.required]),
    email:new FormControl(null, [ Validators.email , Validators.required]),
    password:new FormControl(null , [Validators.required])
  })

submitRegisterForm(registerForm:FormGroup)
{
this._AuthService.registeration(registerForm.value).subscribe((response)=>{

  if(response.message == "success")
  {
    this._Router.navigate(['/login'])
  }
  else
  {
    this.error = response.errors.email.message ; 
  }
})
}

  ngOnInit(): void {
  }

}
