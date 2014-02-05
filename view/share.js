var snsTitle = "";
var snsSummary = "";
var snsUrl = location.href;
var facebookImageUrl = "";

function kboard_share_facebook(v_title, v_url) {
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
	facebookURL = "http://www.facebook.com/sharer.php?s=100&p[url]=" + url
			+ "&p[images][0]=" + image + "&p[title]=" + title + "&p[summary]="
			+ summary;

	window.open(facebookURL, "FACEBOOK");
	return false;
}

function kboard_share_twitter(v_title, v_url) {
	if (!v_title) {
		v_title = snsTitle + " " + snsSummary;
	}
	if (!v_url) {
		v_url = snsUrl;
	}

	var twitterURL = "http://twitter.com/home?status="
			+ encodeURIComponent(v_title + ": " + v_url);
	window.open(twitterURL, "TWITTER");
	return false;
}

function kboard_share_google(v_url) {
	if (!v_url) {
		v_url = snsUrl;
	}

	var googleURL = "https://plus.google.com/share?url="
			+ encodeURIComponent(v_url);
	window.open(googleURL, "GOOGLE");
	return false;
}