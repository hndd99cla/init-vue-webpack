/*
 * @Description:
 * @Author: lzx
 * @Date: 2021-08-03 13:19:15
 */





var name = 'World';
(function () {
    if (typeof name === 'undefined') {
        var name = "Jack"
        console.info('Goodbye ' + name)
    } else {
        console.info('Hello ' + name)
    }
})()