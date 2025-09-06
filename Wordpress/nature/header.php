<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap">
    <meta charset="<?php bloginfo('charset'); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <?php wp_head(); ?>
  </head>
  <body <?php body_class(); ?>>
    <div id="site-container">
      <nav id="top-navi">
        <?php 
          $args = [ 'theme_location' => 'primary' ];
          wp_nav_menu($args);
        ?>
      </nav>
      <header id="site-header">
        <h1><?php bloginfo('name'); ?></h1>
      </header>

      
 