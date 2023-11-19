import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  getCharacters() {
    return this.http.get<any>(this.apiUrl + '/character');
  }

  getCharacterById(id: number) {
    return this.http.get<any>(this.apiUrl + '/character/' + id);
  }

  getCharactersFilter(params: string) {
    return this.http.get<any>(this.apiUrl + '/character/?' + params);
  }

}
