var win = Ti.UI.currentWindow;

win.title = 'test2';
win.backgroundColor = '#fff';

//単純にWindowを開いて上にかぶさる

win.addEventListener('click',function(){
	//alert('test2');
	openWin = Ti.UI.createWindow({url:'second.js'});
	openWin.backButtonTitle = '戻る';
	Ti.UI.currentTab.open(openWin,
		{transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT});
})

