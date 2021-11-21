import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 *
 * @param words string[]
 * @returns ValidatorFn
 */
export function restrictedWord(words: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!words) { return null; }
    const invalidWords = words.map(w => control.value?.toLowerCase().includes(w) ? w : null).filter(w => w != null);

    return invalidWords && invalidWords.length > 0 ? { restrictedWord: invalidWords.join(',') } : null;
  };
}
