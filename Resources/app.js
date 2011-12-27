var tabG = Ti.UI.createTabGroup();

//サンプル1
//tabGroup,tab,windowでwindow.open
var winOpen = Ti.UI.createWindow({url:'winOpen.js'});

//サンプル2
//tabGroup,tab,windowでtab.open
var tabOpen = Ti.UI.createWindow({url:'tabOpen.js'});

//サンプル3
//tabGroup,tab,windowでtabGroup.open
var tabGroupOpen = Ti.UI.createWindow({url:'tabGroupOpen.js'});

//サンプル4
//NavigationGroupを使う
var navGroupOpen = Ti.UI.createWindow();
navGroupOpen.navBarHidden = true;
Ti.App.nav = Ti.UI.iPhone.createNavigationGroup({
    window: Ti.UI.createWindow({
    	url: "navGroupOpen.js"}) // 初期ウィンドウ
});
navGroupOpen.add(Ti.App.nav);

var smpl1 = Ti.UI.createTab({
	icon:'KS_nav_views.png',
	title:'window open',
	window: winOpen
});

var smpl2 = Ti.UI.createTab({
	icon: 'KS_nav_views.png',
	title: 'tabOpen',
	window: tabOpen
});

var smpl3 = Ti.UI.createTab({
	icon: 'KS_nav_views.png',
	title:'tabGroupOpen',
	window: tabGroupOpen
});

var smpl4 = Ti.UI.createTab({
	icon: 'KS_nav_vies.png',
	title: 'navGroupOpen',
	window: navGroupOpen
});

tabG.addTab(smpl1);
tabG.addTab(smpl2);
tabG.addTab(smpl3);
tabG.addTab(smpl4);

tabG.open({transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT});
