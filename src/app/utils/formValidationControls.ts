export const formValidationControls = (formToValidate: any) => {
  for (const key in formToValidate.controls) {
    formToValidate.controls[key].markAsDirty();
    formToValidate.controls[key].updateValueAndValidity();
  }
}