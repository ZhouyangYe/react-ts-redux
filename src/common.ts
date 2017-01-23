import Unit from './models/Unit';

export const random = ():number => Math.floor(Math.random()*25)*Rule.step;

export enum Rule{
    step = 20,
}

export const initial:Array<Unit> = [new Unit(40,0),new Unit(20,0),new Unit(0,0)];

export const last:Unit = new Unit(0,0);

export const G:any = {pressed: false};