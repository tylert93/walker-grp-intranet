<?php
/**
 * Plugin Name:     WG Intranet
 * Description:     Example block written with ESNext standard and JSX support – build step required.
 * Version:         0.1.0
 * Author:          The WordPress Contributors
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     dovetailslate
 *
 */

/*
 
  __        ______          __        ______    ___ _   _ _____ ____      _    _   _ _____ _____   _____ ___ _   _  ____ ____  
  \ \      / / ___|         \ \      / /  _ \  |_ _| \ | |_   _|  _ \    / \  | \ | | ____|_   _| |_   _|_ _| \ | |/ ___/ ___| 
   \ \ /\ / / |  _   _____   \ \ /\ / /| |_) |  | ||  \| | | | | |_) |  / _ \ |  \| |  _|   | |     | |  | ||  \| | |  _\___ \ 
    \ V  V /| |_| | |_____|   \ V  V / |  __/   | || |\  | | | |  _ <  / ___ \| |\  | |___  | |     | |  | || |\  | |_| |___) |
     \_/\_/  \____|            \_/\_/  |_|     |___|_| \_| |_| |_| \_\/_/   \_\_| \_|_____| |_|     |_| |___|_| \_|\____|____/ 
                                                                                                                               
 
*/

/* 
 *
 * It works as so:
 * 
 *  1. Enqueues wp scripts based app from ./wp/build/index.js
 *  2. This in turn imports the Create React App intranet app 
 *      built in ./src
 * 
 *   
 */
 

function wg_intranet_enqueue_react() {
    
    $scriptName = 'wg-intranet-react';

    wp_enqueue_style( $scriptName . '_style', plugin_dir_url( __FILE__ ) . 'wp/build/index.css', array(), time(), 'all' );

    wp_register_script( 
        $scriptName, 
        plugin_dir_url( __FILE__ ) . 'wp/build/index.js',
        ['wp-element'], 
        wp_get_theme()->get('Version'), //For production use wp_get_theme()->get('Version')        
        // time(), //For production use wp_get_theme()->get('Version')        
        true// ?inFooter?
    );

    $params = array(
        'wp-nonce' => wp_create_nonce('wp_rest'),
    );

    wp_localize_script( $scriptName, 'wg-wp', $params );

    wp_enqueue_script( $scriptName );
}

function wg_intranet_shortcode() {
    add_shortcode( 'wg_intranet', function() {
        
        return '<div id="wg-intranet-react"></div>';
      });
}
add_action( 'wp_enqueue_scripts', 'wg_intranet_enqueue_react', 5, 0);
add_action( 'init', 'wg_intranet_shortcode', 5, 0);