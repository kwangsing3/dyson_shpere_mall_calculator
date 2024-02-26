import { Building, Unit } from "../interface"
import { 晶格硅, 石墨烯, 石材, 磁線圈, 處理器, 超級磁場環, 鋼材, 鐵錠, 電漿激發器, 電磁渦輪, 電路板, 齒輪 } from "../material/產物.cls"

export class 電力感應塔 extends Building {
    public recipe: Unit[] = [
        new 鐵錠(2), new 磁線圈(1)
    ]
}
export class 無線輸電塔 extends Building {
    public recipe: Unit[] = [
        new 電力感應塔(1), new 電漿激發器(3)
    ]
}
export class 原油精煉廠 extends Building {
    public recipe: Unit[] = [
        new 鋼材(10), new 石材(10), new 電路板(6), new 電漿激發器(6)
    ]
}
export class 原油萃取站 extends Building {
    public recipe: Unit[] = [
        new 鋼材(12), new 石材(12), new 電路板(6), new 電漿激發器(4)
    ]
}
export class 抽水站 extends Building {
    public recipe: Unit[] = [
        new 鐵錠(8), new 石材(4), new 電路板(6), new 電漿激發器(4)
    ]
}
export class 傳送帶MKI extends Building {
    public calulateSKIP: boolean = true
    public recipe: Unit[] = [
        new 鐵錠(2), new 齒輪(1)
    ]
}
export class 傳送帶MKII extends Building {
    public calulateSKIP: boolean = true
    public recipe: Unit[] = [
        new 電磁渦輪(2), new 傳送帶MKI(3)
    ]
}
export class 傳送帶MKIII extends Building {
    public calulateSKIP: boolean = true
    public recipe: Unit[] = [
        new 超級磁場環(1), new 傳送帶MKII(3), new 石墨烯(1)
    ]
}
export class 蓄电器 extends Building {
    public recipe: Unit[] = [
        new 鐵錠(6), new 超級磁場環(1), new 晶格硅(3)
    ]
}
export class 電磁軌道彈射器 extends Building {
    public recipe: Unit[] = [
        new 鋼材(20), new 齒輪(20), new 超級磁場環(10), new 處理器(5)
    ]
}