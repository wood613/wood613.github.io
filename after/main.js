window.addEventListener("load", function() {
    // 模拟加载时间，这里设置为100秒钟
    setTimeout(function() {
        // 隐藏loading界面
        document.querySelector(".loading").style.display = "none";
        // 显示主界面
        document.querySelector("body").style.visibility = "visible";
    }, 10000);
});