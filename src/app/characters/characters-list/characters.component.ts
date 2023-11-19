import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DetailCharacterComponent } from '../characters-detail/detail-character.component';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: any[] = [];
  filteredCharacters: any[] = this.characters;
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
    private fb: FormBuilder,
    public dialog: MatDialog
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
      this.filteredCharacters = data.results;
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
    });
  }

  applyFilter(filterValue: any) {
    filterValue = filterValue.target.value.trim().toLowerCase();
    this.characters = this.filteredCharacters.filter(x => x.name.toLowerCase().includes(filterValue)
      || x.gender.toLowerCase().includes(filterValue)
      || x.species.toLowerCase().includes(filterValue)
      || x.status.toLowerCase().includes(filterValue)
      || x.type.toLowerCase().includes(filterValue)
    );
  }

  getFilterOptions(event: Event) {
    event.stopPropagation();
    this.filterOptionsSelected = this.filterOptions
      .filter(option => this.filterForm.get(option.key)?.value)
      .map(option => option);
  }

  getCharactersFiltered(characters: any) {
    this.characters = characters;
    this.filteredCharacters = characters;
  }

  seeDetail(character: any) {
    this.characterService.getCharacterById(character.id).subscribe(result => {
      this.dialog.open(DetailCharacterComponent, {
        data: result,
        width: '700px',
        height: '500px' 
      });
    }, error => {
    });
  }

}
