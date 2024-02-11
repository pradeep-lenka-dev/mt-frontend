import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashobrd',
  templateUrl: './dashobrd.component.html',
  styleUrl: './dashobrd.component.scss'
})
export class DashobrdComponent implements OnInit {

  constructor(
    private router:Router

  ){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  logout() {
    localStorage.removeItem('userData')
    this.router.navigate(['login'])
  }

}
