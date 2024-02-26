import { Building, Unit } from "../interface"

export class 信號塔 extends Building { }
export class 無線輸電塔 extends Building {
    public recipe: Unit[] = [
        new 信號塔(2)
    ]
}