<?php
/**
 * Plugin Name: Bulk Post Creator
 * Description: Tạo nhiều bài viết bằng cách nhập tiêu đề và nội dung thủ công, có thể gán vào trang cụ thể.
 * Version: 1.1
 * Author: Your Name
 */

// Ngăn truy cập trực tiếp
if (!defined('ABSPATH')) {
    exit;
}

// Thêm menu vào Admin
function bpc_add_admin_menu() {
    add_menu_page(
        'Tạo Bài Viết Nhanh', 
        'Tạo Bài Viết', 
        'manage_options', 
        'bulk-post-creator', 
        'bpc_render_admin_page'
    );
}
add_action('admin_menu', 'bpc_add_admin_menu');

// Lấy danh sách trang
function bpc_get_pages() {
    $pages = get_pages();
    $options = '';
    foreach ($pages as $page) {
        $options .= "<option value='{$page->ID}'>{$page->post_title}</option>";
    }
    return $options;
}

// Hiển thị giao diện plugin
function bpc_render_admin_page() {
    ?>
    <div class="wrap">
        <h1>Tạo Bài Viết Nhanh</h1>
        <form method="post">
            <table>
                <tr>
                    <td><label for="post_titles">Tiêu đề bài viết (mỗi dòng một bài):</label></td>
                </tr>
                <tr>
                    <td><textarea name="post_titles" id="post_titles" rows="5" cols="50"></textarea></td>
                </tr>
                <tr>
                    <td><label for="post_content">Nội dung mặc định:</label></td>
                </tr>
                <tr>
                    <td><textarea name="post_content" id="post_content" rows="5" cols="50"></textarea></td>
                </tr>
                <tr>
                    <td><label for="page_id">Chọn Trang để hiển thị bài viết:</label></td>
                </tr>
                <tr>
                    <td>
                        <select name="page_id">
                            <option value="">-- Chọn trang --</option>
                            <?php echo bpc_get_pages(); ?>
                        </select>
                    </td>
                </tr>
            </table>
            <br>
            <input type="submit" name="bpc_create_posts" value="Tạo Bài Viết" class="button button-primary">
        </form>
    </div>
    <?php

    if (isset($_POST['bpc_create_posts'])) {
        bpc_create_posts();
    }
}

// Hàm tạo bài viết và gán vào trang
function bpc_create_posts() {
    if (!current_user_can('manage_options')) {
        return;
    }

    $titles = explode("\n", sanitize_textarea_field($_POST['post_titles']));
    $content = sanitize_textarea_field($_POST['post_content']);
    $page_id = intval($_POST['page_id']);
    
    $shortcodes = "";
    
    foreach ($titles as $title) {
        $title = trim($title);
        if (!empty($title)) {
            $post_id = wp_insert_post([
                'post_title'   => $title,
                'post_content' => $content,
                'post_status'  => 'publish',
                'post_author'  => get_current_user_id(),
                'post_type'    => 'post',
            ]);
            
            if ($post_id && $page_id) {
                $shortcodes .= "[post id='$post_id']\n";
            }
        }
    }
    
    if ($page_id && $shortcodes) {
        $existing_content = get_post_field('post_content', $page_id);
        wp_update_post([
            'ID'           => $page_id,
            'post_content' => $existing_content . "\n" . $shortcodes,
        ]);
    }
    
    echo '<div class="updated"><p>Đã tạo bài viết thành công!</p></div>';
}

// Shortcode hiển thị bài viết
function bpc_post_shortcode($atts) {
    $atts = shortcode_atts(['id' => ''], $atts);
    if (!$atts['id']) return '';
    
    $post = get_post($atts['id']);
    if (!$post) return '';
    
    return "<h2>{$post->post_title}</h2><p>{$post->post_content}</p>";
}
add_shortcode('post', 'bpc_post_shortcode');