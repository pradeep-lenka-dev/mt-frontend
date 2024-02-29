import { Component, OnInit, ViewChild } from '@angular/core';
import { AddFormComponent } from '../../shared/add-form/add-form.component';
import { ModalService } from '../../shared/modal.service';
import { expenseService } from '../../services/expense.service';
import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  showModal: boolean = false;
  // @ViewChild('AddFormComponent')
  @ViewChild(AddFormComponent) addFormComponent: AddFormComponent | undefined;

  //private addFormComponent: AddFormComponent;
  constructor(private ModalService: ModalService,
    private expenseservice: expenseService,
    private authservice: AuthService) { }
  allExpense
  totalExpense

  ngOnInit(): void {
    this.getAllExpense()

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  modalStyle: string = 'modal-style-primary';
  modalTitle: string = 'Info Confirmation';
  modalBody: string = 'This is a Information Confirmation message';
  modalButtonColor: string = 'btn-primary';
  getConfirmationValue(value: any) {
    if (value == 'Save click') {
      console.log(value);
    }
  }
  isModalOpen: boolean = false;

  async openModal() {
    //this.addFormComponent.nativeElement.style.display = 'block';

    // await this.ModalService.add({ title: "Add your expence", message: "pass your message ", body: "pass body", cancelBtnText: "No", })
    this.ModalService.add({ title: "Add your expence", message: "pass your message ", body: "pass body", cancelBtnText: "No", }).then((updatedData) => {
      console.log('Modal dismissed', updatedData);
      //this.allExpense = updatedData.updatedExpense
      this.getAllExpense()
      // this.data = { ...updatedData };
    })
      .catch(() => {
        console.log('Modal dismissed');
      });
  }

  // async openModal() {
  //   return await this.addFormComponent.open();
  // }
  getAllExpense() {
    this.expenseservice.getExpense().subscribe(
      (response) => {
        this.allExpense = response.expense
        this.totalExpense = 0;

        for (let i = 0; i < this.allExpense.length; i++) {
          this.totalExpense += this.allExpense[i].expenseAmount;

        }

        console.log("calll this.totalExpense ------>>>", this.totalExpense)

        //is.users = response; // Assign the response to your users array
        console.log(response.expense
        )
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
      //  console.log("call", Allexpense)
    )
  }

  closeModal() {
    this.showModal = false;
  }

}
