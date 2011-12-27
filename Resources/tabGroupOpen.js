var win = Ti.UI.currentWindow;

win.title = 'test3';
win.backgroundColor = '#fff';

//単純にWindowを開いて上にかぶさる

win.addEventListener('click',function(){
	//alert('test3');
	var tg = Ti.UI.createTabGroup();
	var openWin = Ti.UI.createWindow({
		url:'second_tabg.js'
	});
	var tb = Ti.UI.createTab({window:openWin});
	tg.addTab(tb);
	tg.open({transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT});
});