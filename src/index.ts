import { 無線輸電塔 } from "./building/建築物.class";



(() => {
    const myClass = new 無線輸電塔();
    const rp = myClass.GetRecipe()
    console.log(JSON.stringify(rp, null, 4))
})()
