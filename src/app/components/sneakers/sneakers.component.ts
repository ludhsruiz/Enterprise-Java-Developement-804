import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { Sneaker } from 'src/app/models/sneaker.model';
// import { CustomValidator } from 'src/app/utils/custom-validation';


@Component({
  selector: 'app-sneakers',
  templateUrl: './sneakers.component.html',
  styleUrls: ['./sneakers.component.css']
})
export class SneakersComponent implements OnInit {

  sneakerList: Sneaker[] = [];
  sneaker!: Sneaker;
  
  form: FormGroup;
  
  modelNameField: FormControl;
  priceField: FormControl;
  specialEditionField: FormControl;
  authorField: FormControl;
  creationDateField: FormControl;
  artistCollaboratorField: FormControl;

  specialEdition: boolean = false;
  

  constructor() { 
    
    this.modelNameField = new FormControl('', [Validators.required]);
    this.priceField = new FormControl('', [Validators.required, Validators.min(0.01)]);
    this.specialEditionField = new FormControl(this.specialEdition, []);
    this.authorField = new FormControl('', [Validators.required]);
    this.creationDateField = new FormControl('', [Validators.required]);
    this.artistCollaboratorField = new FormControl('', []);
    
    this.form = new FormGroup({
      modelName: this.modelNameField,
      price: this.priceField,
      specialEdition: this.specialEditionField,
      author: this.authorField,
      creationDate: this.creationDateField,
      artistCollaborator: this.artistCollaboratorField
    });
  }

  ngOnInit(): void {
  }

  onSubmit(formDirective: FormGroupDirective): void {
    if(this.form.valid) {
      this.sneakerList.push(this.form.value); 
      this.form.reset();
      formDirective.resetForm(); 
    }
  }
    
}

