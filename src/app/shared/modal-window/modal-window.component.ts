import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss'],
})
export class ModalWindowComponent {
  @Input() modalHeader = '';
  @Input() openModalButtonText = 'Open Modal';
  @Input() closeButtonText = 'Close';

  constructor(private modalService: NgbModal) {}

  open(content: any) {
    this.modalService.open(content, {
      ariaLabelledBy: 'addNewBreedModalLabel',
    });
  }
}
