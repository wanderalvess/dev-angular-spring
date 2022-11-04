import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Dev } from './../model/dev';
import { DevService } from './../services/dev.service';


@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.scss']
})
export class DevComponent implements OnInit {

  dev$: Observable<Dev[]>;
  displayedColumns = ['code', 'name', 'document'];

  constructor(
    private devService: DevService,
    public dialog: MatDialog
  ) {

    this.dev$ = this.devService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar clientes.')
        return of([])
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {

  }

}
