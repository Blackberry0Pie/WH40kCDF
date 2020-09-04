import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-attacker',
  templateUrl: './attacker.component.html',
  styleUrls: ['./attacker.component.scss']
})
export class AttackerComponent {
  attackSkill = '4+';
  reroll = 'none';
  isChecked = true;
  formGroup: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      enableWifi: '',
      acceptTerms: ['', Validators.requiredTrue]
    });
  }

  onFormSubmit() {
    alert(JSON.stringify(this.formGroup.value, null, 2));
  }
}
