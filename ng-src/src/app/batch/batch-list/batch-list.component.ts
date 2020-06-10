import { Batch } from 'src/app/batch/batch';
import { Component, OnInit } from '@angular/core';
import { BatchService } from '../batch.service';

@Component({
  selector: 'app-batch-list',
  templateUrl: './batch-list.component.html',
  styleUrls: ['./batch-list.component.css']
})
export class BatchListComponent implements OnInit {
  batches: Batch[];
  constructor(
    private batchservice: BatchService
  ) { }

  ngOnInit(): void {
    this.batchservice.getBatches().subscribe( (data: Batch[]) => {
      this.batches = data;
      console.log(data);
    }, err => console.log(err));
  }
  deleteBatch(id: string){
    alert('batch deleted');
  }
}
