var win = Ti.UI.currentWindow;

win.title = 'test1';
win.backgroundColor = '#fff';

//単純にWindowを開いて上にかぶさる

win.addEventListener('click',function(){
	//('test1');
	var openWin = Ti.UI.createWindow({
		url:'second_win.js'
	});
	openWin.open({
		modal:true,
		modalTransitionStyle: Ti.UI.iPhone.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL});
})
