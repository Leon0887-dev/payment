import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-alert',
  templateUrl: './message-alert.component.html',
  styleUrls: ['./message-alert.component.scss']
})
export class MessageAlertComponent implements OnInit {

  @Input() 
  mensagem = 'mensagem de erro'
  constructor() { }

  ngOnInit(): void {
  }

}
