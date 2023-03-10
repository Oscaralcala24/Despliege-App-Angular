import { Component } from '@angular/core';
import { Person } from './person.model'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  sizes =  ['XS','S','M','L','XL']

  model = new Person(1, "Oscar", "Alcala ESpigares","alum.oalcalae.2020@iesalixar.org",this.sizes[2]);

  submitted = false;

  onSubmit(){
    this.submitted = true
  }

  newPerson(){
    this.model = new Person(1, '','','','')
  }
}
