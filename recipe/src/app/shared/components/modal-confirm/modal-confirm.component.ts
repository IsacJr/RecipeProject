import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent implements OnInit {

  @Input() title: string;
  @Input() message: string;

  constructor() { }

  ngOnInit(): void { }

}
