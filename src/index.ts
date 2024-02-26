import { 傳送帶MKI, 傳送帶MKII, 傳送帶MKIII, 原油精煉廠, 無線輸電塔, 蓄电器, 電磁軌道彈射器 } from "./building/建築物.class";
import { Building, Unit } from "./interface";



(() => {
    console.log("我想要做: ")
    const request = [
        new 傳送帶MKI(),
        new 傳送帶MKII(),
        new 傳送帶MKIII(),
        new 蓄电器(1),
        new 原油精煉廠(1),
        new 無線輸電塔(1),
        new 電磁軌道彈射器(1)
    ]
    console.log(Target(request))
    const resp = LoopRecipe1st(request)
    console.log(`第一層:\n` + JSON.stringify(resp, null, 4))
})()
function Target(req: Unit[]): string {
    let str = ''
    req.forEach(ele => {
        str += `${ele.name}:${ele.amount} `
    })
    return str;
}


function LoopRecipe1st(req: Unit[]): { [key: string]: number } {
    const res: { [key: string]: number } = {}
    req.forEach(ele => {
        if (ele.recipe.length > 0) {
            ele.recipe.forEach(re => {
                if (!(re as Building).calulateSKIP)
                    res[re.name] = res[re.name] ? res[re.name] + (re.amount * ele.amount) : (re.amount * ele.amount);
            })
        }
    })
    return res
}