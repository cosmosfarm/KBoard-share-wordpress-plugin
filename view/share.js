var snsTitle = "";
var snsSummary = "";
var snsUrl = location.href;
var facebookImageUrl = "";

function kboard_share_facebook(v_title, v_url){
	var w = 700;
	var h = 350;
	
	if (!v_title) {
		v_title = snsTitle;
	}
	if (!v_url) {
		v_url = snsUrl;
	}

	var url = encodeURIComponent(v_url);
	var image = encodeURIComponent(facebookImageUrl);
	var title = encodeURIComponent(snsTitle);
	var summary = encodeURIComponent(snsSummary);
	
	if(kboard_isMobile()){
		facebookURL = "https://www.facebook.com/sharer/sharer.php?u="
			+ url;
	}
	else{
		facebookURL = "http://www.facebook.com/sharer.php?s=100&p[url]=" + url
			+ "&p[images][0]=" + image + "&p[title]=" + title + "&p[summary]="
			+ summary;
	}

	window.open(facebookURL, 'FACEBOOK', 'width='+w+',height='+h+',left='+(screen.availWidth-w)*0.5+',top='+(screen.availHeight-h)*0.5);
	return false;
}

function kboard_share_twitter(v_title, v_url){
	var w = 700;
	var h = 350;
	
	if (!v_title) {
		v_title = snsTitle + " " + snsSummary;
	}
	if (!v_url) {
		v_url = snsUrl;
	}

	var twitterURL = "http://twitter.com/home?status="
			+ encodeURIComponent(v_title + ": " + v_url);
	window.open(twitterURL, 'TWITTER', 'width='+w+',height='+h+',left='+(screen.availWidth-w)*0.5+',top='+(screen.availHeight-h)*0.5);
	return false;
}

function kboard_share_google(v_url){
	var w = 700;
	var h = 350;
	
	if (!v_url) {
		v_url = snsUrl;
	}

	var googleURL = "https://plus.google.com/share?url="
			+ encodeURIComponent(v_url);
	window.open(googleURL, 'GOOGLE', 'width='+w+',height='+h+',left='+(screen.availWidth-w)*0.5+',top='+(screen.availHeight-h)*0.5);
	return false;
}

function kboard_isMobile(){
	var mobileKeyWords = new Array('iPhone', 'iPod', 'BlackBerry', 'Android', 'Windows CE', 'LG', 'MOT', 'SAMSUNG', 'SonyEricsson');
	for (var word in mobileKeyWords){
		if (navigator.userAgent.match(mobileKeyWords[word]) != null){
			return true;
		}
	}
	return false;
}