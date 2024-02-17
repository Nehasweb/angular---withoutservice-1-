import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-batchdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batchdetails.component.html',
  styleUrl: './batchdetails.component.css'
})
export class BatchdetailsComponent
 {
     public Batches = [
      {"Name":"PPA","Duration":"3 months","Fees":19500},
      {"Name":"LB","Duration":"3.5 months","Fees":18500},
      {"Name":"Paython","Duration":"4months","Fees":19000},
      {"Name":"Angular","Duration":"4.5 months","Fees":19600},

      
     ];
}
