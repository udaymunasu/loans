import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.scss'],
})
export class SearchCustomerComponent implements OnInit {
  color = '';
  priceto = 0;
  pricefrom = 0;
  size = 'm';
  name = 'abc';
  editname = 'xyz';


  isDirty = true;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.color = params?.color;
      this.priceto = params?.priceto;
      this.pricefrom = params?.pricefrom;
      this.size = params?.size;
      this.name = params?.name;
      this.editname = params?.editname;
    });
  }
}
