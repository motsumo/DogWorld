import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss'],
})
export class ModalWindowComponent {
  constructor(private modalService: NgbModal) {}

  open(content: any) {
    this.modalService.open(content, {
      ariaLabelledBy: 'addNewBreedModalLabel',
    });
  }
}
