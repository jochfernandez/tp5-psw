import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time',
  standalone: true
})
export class TimePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;

    const timeParts = value.split(':');
    if (timeParts.length !== 3) return value;

    timeParts[2] = timeParts[2].split('.')[0];

    return timeParts.join(':');
  }
}
