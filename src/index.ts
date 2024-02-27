import {
    電力感應塔, 傳送帶MKI, 傳送帶MKII, 傳送帶MKIII, 抽水站, 無線輸電塔, 蓄电器, 電磁軌道彈射器, 太陽能板,
    地熱發電站,
    射線接收站,
    人造恆星,
    四向分流器,
    流速監測器,
    噴塗機,
    小型儲物箱,
    大型儲物箱,
    儲液罐,
    物流配送器,
    行星內物流運輸站,
    星際物流運輸站,
    軌道採集器,
    分揀器,
    高速分揀器,
    極速分揀器,
    集裝分揀器,
    採礦機,
    大型採礦機,
    分餾塔,
    化工廠,
    微型粒子對撞機,
    電弧熔爐,
    位面熔爐,
    製造台MKI,
    製造台MKII,
    製造台MKIII,
    矩陣研究站,
    垂直發射井,
    行星護盾發生器,
    信號塔,
    磁化電漿砲,
    聚爆加農砲,
    戰場分析基站,
    高頻激光塔,
} from "./building/建築物.class";
import persentFunc from "./ext/persent.func";
import { Building, Unit } from "./interface";



(() => {
    console.log("我想要做: ")
    const request = [
        new 傳送帶MKI(1),
        new 傳送帶MKII(1),
        new 傳送帶MKIII(1),
        new 太陽能板(1),
        new 地熱發電站(1),
        new 射線接收站(1),
        new 人造恆星(1),
        new 四向分流器(1),
        new 流速監測器(1),
        new 噴塗機(1),
        new 小型儲物箱(1),
        new 大型儲物箱(1),
        new 儲液罐(1),
        new 物流配送器(1),
        new 行星內物流運輸站(1),
        new 星際物流運輸站(1),
        new 軌道採集器(1),
        new 分揀器(1),
        new 高速分揀器(1),
        new 極速分揀器(1),
        new 集裝分揀器(1),
        new 採礦機(1),
        new 大型採礦機(1),
        new 分餾塔(1),
        new 化工廠(1),
        new 微型粒子對撞機(1),
        new 電弧熔爐(1),
        new 位面熔爐(1),
        new 製造台MKI(1),
        new 製造台MKII(1),
        new 製造台MKIII(1),
        new 矩陣研究站(1),
        new 垂直發射井(1),
        new 行星護盾發生器(1),
        new 信號塔(1),
        new 磁化電漿砲(1),
        new 聚爆加農砲(1),
        new 戰場分析基站(),
        new 高頻激光塔(1),
        new 電力感應塔(1),
        new 無線輸電塔(1),
        new 蓄电器(1),
        new 電磁軌道彈射器(1),
        new 抽水站(1),
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
        st += `-第${r++}圈- \n`;
        //演算傳輸帶速率
        let speed = 29 //傳輸帶速率滿載30/s
        let skip = false
        do {
            let sum = 0;
            key.forEach(element => {
                const s = Math.floor(element.amount / toal * speed)
                sum += s < 1 ? 1 : s
            });
            if (sum > 29)
                speed--
            else
                skip = true
        } while (!skip && speed > 0);

        key.forEach(element => {
            const per = Math.floor(element.amount / toal * speed);
            d += `【${per < 1 ? 1 : per}】  ${persentFunc(element.amount, toal)}      ${element.name}:${element.amount}  \n`;
        });
        st += d
        st += `理論上限 ${speed} 爪速/秒` + `    環上總共 ${toal}項 \n`
    }
    //
    //報告
    const str = `理論最內側 (最短軌道) 長度至少需要大於` + mx + `格數才能同時放下所有請求物`
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
            continue;
        }
        // 如果將該數字添加到當前組不會超過目標總和，則加入該組
        if (currentSum + num[1] <= targetSum) {
            groups[currentGroup].push({ name: num[0], amount: num[1] });
            currentSum += num[1];
        } else if (currentGroup + 1 >= numGroups) {
            //如果還是無法容納的話增加平均數並重新計算
            targetSum++
            groups.forEach((element) => element = []);//清空
            currentGroup = 0
            i = 0
            continue;
        }
        else {
            // 如果超過目標總和，則移到下一組
            groups[++currentGroup].push({ name: num[0], amount: num[1] });
            currentSum = num[1];
        }
    }
    return groups;
}
