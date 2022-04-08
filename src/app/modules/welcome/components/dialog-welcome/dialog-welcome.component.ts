import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'inetum-dialog-welcome',
  templateUrl: './dialog-welcome.component.html',
  styleUrls: ['./dialog-welcome.component.scss']
})
export class DialogWelcomeComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {id: string , title:string, img:string}
  ) { }

  ngOnInit(): void {
  }

}
