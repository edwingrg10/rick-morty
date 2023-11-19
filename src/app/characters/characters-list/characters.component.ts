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
    { label: 'Nombre', key: 'name' },
    { label: 'Genero', key: 'gender' },
    { label: 'Especie', key: 'species' },
    { label: 'Estado', key: 'status' },
    { label: 'Tipo', key: 'type' }
  ];
  constructor(
    private characterService: CharacterService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
    this.getCharacters();
  }

  createForm() {
    this.filterForm = this.fb.group({
      filter: ['', Validators.required]
    });
  }

  getCharacters() {
    this.isLoading = true;
    this.characterService.getCharacters().subscribe((data) => {
      this.characters = data.results;
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
    })
  }

  applySelectFilter(): void {
    // Lógica para aplicar el filtro según los valores seleccionados
    const selectedValues = this.filterOptions
      .filter((option) => this.filterForm.get(option.key)?.value)
      .map((option) => option.key);

    console.log('Filtrar por:', selectedValues);
  }

  applyFilter(filterValue: any) {
    filterValue = filterValue.trim().toLowerCase();
  }

  seeDetail(character: any) {

  }

}
