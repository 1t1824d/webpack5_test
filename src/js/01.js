{
    let arr=[1,5,6,3,55,22,6,4,3,5,6,3,22,88,3,3]
    let set=new Set(arr)
    let newarr=Array.from(set)//[...set]
    let sortarr=newarr.sort((a, b) => a-b)
    console.log("数组去重、排序：",sortarr)
   //运行结果：(8) [1, 3, 4, 5, 6, 22, 55, 88]
}
{
    let arr=[1,5,6,3,55,22,6,4,3,5,6,3,22,88,3,3]
    let item=arr.find(ele=>ele<99)
    console.log(`item:`, item);
    //item: 1
    let arrfilter=arr.filter(ele=>ele<99)
    console.log(`arrfilter:`, arrfilter);
    //arrfilter: (16) [1, 5, 6, 3, 55, 22, 6, 4, 3, 5, 6, 3, 22, 88, 3, 3]
}