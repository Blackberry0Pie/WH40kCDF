import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-attacker',
  templateUrl: './attacker.component.html',
  styleUrls: ['./attacker.component.scss']
})
export class AttackerComponent {
  tabs = [1, 2, 3, 4, 5, 6, 7, 8];
  selected = new FormControl(0);
  attackSkill = '4+';
  reroll = 'none';
  rerollOne = false;

  name = '';
  attacks = 1;
  strength = 5;
  AP = '0';
  damage = 1;
}
