import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {
  showCountries = false;
  clicks = [];
  count = 0;
  listOfCountries = ['Spain', 'Romania', 'Dinamark', 'Croatia', 'Chehia'];

  ngOnInit(): void {
  }

  onToogleButton() {
    this.showCountries = !this.showCountries;
    // this.clicks.push(this.clicks.length + 1);
    this.clicks.push(new Date())

    this.count = this.clicks.length;
  }
}
