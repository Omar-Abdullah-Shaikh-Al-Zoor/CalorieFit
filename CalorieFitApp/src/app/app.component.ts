import { Component } from '@angular/core';
import { DataService } from './data.service';
import {User} from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CalorieFitApp';
  users: User[] = [];
  constructor(private dataService: DataService) {}
  ngOnInit() {
    // this.dataService.getUsers().subscribe(data => {
    //   this.users = data;
    //   console.log(this.users);
    // });
  }
}
