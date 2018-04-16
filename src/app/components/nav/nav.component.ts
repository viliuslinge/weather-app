import { Component, OnInit, Input } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() data: any[];

  selectedTab;

  constructor() { }

  ngOnInit() {
  }
  onSelectTab(tab) {
    this.selectedTab = this.data[tab.index];
  }
}
