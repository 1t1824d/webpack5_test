{

    let promisefun = (req) => {
        return new Promise((resolve, reject) => {
            if (req > 9) {
                resolve(sucessfun)
            } else {
                reject(errorfun)
            }
        })
    }
    let sucessfun = () => console.log("成功时调用！")
    let errorfun = () => console.log(`失败时调用！`)
    promisefun(13).then((res) => {
        res()
    }, (error) => {
        error()
    })
}
{
    let promisefun = (req) => {
        return new Promise((resolve, reject) => {
            if (req > 9) {
                resolve("成功时调用！")
            } else {
                reject("失败时调用！")
            }
        })
    }
    promisefun(1).then((res) => {
        console.log(`res:`, res);
    }).catch((error) => {
        //throw error
        console.log(`error:`, error);
    }).finally(() => {
        console.log(`finally---不管Promise状态如何，在then或者catch的回调函数的方法执行完成后，都要执行finally回调函数的方法`);
    })
}