<?php
get_header(); ?>

<div id="hero-section" style="background-image: url('<?php echo get_template_directory_uri(); ?>/forest-hero.jpg'); background-size: cover; background-position: center; padding: 120px 20px; text-align: center; color: #fff;">
    <div class="hero-content" >
        <h1>Discover Mushrooms in Finland</h1>
        <p>Join a guided mushroom foraging tour and explore the Finnish forests safely while learning about edible and poisonous mushrooms.</p>
        <a href="/booking" class="cta-button">Buy Mushroom Tour</a>
    </div>
</div>

<!-- Контент из админки (главная страница WP) -->
<div id="frontpage-text" >
    <?php
    while (have_posts()) : the_post();
        the_content();
    endwhile;
    ?>
</div>

<div id="content">
    <main>
        <div id="blog-box" class="post-grid">
    <?php
    $the_query = new WP_Query(array(
        'post_type'      => 'post',
        'orderby'        => 'date',
        'order'          => 'DESC',
        'posts_per_page' => 6
    ));

    if ($the_query->have_posts()) :
        while ($the_query->have_posts()) : $the_query->the_post(); ?>
            <div class="blog-card">
    <?php if (has_post_thumbnail()) : ?>
        <a href="<?php the_permalink(); ?>" class="thumb">
            <?php the_post_thumbnail('card-thumb'); ?>
        </a>
    <?php else : ?>
        <a href="<?php the_permalink(); ?>" class="thumb">
            <img src="<?php echo get_template_directory_uri(); ?>/no-image.png" alt="No image available">
        </a>
    <?php endif; ?>

    <div class="card-content">
        <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
        <p class="date"><?php echo get_the_date(); ?></p>
        <?php the_excerpt(); ?>
        <a href="<?php the_permalink(); ?>" class="read-more">Read More</a>
    </div>
</div>
        <?php endwhile;
    else : ?>
        <p>No posts found</p>
    <?php
    endif;
    wp_reset_postdata();
    ?>
</div>
 <!--blog-box-->
    </main>
    <?php get_sidebar();?>
</div><!--content-->

<?php get_footer(); ?>
