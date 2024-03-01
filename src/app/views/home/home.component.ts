import { Component, OnInit, ViewChild } from '@angular/core';
import { AddFormComponent } from '../../shared/add-form/add-form.component';
import { ModalService } from '../../shared/modal.service';
import { expenseService } from '../../services/expense.service';
import { AuthService } from '../../auth/auth.service';
import { commonService } from '../../services/common.service';
import { Params } from '@angular/router';
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
    private authservice: AuthService,
    private commonservice: commonService) { }
  public allExpense
  public totalExpense
  public recntExpense
  public totalRecentExpense
  public loginUser

  ngOnInit(): void {
    this.getAllExpense()
    this.getRecentExpenses()

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
    this.ModalService.add({ title: "Add your expence", message: "pass your message ", body: "pass body", cancelBtnText: "No", }).then((updatedData) => {
      this.getAllExpense()
    })
      .catch(() => {
        console.log('Modal dismissed');
      });
  }
  getRecentExpenses() {
    interface LoggedInUser {
      userId: string;
      // Add other properties if present
    }
    let temp: LoggedInUser = this.commonservice.getLoggedInUser()
    console.log("🚀 ~ HomeComponent ~ getRecentExpenses ~ temp:", temp)
    // let params: {
    //   userId: temp
    // }

    this.expenseservice.getRecentExpenses(temp).subscribe(
      (response) => {
        this.recntExpense = response.expense
        this.totalRecentExpense = 0;
        for (let i = 0; i < this.recntExpense.length; i++) {
          this.totalRecentExpense += this.recntExpense[i].expenseAmount;
        }
        console.log("🚀 ~ HomeComponent ~ getRecentExpenses ~ this.recntExpense:", this.recntExpense)
      },
      (error) => {
        console.log("🚀 ~ HomeComponent ~ getRecentExpenses ~ error:", error)


      }

    )
  }

  getAllExpense() {
    this.expenseservice.getExpense().subscribe(
      (response) => {
        this.allExpense = response.expense
        this.totalExpense = 0;
        for (let i = 0; i < this.allExpense.length; i++) {
          this.totalExpense += this.allExpense[i].expenseAmount;
        }
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
