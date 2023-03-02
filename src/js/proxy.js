{
    let obj = {
        name: "办公用品",
        time: "2023-03-01",
        prich: 66,
        color: "red",
        info: "注意：这是隐私信息，不能获取，修改和删除！"
    }
    let thing = new Proxy(obj, {
        get(target, key) {
            if (key == "info") {
                return false
            } else {
                return target[key]
            }
        },
        set(target, key, value) {
            if (key == "info") {
                return false
            } else {
                return target[key] = value
            }
        },
        deleteProperty(target, key) {
            if (key == "info") {
                return false
            } else {
                //return delete target[key]
                return Reflect.deleteProperty(target,key)
            }
        }
    })
    console.log(`Reflect.get(thing,"name")`, Reflect.get(thing,"name"));
    //Reflect.get(thing,"name") 办公用品
    console.log(`Reflect.get(thing,"info")`, Reflect.get(thing,"info"));
    //Reflect.get(thing,"info") false
    Reflect.set(thing,"name","笔记本电脑")
    Reflect.set(thing,"info","笔记本电脑的Mac信息")
    console.log(`Reflect.set(thing,"info","笔记本电脑的Mac信息")`, Reflect.set(thing,"info","笔记本电脑的Mac信息"));
    //Reflect.set(thing,"info","笔记本电脑的Mac信息") false
    console.log(`thing`, thing);
    //thing Proxy {name: '笔记本电脑', time: '2023-03-01', prich: 66, color: 'red', info: '注意：这是隐私信息，不能获取，修改和删除！'}
    Reflect.deleteProperty(thing,"time")
    console.log(`thing`, thing);
    //thing Proxy {name: '笔记本电脑', prich: 66, color: 'red', info: '注意：这是隐私信息，不能获取，修改和删除！'}
    console.log(`Reflect.deleteProperty(thing,"time")`, Reflect.deleteProperty(thing,"time"));
    //Reflect.deleteProperty(thing,"time") true
    console.log(`Reflect.deleteProperty(thing,"info")`, Reflect.deleteProperty(thing,"info"));
    //Reflect.deleteProperty(thing,"info") false
}