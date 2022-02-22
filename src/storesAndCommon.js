import { writable } from "svelte/store";

export function zeropad(number, finalWidth, customCharacter) {
    customCharacter = customCharacter || '0';
    number = number + '';
    return number.length >= finalWidth ? number : new Array(finalWidth - number.length + 1).join(customCharacter) + number;
}

export const config = writable({perHour: 8, batchSize: 100, batchOffset: 0})
export const todayObj = writable({h: 0, m: 0})
export const totalSum = writable({h: 0, m: 0, decimal: 0})