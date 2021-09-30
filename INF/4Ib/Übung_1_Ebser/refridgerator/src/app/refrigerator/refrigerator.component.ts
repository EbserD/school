import { Component, OnInit } from '@angular/core';
import { Refrigerator } from './refrigerator.model';

@Component({
  selector: 'app-refrigerator',
  templateUrl: './refrigerator.component.html',
  styleUrls: ['./refrigerator.component.scss'],
})
export class RefrigeratorComponent implements OnInit {
  constructor(public fridge: Refrigerator) {}

  ngOnInit(): void {}
}
