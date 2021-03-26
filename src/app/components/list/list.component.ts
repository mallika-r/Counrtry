import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/core/country.model';
import { CountryService } from "src/app/core/country.service";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  list: Country[] = [];
  srchList: Country[] = [];
  constructor(private readonly countryService: CountryService) {
    countryService.getCountries()
      .subscribe((data: Country[]) => {
        this.list = data.sort((a, b) => (a.name > b.name) ? 1 : -1);
        this.srchList = [...this.list];
      });
  }

  change(event){
    const obj = event.target.value;
    if(obj==="Country"){
    this.srchList =[...this.srchList.sort((a, b) => (a.name > b.name) ? 1 : -1)];
  }
else{
  this.srchList =[...this.srchList.sort((a, b) => (a.region > b.region) ? 1 : -1)];
}
}

  searchCountry(event) {
    const srch = event.target.value;
    if(srch){
    this.srchList =[... this.list.filter(cntry => 
      cntry.name.toLowerCase().includes(srch.toLowerCase())
    )];
  }
  else{
    this.srchList = [...this.list]; 
  }
    console.log(this.srchList);
  }

  ngOnInit() {
  }

}
