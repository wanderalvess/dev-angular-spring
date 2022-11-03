import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Dev } from '../model/dev';
import { Dev } from './../model/dev';
import { DevService } from './../services/dev.service';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.scss']
})
export class DevComponent implements OnInit {

  dev: Observable<Dev[]> = [];
  displayedColumns = ['name','category'];

  constructor(private devService: DevService ) {


  }

  ngOnInit(): void {
    this.dev = this.devService.list();
  }

}
