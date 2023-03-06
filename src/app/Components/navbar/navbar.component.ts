import { Component } from '@angular/core';
import { MenuItem } from 'src/app/menu-item';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(){}

  menuItems: MenuItem[] = [
    {
      label: 'Home',
      icon: 'home',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'About',
      icon: 'help',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    // {
    //   label: 'Contact',
    //   icon: 'contacts',
    //   showOnMobile: false,
    //   showOnTablet: false,
    //   showOnDesktop: true
    // },
    {
      label: 'Certificates',
      icon: 'school',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Services',
      icon: 'local_laundry_service',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true
    },

    // {
    //   label: 'Blog',
    //   icon: 'rss_feed',
    //   showOnMobile: false,
    //   showOnTablet: false,
    //   showOnDesktop: false
    // },
  ];
}
