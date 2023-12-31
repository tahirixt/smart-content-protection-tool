<?php
/**
 * Plugin Name: Smart Content Protection Tool
 * Plugin URI: https://inventorx.org/
 * Description: A simple plugin to disable right-clicking and text selection.
 * Version: 1.0
 * Author: Tahir R.
 * Author URI: https://inventorx.org/
 * License: GPL2
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
    die;
}

function scpt_enqueue_scripts_and_styles() {
    // Enqueue the JavaScript file
    wp_enqueue_script(
        'scpt_script',
        plugin_dir_url( __FILE__ ) . '/assets/js/script.js',
        array(),
        '1.0',
        true
    );

    // Enqueue the CSS file
    wp_enqueue_style(
        'scpt_style',
        plugin_dir_url( __FILE__ ) . '/assets/css/style.css',
        array(),
        '1.0',
        'all'
    );

    // Also enqueue some inline CSS to help disable text selection
    wp_add_inline_style('wp-block-library', '.no-select { user-select: none !important; }');
}

function scpt_add_body_class($classes) {
    $classes[] = 'no-select';
    return $classes;
}

// Add a class to the body tag
add_filter('body_class', 'scpt_add_body_class');

// Hook the function to the 'wp_enqueue_scripts' action
add_action( 'wp_enqueue_scripts', 'scpt_enqueue_scripts_and_styles' );
