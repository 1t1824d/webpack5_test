{
    let p1 = (req) => {
        return new Promise((resolve, reject) => {
            if (req < 9) {
                resolve("9527---p1成功调用！")
            } else {
                reject("9527---p1失败调用！")
            }
        })
            .then(res => res)
            .catch(error => error)
            .finally(() => console.log("9527---p1执行完成！"))
    }
    let p2 = (req) => {
        return new Promise((resolve, reject) => {
            if ((req > 9 || req === 9) && req < 29) {
                resolve("9527---p2成功调用！")
            } else {
                reject("9527---p2失败调用！")

            }
        })
            .then(res => res)
            .catch(error => error)
            .finally(() => console.log("9527---p2执行完成！"))
    }
    let p3 = (req) => {
        return new Promise((resolve, reject) => {
            if (req > 29) {
                resolve("9527---p3成功调用！")
            } else {
                reject("9527---p3失败调用！")

            }
        })
            .then(res => res)
            .catch(error => error)
            .finally(() => console.log("9527---p3执行完成！"))
    }
    Promise.all([p1(1), p2(1), p3(91)])
        .then((res) => {
            console.log("Promise.all--res:", res);
        }).catch((error) => {
            console.log("Promise.all--error:", error);
        }).finally(() => {
            console.log("Promise.all--finally:", 66666);
        })
}