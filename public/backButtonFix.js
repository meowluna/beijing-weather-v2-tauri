document.addEventListener('plusready', function (a) {
	let first = null;
	plus.key.addEventListener('backbutton', function () {
		//获取地址栏目中的url
		let urls = location.hash.split('/')[1]
		if (urls === 'map' || urls === '') {//判断当前是否无后退页
			if (new Date().getTime() - first < 3000) {
				// 连续按两次返回键且时间小于3s，退出app
				plus.runtime.quit();
			}else{
				first = new Date().getTime();//记录第一次按返回键的时间
				if (confirm("点击确定退出应用")) {
					plus.runtime.quit()
				}
				setTimeout(()=>{
					// 3s后清除
					first = null;
				}, 3000);
			}
		}else{
			history.go(-1); // 返回到上一页
		}
	}, false);
})