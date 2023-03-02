{
    let map = new Map([["name", "vlodya"], ["sex", "男"]])
    console.log("map:", map);
    //map: Map(2) {'name' => 'vlodya', 'sex' => '男'}
    let obj = Object.fromEntries([["name", "vlodya"], ["sex", "男"]])
    console.log("obj:", obj);
    //obj: {name: 'vlodya', sex: '男'}
    for (let [k, v] of map.entries()) {
        console.log([k, v]);
    }
    //(2) ['name', 'vlodya']
    // (2) ['sex', '男']
}
{
    let obj = {
        name: "vlo",
        age: "16",
        sex: "men"
    }
    for (let [k, v] of Object.entries(obj)) {
        console.log([k, v]);
    }
    //(2) ['name', 'vlo']
    //(2) ['age', '16']
    //(2) ['sex', 'men']
    console.log(`Reflect.get(obj,"name"):`, Reflect.get(obj, "name"));
    //Reflect.get(obj,"name"): vlo
}
{
    let obj = {
        name: "vlo",
        age: "16",
        sex: "men"
    }
    console.log(`Reflect.set(obj,"vip",true):`, Reflect.set(obj, "vip", true));
    //Reflect.set(obj,"vip",true): true
    console.log(`obj:`, obj);
    //obj: {name: 'vlo', age: '16', sex: 'men', vip: true}
    console.log(`Reflect.has(obj,"age")`, Reflect.has(obj, "age"));
    // Reflect.has(obj,"age") true
    console.log(`Reflect.deleteProperty(obj,"sex")`, Reflect.deleteProperty(obj, "sex"), obj);
    //Reflect.deleteProperty(obj,"sex") true {name: 'vlo', age: '16', vip: true}
}
{
    let URL = "http://www.baidu.com?name=Jack&age=25&sex=men&wife=Lucy"
    function getUrlParams2(url) {
        let urlStr = url.split('?')[1]
        const urlSearchParams = new URLSearchParams(urlStr)
        const result = Object.fromEntries(urlSearchParams.entries())
        return result
    }
    console.log(getUrlParams2(URL))
    //{name: 'Jack', age: '25', sex: 'men', wife: 'Lucy'}
}