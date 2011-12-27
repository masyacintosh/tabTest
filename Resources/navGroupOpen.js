Ti.UI.currentWindow.title = "test4";
Ti.UI.currentWindow.backgroundColor = "#000";

Ti.UI.currentWindow.addEventListener("click", function(){
	var openWin = Ti.UI.createWindow({
		url:'second.js'
	});
    Ti.App.nav.open(openWin,{transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT});
    openWin.backButtonTitle = '戻る';
});