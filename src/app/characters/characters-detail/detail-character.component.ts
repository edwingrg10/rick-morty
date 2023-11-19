import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-character',
  templateUrl: './detail-character.component.html',
  styleUrls: ['./detail-character.component.css'],
})
export class DetailCharacterComponent implements OnInit {
  constructor( 
    @Inject(MAT_DIALOG_DATA) public character: any,
    private dialogRef: MatDialogRef<DetailCharacterComponent>,
  ) {
   }

  ngOnInit() {
  }

}
