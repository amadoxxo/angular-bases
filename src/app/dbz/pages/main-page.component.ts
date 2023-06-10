import { Character } from '../interfaces/character.interface';
import { DbzService } from './../services/dbz.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dbz',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  get character(): Character[] {
    return [...this.dbzService.character];
  }

  deleteCharacterById(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }
}
