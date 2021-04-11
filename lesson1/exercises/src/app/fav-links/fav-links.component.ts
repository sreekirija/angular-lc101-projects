import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks  = ["https://moonshotpirates.com/blog/5-tips-for-your-personal-growth/","https://moonshotpirates.com/blog/3-important-skills-for-your-future/"];
  constructor() { }

  ngOnInit() {
  }

}
