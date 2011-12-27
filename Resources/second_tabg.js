Ti.UI.currentWindow.title = '二ページ目(自前戻るボタン)';
Ti.UI.currentWindow.backgroundColor = '#f00';

backBtn = Ti.UI.createButton({title:'戻る'});
Ti.UI.currentWindow.leftNavButton = backBtn;
backBtn.addEventListener('click',function(){
	//alert('test');
	//Ti.UI.currentWindow.close({transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
	Ti.UI.currentTabGroup.close({transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
});