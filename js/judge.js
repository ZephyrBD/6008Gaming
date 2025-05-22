let eye = document.getElementById('eye');
let pwd = document.getElementById('key');
let flag = 0;
eye.onclick = function () {
    if (flag == 0) {
        pwd.type = 'text';
        eye.src = 'images/open.png';
        flag = 1;
    } else {
        pwd.type = 'password';
        eye.src = 'images/close.png';
        flag = 0;
    }

}

let submitButton = document.getElementById('sm');
submitButton.onclick = function () {
    let inputValue = pwd.value;
    let pattern = /^[A-Za-z0-9]{5}-[A-Za-z0-9]{5}-[A-Za-z0-9]{5}-[A-Za-z0-9]{5}-[A-Za-z0-9]{5}$/
    if (pattern.test(inputValue)) {
        let str = "已使用" + inputValue + "激活Minecraft: JAVA 版和 BEDROCK 版（标准版）到你的账户。";
        alert(str);
    } else if(inputValue == "") {
        alert("还未输入任何兑换码");
    }    
    else{
        let str = "兑换码：" + inputValue + " 格式错误"
        alert(str);
    }
};