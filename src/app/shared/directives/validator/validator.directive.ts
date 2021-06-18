import { Directive, Input } from '@angular/core';
import { ValidatorFn, Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidatorDirective, multi: true }]

})
export class ValidatorDirective implements Validator {


  @Input('appValidator') appValidator: string[] = [];

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    let name = control.get('name');
    let pharse = control.get('pharse');
    let bs = control.get('bs');
    let reputation = control.root.get('reputation');

    const pharseValidator: (string | null)[] | null = this.appValidator.map((value: string) => (<string>pharse?.value)?.includes(value) ? value : null).filter(w => w != null);

    if (name && name.value && pharseValidator.length === 0 && bs && bs.value && reputation && reputation.value > 5)
      return null;
    else
      return { validateCompany: { pharse: pharseValidator.length === 0 ? null : pharseValidator.join('-') } }

  }

}
