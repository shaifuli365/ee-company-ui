import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-box',
  templateUrl: './layout-box.component.html',
  styleUrls: ['./layout-box.component.scss']
})
export class LayoutBoxComponent implements OnInit {

  public layoutsidebar = false;
  public activeItem: string;

  constructor() {
    document.documentElement.style.setProperty('--theme-deafult', '#3731c4');
  }

  ngOnInit(): void {
  }

  // Is active
  isActive(menuItem) {
    return this.activeItem === menuItem;
  }

  // Sidebar Toggle
  layoutSidebarToggle() {
    this.layoutsidebar = !this.layoutsidebar;
  }

  // collapse
  opensettingcontent(val) {
    if (this.activeItem === val) {
      this.activeItem = '';
    } else {
      this.activeItem = val;
    }
  }

  // Layout Type
  customizeLayoutType(val) {
    if (val === 'rtl') {
      document.body.classList.remove('ltr');
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
      document.body.classList.add('ltr');
    }
  }

  // Set Theme color on scss
  customizeThemeColor(event) {
    console.log('New choice color', event.target.value);
    document.documentElement.style.setProperty('--theme-deafult', event.target.value);
  }

  customizeLayoutDark() {
    document.body.classList.toggle('dark');
  }

}
