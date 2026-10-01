<?php
if (!defined('ABSPATH')) exit;
function smvc_setup() {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
  add_theme_support('custom-logo');
  add_theme_support('html5', ['search-form','comment-form','comment-list','gallery','caption','style','script']);
  register_nav_menus(['primary' => 'Hoofdmenu']);
}
add_action('after_setup_theme','smvc_setup');
function smvc_assets(){ wp_enqueue_style('smvc-style', get_stylesheet_uri(), [], '1.0.0'); }
add_action('wp_enqueue_scripts','smvc_assets');
function smvc_editor_permissions(){
  $role=get_role('editor');
  if($role){$role->add_cap('upload_files');$role->add_cap('publish_posts');$role->add_cap('edit_others_posts');}
}
add_action('admin_init','smvc_editor_permissions');
