import { Counselor } from './counselor';
import { King } from './king';
import { Knight } from './knight';
import { Squire } from './squire';

export interface iChar {
    id?: string;
    nombre: string;
    familia: string;
    edad: number;
    isAlive: boolean;
    categoria?: King | Knight | Counselor | Squire;
}
