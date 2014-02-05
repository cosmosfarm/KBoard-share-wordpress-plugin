<?php
/*
Plugin Name: KBoard : 소셜 공유
Plugin URI: http://www.cosmosfarm.com/wpstore/product/kboard-share
Description: 워드프레스 KBoard에 소셜 공유 버튼을 추가 합니다.
Version: 1.1
Author: Cosmosfarm
Author URI: http://www.cosmosfarm.com/
*/

if(!defined('ABSPATH')) exit;

define('KBOARD_SHARE_VERSION', '1.1');

add_action('init', 'kboard_share_init');
function kboard_share_init(){
	wp_enqueue_style("kboard-share", plugins_url('/view/style.css', __FILE__));
	wp_enqueue_script('kboard-share', plugins_url('/view/share.js', __FILE__), array(), KBOARD_SHARE_VERSION);
}

add_filter('kboard_content', 'kboard_share_content');
function kboard_share_content($content){
	add_action('wp_footer', 'kboard_share_footer');
	
	ob_start();
	include plugin_dir_path(__FILE__).'view/layout.php';
	$share = ob_get_clean();
	
	$content = $content . $share;
	return $content;
}

function kboard_share_footer(){
	$uid = intval($_GET['uid']);
	$content = new KBContent();
	$content->initWithUID($uid);
	
	echo '<script>'."\n";
	echo 'var snsTitle = "'.$content->title.'";'."\n";
	echo 'var snsSummary = "'.addslashes(mb_strcut(strip_tags(str_replace(array("\r", "\n"), '', $content->content)), 0, 100, 'utf8')).'";'."\n";
	echo 'var snsUrl = location.href;'."\n";
	echo 'var facebookImageUrl = "'.($content->thumbnail_file?get_site_url().$content->thumbnail_file:'').'";'."\n";
	echo '</script>'."\n";
}
?>