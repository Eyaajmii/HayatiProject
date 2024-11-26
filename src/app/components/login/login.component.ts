import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  LoginForum!: FormGroup;
  constructor(private authService: AuthentificationService, private router: Router, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.LoginForum=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
    });
  }
  login(){
    const { email, password } = this.LoginForum.value;
    this.authService.connecter(email,password).subscribe((response)=>{
      if(response.length>0){
        this.router.navigate(['/gestion']);
      }else{
        alert("Email or Password incorrect"); 

      }
    })
    }
    //Validation
    get Emails(){
      return this.LoginForum.get('Email');
    }
    get Passwords(){
      return this.LoginForum.get('Password');
    }
      
}


