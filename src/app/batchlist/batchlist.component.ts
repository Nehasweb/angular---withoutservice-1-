import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-batchlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batchlist.component.html',
  styleUrl: './batchlist.component.css'
})
export class BatchlistComponent
 {
  public Batches = [
    {"Name":"PPA","Duration":"3 months","Fees":19500},
    {"Name":"LB","Duration":"3.5 months","Fees":18500},
    {"Name":"Paython","Duration":"4months","Fees":19000},
    {"Name":"Angular","Duration":"4.5 months","Fess":19600},

    
   ];
}
