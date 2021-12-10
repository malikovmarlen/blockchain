import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { products } from '../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [DatePipe]
})
export class ProductListComponent {
  products = products;
  _MyregisterForm: FormGroup;
  TodayDate = "19-11-2021";
  constructor(private formBuilder: FormBuilder, private datePipe: DatePipe) {
    this._MyregisterForm = this.formBuilder.group({
      today_Date: [this.getTransformedDate(this.TodayDate), Validators.required]
    });
  }
  private getTransformedDate(date) {
    let date1 = date.split("-");
    let newDate = date1[2] + "-" + date1[1] + "-" + date1[0];
    return newDate;
  }

  onSubmit() {
    const date = this.datePipe.transform(
      this._MyregisterForm.get("today_Date").value,
      "dd-MM-yyyy"
    );
    alert('Delivery date: ' + date);
  }
  share() {
    window.alert('The product has been shared!');
  }
   onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/