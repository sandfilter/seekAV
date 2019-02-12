function openzx(){
	var swt_talk = 'http://webchart.gbicom.cn/LR/Chatpre.aspx?id=KJI83683011&lng=cn&e='+location.hostname;
	var iTop = (window.screen.availHeight - 30 - 600) / 2;
	var iLeft = (window.screen.availWidth - 10 - 800) / 2;
	window.open(swt_talk, 'newwindow', 'height=515, width=700,toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no,top=' + iTop + ',left=' + iLeft);
}