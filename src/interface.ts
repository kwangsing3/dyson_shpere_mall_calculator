//最小元件
export interface Unit {
    name: string
    recipe: Unit[]//配方
    amount: number;
    GetRecipe(): { [key: string]: number }
}
export abstract class Building implements Unit {
    public name = this.constructor.name; //建築物名稱
    public amount = 1;
    public calulateSKIP = false; //有些建物要依序升級會依在旁邊，所以不需要計算比重
    constructor(amount?: number) {
        this.amount = amount ? Math.abs(amount) : 1
    }
    recipe: Unit[] = [] //配方
    GetRecipe(): { [key: string]: number } {
        const res: { [key: string]: number } = {};
        this.recipe = this.recipe.filter(ele => ele.amount > 0)
        this.recipe.forEach(ele => {
            res[ele.name] = ele.amount
        })
        return res
    }
}
export abstract class Material implements Unit {
    public name = this.constructor.name; //物品名稱
    public amount = 1;
    constructor(amount?: number) {
        this.amount = amount ? Math.abs(amount) : 1
    }
    recipe: Unit[] = [] //配方
    GetRecipe(): { [key: string]: number } {
        const res: { [key: string]: number } = {};
        this.recipe = this.recipe.filter(ele => ele.amount > 0)
        this.recipe.forEach(ele => {
            res[ele.name] = ele.amount
        })
        return res
    }
}