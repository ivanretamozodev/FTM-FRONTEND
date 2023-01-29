import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'maxCharacters',
})
export class MaxCharactersPipe implements PipeTransform {
    transform(value: string): string {
        const MAX_CHARACTERS: number = 150;
        const characters = value.slice(0, MAX_CHARACTERS);
        return `${characters}...`;
    }
}
