import { 傳送帶MKI, 傳送帶MKII, 傳送帶MKIII, 原油精煉廠, 無線輸電塔, 蓄电器, 電磁軌道彈射器 } from "./building/建築物.class";
import persentFunc from "./ext/persent.func";
import { Building, Unit } from "./interface";



(() => {
    console.log("我想要做: ")
    const request = [
        new 傳送帶MKI(),
        new 傳送帶MKII(),
        new 傳送帶MKIII(5),
        new 蓄电器(1),
        new 原油精煉廠(1),
        new 無線輸電塔(1),
        new 電磁軌道彈射器(20)
    ]
    //配方一覽
    console.log(Target(request))
    //
    let totalC = 0;
    request.forEach(ele => totalC += ele.amount)
    //
    console.log(`【製作台】需要` + totalC + `台\n`)
    const resp = LoopRecipe1st(request)
    const dis = TheoryRoadDistance(resp)
    console.log(`五環內總共需要 \n` + RecipeOutput(resp))
    const Anaysic = AnalyzeEle(resp)
    console.log(Anaysic)
})()

function Target(req: Unit[]): string {
    let str = ''
    req.forEach(ele => {
        str += `${ele.name}*${ele.amount} `
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

function TheoryRoadDistance(data: { [key: string]: number }): string {
    let res = 0;
    for (const key in data) {
        res += data[key]
    }
    return (res / 5).toFixed(0)
}

function RecipeOutput(data: { [key: string]: number }): string {
    //轉換格式
    let str = '';
    let ary: [name: string, amount: number][] = []
    for (const key in data) {
        ary.push([key, data[key]])
    }
    ary.sort((a, b) => a[1] < b[1] ? 1 : -1)
    ary.forEach(ele => {
        str += `    ${ele[0]}: ${ele[1]}\n`;
    })
    return str
}
function AnalyzeEle(data: { [key: string]: number }) {
    let total = 0;
    for (const key in data) {
        total += data[key]
    }
    //每環需要
    let ary: [name: string, amount: number][] = []
    for (const key in data) {
        ary.push([key, data[key]])
    }
    ary.sort((a, b) => a[1] < b[1] ? 1 : -1)
    //
    //軌道長度演算
    //
    let pass = false;
    let safeCounter = 0
    do {
        // 是否都小於最大數
        //
        if (pass || safeCounter > 99)
            break
        else
            safeCounter++
    } while (!pass)

    const analys = splitIntoGroups(ary, 5)
    let st = ''
    let r = 1;
    let mx = 0
    for (const index in analys) {
        const key = analys[index];
        let toal = 0;
        let d = ''
        key.forEach(element => {
            mx = Math.max(mx, element.amount)
            toal += element.amount
        });
        key.forEach(element => {
            d += `${persentFunc(element.amount, toal)}      ${element.name}:${element.amount}  \n`;
        });
        st += `-第${r++}圈- 貨物總共 ${toal} \n`
        st += d + `\n`
    }
    //
    //報告
    const str = `理論最外側 (最長軌道) 長度至少需要大於` + mx + `格數才能同時放下所有請求物`
    return st + str
}


function splitIntoGroups(arr: [name: string, amount: number][], numGroups: number) {
    // 每組的目標總和
    const totalSum = arr.reduce((acc, val) => acc + val[1], 0);
    let targetSum = totalSum / numGroups;
    // 準備存放分組的陣列
    const groups: { name: string, amount: number }[][] = Array.from({ length: numGroups }, () => []);
    let currentGroup = 0;
    let currentSum = 0;
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        //如果超過平均數
        if (targetSum < num[1]) {
            targetSum = num[1]
            groups.forEach((element) => element = []);//清空
            currentGroup = 0
            i = 0
        }
        // 如果將該數字添加到當前組不會超過目標總和，則加入該組
        if (currentSum + num[1] <= targetSum) {
            groups[currentGroup].push({ name: num[0], amount: num[1] });
            currentSum += num[1];
        } else {
            // 如果超過目標總和，則移到下一組
            groups[++currentGroup].push({ name: num[0], amount: num[1] });
            currentSum = num[1];
        }
    }
    return groups;
}
