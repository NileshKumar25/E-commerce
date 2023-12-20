import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { signUp } from '../data-type';


@Component({
  selector: 'seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent implements OnInit {

  constructor(private seller:SellerService, private router:Router){ }

  ngOnInit(): void { }

  signUp(data:signUp){
    this.seller.userSignUp(data).subscribe((result)=>{
      if(result){
        this.router.navigate(["seller-home"])
      }
    })
  

  }

}
