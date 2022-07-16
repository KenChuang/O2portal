import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title = 'Dashboard';
  page = 'dashboard';

  constructor() { }

  ngOnInit(): void {
    this.getSessionStorage();
  }

  changePage(page: string) {
    this.page = page;
    this.setSessionStorage();
    this.getTitle();
  }

  setSessionStorage() {
    window.sessionStorage.setItem('page', this.page);
  }

  getSessionStorage() {
    const page = window.sessionStorage.getItem('page');
    if (page) {
      this.page = page;
      this.getTitle();
    }
  }

  getTitle() {
    if (this.page === 'dashboard') {
      this.title = 'Dashboard';
    } else if (this.page === 'server-management') {
      this.title = 'Server List';
    } else if (this.page === 'o-cloud-management') {
      this.title = 'O-Cloud List';
    } else if (this.page === 'nf-management') {
      this.title = 'NF List';
    } else if (this.page === 'fault-management') {
      this.title = 'Fault Management';
    } else if (this.page === 'performance-management') {
      this.title = 'Performance Management';
    } else if (this.page === 'software-management') {
      this.title = 'Software Management';
    }
  }
}
