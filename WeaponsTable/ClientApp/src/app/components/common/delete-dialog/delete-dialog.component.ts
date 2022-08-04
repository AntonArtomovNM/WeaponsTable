import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.less']
})
export class DeleteDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeleteData,
  ) { }

  closeDialog(): void {
    this.dialogRef.close();
  }

  onDelete(){
    this.data.onDelete();
    this.dialogRef.close();
  }
}

export interface DeleteData {
  name: string;
  type: string;
  onDelete: Function;
}

