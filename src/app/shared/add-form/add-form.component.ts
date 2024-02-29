//import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Component, EventEmitter, Injectable, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbActiveModal, NgbModal, NgbModalConfig, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from '../modal.service';
import { expenseService } from '../../services/expense.service';
@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.scss'
})
@Injectable()
export class AddFormComponent implements OnInit {

  expenseForm: FormGroup;

  @ViewChild('AddFormComponent') private modalContent: TemplateRef<AddFormComponent>
  @Output() newConfirmationEvent = new EventEmitter<string>();
  @Input() modalStyle: any;
  @Input() title: any;
  @Input() modalBody: any;
  @Input() message: any;
  @Input() modalButtonColor: any;

  private modalRef!: NgbModalRef;

  constructor(config: NgbModalConfig,
    private modalService: NgbModal,
    private activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private expenseservice: expenseService) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit(): void {
    var date = new Date()
    this.expenseForm = this.formBuilder.group({
      expenseName: [''],
      expenseCategory: [''],
      expenseAmount: [],
      expenseDate: [],

    })

  }
  onSubmit() {
    console.log("jkkjkjkjkjkjk", this.expenseForm.value)
    this.expenseservice.addExpense(this.expenseForm.value).subscribe(
      (response) => {
        this.activeModal.close(response);
        // this.modalService.dismissAll(response);
        return response
        console.log(response)
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    )

  }

  closeModal() {

    this.modalService.dismissAll();

  }
}