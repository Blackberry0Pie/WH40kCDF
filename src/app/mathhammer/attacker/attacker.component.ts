import {Component} from '@angular/core';

@Component({
  selector: 'app-attacker',
  templateUrl: './attacker.component.html',
  styleUrls: ['./attacker.component.scss']
})
export class AttackerComponent {
  attackSkill = '4+';
  reroll = 'none';
  rerollOne = false;
}
