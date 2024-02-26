import { Material } from "../interface";

//原料
export class 鐵原料 extends Material { }
export class 銅原料 extends Material { }
export class 石原料 extends Material { }
export class 硅原料 extends Material { }
export class 煤原料 extends Material { }
export class 鈦原料 extends Material { }
export class 可燃冰 extends Material { }
export class 重氫 extends Material { } //因不會進入到混帶環故當作原料產物
export class 分形硅石 extends Material { }

//*****一級產物*****
export class 鐵錠 extends Material {
    public recipe = [
        new 鐵原料(1)
    ]
}
export class 磁鐵 extends Material { //鐵環
    public recipe = [
        new 鐵原料(1)
    ]
}
export class 銅錠 extends Material {
    public recipe = [
        new 銅原料(1)
    ]
}
export class 鈦錠 extends Material {
    public recipe = [
        new 鈦原料(1)
    ]
}
export class 硅塊 extends Material { //硅錠
    public recipe = [
        new 硅原料(2)
    ]
}
export class 玻璃 extends Material {
    public recipe = [
        new 石原料(2)
    ]
}
export class 石材 extends Material {
    public recipe = [
        new 石原料(1)
    ]
}
export class 增產劑MKI extends Material {
    public recipe = [
        new 煤原料(1)
    ]
}
export class 燃燒單元 extends Material {
    public recipe = [
        new 煤原料(3)
    ]
}
export class 高能石墨 extends Material {//油桶
    public recipe = [
        new 煤原料(2)
    ]
}
export class 石墨烯 extends Material {
    public recipe = [
        new 可燃冰(2)
    ]
}
export class 晶格硅 extends Material {
    public recipe = [
        new 分形硅石(0.5)
    ]
}


//*****二級產物*****
export class 鋼材 extends Material {
    public recipe = [
        new 鐵錠(1)
    ]
}
export class 齒輪 extends Material {
    public recipe = [
        new 鐵錠(1)
    ]
}
export class 磁線圈 extends Material {
    public recipe = [
        new 磁鐵(2), new 銅錠(1)
    ]
}
export class 電路板 extends Material {
    public recipe = [
        new 鐵錠(2), new 銅錠(1)
    ]
}
export class 微晶元件 extends Material {
    public recipe = [
        new 硅塊(2), new 銅錠(1)
    ]
}
export class 電漿激發器 extends Material { }
export class 電動機 extends Material {
    public recipe = [
        new 鐵錠(2), new 齒輪(1), new 磁線圈(1)
    ]
}
//*****三級產物*****

export class 電磁渦輪 extends Material {
    public recipe = [
        new 電動機(2), new 磁線圈(1)
    ]
}
export class 超級磁場環 extends Material {
    public recipe = [
        new 電磁渦輪(2), new 磁鐵(3), new 高能石墨(1)
    ]
}
export class 處理器 extends Material {
    public recipe = [
        new 電路板(2), new 微晶元件(2)
    ]
}


