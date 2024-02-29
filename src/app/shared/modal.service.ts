import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddFormComponent } from './add-form/add-form.component';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private ModalService: NgbModal,
    private http: HttpClient) { }

  async add({ title, message, body, cancelBtnText }) {
    const modalRef = this.ModalService.open(AddFormComponent, { centered: true })
    modalRef.componentInstance.title = title || "defult title";
    modalRef.componentInstance.message = message || "defult message"
    return modalRef.result;
    await modalRef.result.catch()
  }




}
