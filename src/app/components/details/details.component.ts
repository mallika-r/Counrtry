import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/core/country.model';
import { CountryService } from 'src/app/core/country.service';
import * as dt from '../../../assets/data.json'
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from '@angular/common'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  
  country: Country= dt[0];
  countryId :any ;

  constructor(private readonly countryService: CountryService,private location: Location,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.countryId = this.route.snapshot.paramMap.get("id")
    this.countryService.getCountries()
    .subscribe((data: any) => {
      this.country = data.find(cnty=>cnty.id === this. countryId  );
    }); 
  }

  onBack(){
    this.location.back()
  }

}
