import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: any[] = [];
  isLoading: boolean = false;
  filterForm: FormGroup = new FormGroup({});
  filterOptions = [
    { label: 'Nombre', key: 'name', type: 'text' },
    { label: 'Genero', key: 'gender', type: 'select', options: [{ label: 'Masculino', value: 'Male' }, { label: 'Femenino', value: 'Female' }] },
    { label: 'Especie', key: 'species', type: 'select', options: [{ label: 'Humano', value: 'Human' }, { label: 'Alien', value: 'Alien' }] },
    { label: 'Estado', key: 'status', type: 'select', options: [{ label: 'Vivo', value: 'Alive' }, { label: 'Muerto', value: 'Dead' }, { label: 'Desconocido', value: 'unknown' }] },
    { label: 'Tipo', key: 'type', type: 'text' }
  ];
  filterOptionsSelected: any = []
  constructor(
    private characterService: CharacterService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
    this.getCharacters();
  }

  createForm() {
    const formControls: any = {};
    this.filterOptions.forEach(option => {
      formControls[option.key] = this.fb.control(false);
    });
    this.filterForm = this.fb.group(formControls);
  }

  getCharacters() {
    this.isLoading = true;
    this.characterService.getCharacters().subscribe((data) => {
      this.characters = data.results;
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
    });
  }

  applyFilter(filterValue: any) {
    filterValue = filterValue.trim().toLowerCase();
  }

  getFilterOptions() {
    this.filterOptionsSelected = this.filterOptions
      .filter(option => this.filterForm.get(option.key)?.value)
      .map(option => option);
  }

  getCharactersFiltered(characters: any) {
    this.characters = characters;
  }

  seeDetail(character: any) {

  }

}
