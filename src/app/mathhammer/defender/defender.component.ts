import { Component } from '@angular/core';

@Component({
  selector: 'app-defender',
  templateUrl: './defender.component.html',
  styleUrls: ['./defender.component.scss']
})
export class DefenderComponent {
  toughness = '4';
  wounds = '1';
  armourSave = '3+';
  invulnSave = '-';
  FNPsave = '-';

  constructor() {
  }

}
