//################# Ahmed Rashad ################
import { Component, Inject, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor() {}
  ngOnInit() {
    AOS.init();
  }
}
