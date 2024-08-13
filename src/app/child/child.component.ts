import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit {

  constructor(){}


  @Output() updateItemEvent  = new EventEmitter<string>();
  ngOnInit(): void {
    
  }

}
