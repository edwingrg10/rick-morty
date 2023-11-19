import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CharacterService } from '../../../characters/services/character.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() filterOptions: any = [];
  @Output() getCharactersFiltered = new EventEmitter<any>();
  form: FormGroup = new FormGroup({});
  isLoading: boolean = false;
  filtered: boolean = false;
  constructor(
    private characterService: CharacterService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.form = this.createFormGroup();
  }

  createFormGroup() {
    const group = this.fb.group({});
    this.filterOptions.forEach((field: any) => {
      group.addControl(field.key, this.fb.control(null, Validators.required));
    });
    return group;
  }

  searchCharacters() {
    let queryString = Object.entries(this.form.value).map(([clave, valor]) => `${clave}=${valor}`).join('&');
    this.characterService.getCharactersFilter(queryString).subscribe((data) => {
      this.getCharactersFiltered.emit(data.results);
      this.filtered = true;
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
    });
  }

  cleanFilters() {
    this.isLoading = true;
    this.characterService.getCharacters().subscribe((data) => {
      this.getCharactersFiltered.emit(data.results);
      this.filtered = false;
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
    });
  }
}
