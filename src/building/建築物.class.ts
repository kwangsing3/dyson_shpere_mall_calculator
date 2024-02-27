import { Building, Unit } from "../interface"
import { 晶格硅, 石墨烯, 石材, 磁線圈, 處理器, 超級磁場環, 鋼材, 鐵錠, 電漿激發器, 電磁渦輪, 電路板, 齒輪 } from "../material/產物.cls"

export class 電力感應塔 extends Building {
    public calulateSKIP: boolean = true
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


export class 太陽能板 extends Building {
    public recipe: Unit[] = [

    ]
}
export class 地熱發電站 extends Building {
    public recipe: Unit[] = [

    ]
}
export class 射線接收站 extends Building {
    public recipe: Unit[] = [

    ]
}
export class 人造恆星 extends Building {
    public recipe: Unit[] = [

    ]
}
export class 四向分流器 extends Building {
    public recipe: Unit[] = [

    ]
}
export class 流速監測器 extends Building {
    public recipe: Unit[] = [

    ]
}
export class 噴塗機 extends Building {
    public recipe: Unit[] = [

    ]
}
export class 小型儲物箱 extends Building {
    public recipe: Unit[] = [

    ]
}
export class 大型儲物箱 extends Building {
    public recipe: Unit[] = [

    ]
}
export class 儲液罐 extends Building {
    public recipe: Unit[] = [

    ]
}
export class 物流配送器 extends Building {
    public recipe: Unit[] = [

    ]
}
export class 行星內物流運輸站 extends Building {
    public recipe: Unit[] = [

    ]
}
export class 星際物流運輸站 extends Building {
    public recipe: Unit[] = [

    ]
}
export class 軌道採集器 extends Building {
    public recipe: Unit[] = [

    ]
}
export class 分揀器 extends Building {
    public recipe: Unit[] = [

    ]
}
export class 高速分揀器 extends Building {
    public recipe: Unit[] = [

    ]
}
export class 極速分揀器 extends Building {
    public recipe: Unit[] = [

    ]
}
export class 集裝分揀器 extends Building {
    public recipe: Unit[] = [

    ]
}
export class 採礦機 extends Building {
    public recipe: Unit[] = [

    ]
}
export class 大型採礦機 extends Building {
    public recipe: Unit[] = [

    ]
}
export class 分餾塔 extends Building {
    public recipe: Unit[] = [

    ]
}
export class 化工廠 extends Building {
    public recipe: Unit[] = [

    ]
}
export class 微型粒子對撞機 extends Building {
    public recipe: Unit[] = [

    ]
}
export class 電弧熔爐 extends Building {
    public recipe: Unit[] = [

    ]
}
export class 位面熔爐 extends Building {
    public recipe: Unit[] = [

    ]
}
export class 製造台MKI extends Building {
    public recipe: Unit[] = [

    ]
}
export class 製造台MKII extends Building {
    public recipe: Unit[] = [

    ]
}
export class 製造台MKIII extends Building {
    public recipe: Unit[] = [

    ]
}
export class 矩陣研究站 extends Building {
    public recipe: Unit[] = [

    ]
}
export class 垂直發射井 extends Building {
    public recipe: Unit[] = [

    ]
}
export class 行星護盾發生器 extends Building {
    public recipe: Unit[] = [

    ]
}
export class 信號塔 extends Building {
    public recipe: Unit[] = [

    ]
}
export class 磁化電漿砲 extends Building {
    public recipe: Unit[] = [

    ]
}
export class 聚爆加農砲 extends Building {
    public recipe: Unit[] = [

    ]
}
export class 戰場分析基站 extends Building {
    public recipe: Unit[] = [

    ]
}
export class 高頻激光塔 extends Building {
    public recipe: Unit[] = [

    ]
}