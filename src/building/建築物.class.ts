import { Building, Unit } from "../interface"
import { 位面過濾器, 光子合併器, 光柵石, 加力推進器, 動力引擎, 單極磁石, 奇異物質, 引力透鏡, 微晶元件, 晶格硅, 框架材料, 湮滅約束球, 玻璃, 石墨烯, 石材, 硅塊, 磁線圈, 粒子容器, 粒子寬帶, 處理器, 超級磁場環, 量子芯片 as 量子芯片, 金剛石, 鈦化玻璃, 鈦合金, 鈦錠, 銅錠, 鋼材, 鐵錠, 電動機, 電漿激發器, 電磁渦輪, 電路板, 齒輪 } from "../material/產物.cls"

export class 電力感應塔 extends Building {
    public calulateSKIP: boolean = true
    public recipe: Unit[] = [
        new 鐵錠(2), new 磁線圈(1)
    ]
}
export class 無線輸電塔 extends Building {
    public calulateSKIP: boolean = true
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
export class 蓄電器 extends Building {
    public calulateSKIP: boolean = true
    public recipe: Unit[] = [
        new 鐵錠(6), new 超級磁場環(1), new 晶格硅(3)
    ]
}


export class 衛星配電站 extends Building {
    public recipe: Unit[] = [
        new 無線輸電塔(1), new 超級磁場環(10), new 框架材料(2)
    ]
}
export class 太陽能板 extends Building {
    public recipe: Unit[] = [
        new 銅錠(10), new 硅塊(10), new 電路板(5)
    ]
}
export class 地熱發電站 extends Building {
    public recipe: Unit[] = [
        new 銅錠(20), new 鋼材(15), new 超級磁場環(1),
    ]
}
export class 射線接收站 extends Building {
    public recipe: Unit[] = [
        new 鋼材(20), new 硅塊(20), new 光子合併器(10), new 處理器(5), new 超級磁場環(20)
    ]
}
export class 人造恆星 extends Building {
    public recipe: Unit[] = [
        new 鈦合金(20), new 框架材料(20), new 湮滅約束球(10), new 量子芯片(10)
    ]
}
export class 四向分流器 extends Building {
    public recipe: Unit[] = [
        new 鐵錠(3), new 齒輪(2), new 電路板(1)
    ]
}
export class 流速監測器 extends Building {
    public recipe: Unit[] = [
        new 鐵錠(3), new 齒輪(2), new 電路板(2), new 玻璃(1),
    ]
}
export class 噴塗機 extends Building {
    public recipe: Unit[] = [
        new 鋼材(4), new 電漿激發器(2), new 電路板(2), new 微晶元件(2)
    ]
}
export class 小型儲物箱 extends Building {
    public recipe: Unit[] = [
        new 鐵錠(4), new 石材(4),
    ]
}
export class 大型儲物箱 extends Building {
    public recipe: Unit[] = [
        new 鋼材(8), new 石材(8),
    ]
}
export class 儲液罐 extends Building {
    public recipe: Unit[] = [
        new 鐵錠(8), new 石材(4), new 玻璃(4),
    ]
}
export class 物流配送器 extends Building {
    public recipe: Unit[] = [
        new 鐵錠(8), new 電漿激發器(4), new 處理器(4),
    ]
}
export class 行星內物流運輸站 extends Building {
    public calulateSKIP: boolean = true
    public recipe: Unit[] = [
        new 鋼材(40), new 鈦錠(40), new 處理器(40), new 粒子容器(20),
    ]
}
export class 星際物流運輸站 extends Building {
    public calulateSKIP: boolean = true
    public recipe: Unit[] = [
        new 鈦合金(40), new 粒子容器(20), new 行星內物流運輸站(1),
    ]
}
export class 軌道採集器 extends Building {
    public recipe: Unit[] = [
        new 超級磁場環(50), new 星際物流運輸站(1), new 蓄電器(20), new 加力推進器(20),
    ]
}
export class 分揀器 extends Building {
    public calulateSKIP: boolean = true
    public recipe: Unit[] = [
        new 鐵錠(1), new 電路板(1)
    ]
}
export class 高速分揀器 extends Building {
    public calulateSKIP: boolean = true
    public recipe: Unit[] = [
        new 分揀器(2), new 電動機(1),
    ]
}
export class 極速分揀器 extends Building {
    public calulateSKIP: boolean = true
    public recipe: Unit[] = [
        new 高速分揀器(2), new 電磁渦輪(1),
    ]
}
export class 集裝分揀器 extends Building {
    public recipe: Unit[] = [
        //
    ]
}
export class 採礦機 extends Building {
    public recipe: Unit[] = [
        new 鐵錠(4), new 電路板(2), new 磁線圈(2), new 齒輪(2),
    ]
}
export class 大型採礦機 extends Building {
    public recipe: Unit[] = [
        new 鈦合金(20), new 框架材料(10), new 超級磁場環(10), new 量子芯片(4), new 光柵石(40),
    ]
}
export class 分餾塔 extends Building {
    public recipe: Unit[] = [
        new 鋼材(8), new 石材(4), new 玻璃(4), new 處理器(1),
    ]
}
export class 化工廠 extends Building {
    public calulateSKIP: boolean = true
    public recipe: Unit[] = [
        new 鋼材(8), new 石材(8), new 玻璃(8), new 電路板(2),
    ]
}
export class 量子化工廠 extends Building {
    public recipe: Unit[] = [
        new 鈦化玻璃(10), new 奇異物質(3), new 量子芯片(5), new 化工廠(1),
    ]
}
export class 微型粒子對撞機 extends Building {
    public recipe: Unit[] = [
        new 鈦合金(20), new 框架材料(20), new 超級磁場環(25), new 石墨烯(10), new 處理器(8),
    ]
}
export class 電弧熔爐 extends Building {
    public calulateSKIP: boolean = true
    public recipe: Unit[] = [
        new 鐵錠(4), new 石材(2), new 電路板(4), new 磁線圈(2),
    ]
}
export class 位面熔爐 extends Building {
    public recipe: Unit[] = [
        new 電弧熔爐(1), new 框架材料(5), new 位面過濾器(4), new 單極磁石(1), //刻意減少
    ]
}
export class 製造台MKI extends Building {
    public calulateSKIP: boolean = true
    public recipe: Unit[] = [
        new 鐵錠(4), new 齒輪(8), new 電路板(4),
    ]
}
export class 製造台MKII extends Building {
    public calulateSKIP: boolean = true
    public recipe: Unit[] = [
        new 製造台MKI(1), new 石墨烯(8), new 處理器(4),
    ]
}
export class 製造台MKIII extends Building {
    public recipe: Unit[] = [
        new 製造台MKII(1), new 粒子寬帶(8), new 量子芯片(2)
    ]
}
export class 矩陣研究站 extends Building {
    public recipe: Unit[] = [
        new 鐵錠(8), new 玻璃(4), new 電路板(4), new 磁線圈(4),
    ]
}
export class 電磁軌道彈射器 extends Building {
    public recipe: Unit[] = [
        new 鋼材(20), new 齒輪(20), new 超級磁場環(10), new 處理器(5)
    ]
}
export class 垂直發射井 extends Building {
    public recipe: Unit[] = [
        new 鈦合金(80), new 框架材料(30), new 引力透鏡(20), new 量子芯片(10),
    ]
}
export class 行星護盾發生器 extends Building {
    public recipe: Unit[] = [
        new 鋼材(20), new 電磁渦輪(20), new 超級磁場環(5), new 粒子容器(5),
    ]
}
export class 信號塔 extends Building {
    public recipe: Unit[] = [
        new 無線輸電塔(2), new 鋼材(12), new 晶格硅(6),
    ]
}
export class 磁化電漿砲 extends Building {
    public recipe: Unit[] = [
        new 鈦合金(20), new 鈦化玻璃(10), new 超級磁場環(10), new 電漿激發器(5), new 處理器(5)
    ]
}
export class 聚爆加農砲 extends Building {
    public recipe: Unit[] = [
        new 鋼材(10), new 電動機(8), new 電路板(10), new 超級磁場環(2),
    ]
}
export class 戰場分析基站 extends Building {
    public recipe: Unit[] = [
        new 鋼材(12), new 電路板(18), new 微晶元件(6), new 動力引擎(12),
    ]
}
export class 高頻激光塔 extends Building {
    public recipe: Unit[] = [
        new 鋼材(9), new 電漿激發器(6), new 電路板(6), new 光子合併器(9),
    ]
}
export class 干擾塔 extends Building {
    public recipe: Unit[] = [
        new 銅錠(12), new 電漿激發器(9), new 金剛石(6), new 處理器(3),
    ]
}