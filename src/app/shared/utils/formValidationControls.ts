import { FormGroup } from '@angular/forms';

export const formValidationControls = (formToValidate: FormGroup) => {
  for (const key in formToValidate.controls) {
    formToValidate.controls[key].markAsDirty();
    formToValidate.controls[key].updateValueAndValidity();
  }
}
