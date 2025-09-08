<?php get_header(); ?>
<div id='content'>
    <main>
        <?php
        if (have_posts()) :
            while (have_posts()) : the_post(); ?>
                <article class="single-post">
                    <h2 class="post-title"><?php the_title(); ?></h2>
                    <p class='date-category'>
                        <?php echo get_the_date(); ?> | <?php echo get_the_category_list(', '); ?>
                    </p>

                    <?php if (has_post_thumbnail()) : ?>
                        <div class="post-image">
                            <?php the_post_thumbnail('large'); ?>
                        </div>
                    <?php endif; ?>

                    <div class="post-content">
                        <?php the_content(); ?>
                    </div>
                </article>
            <?php endwhile;
        else : ?>
            <p>No posts found</p>
        <?php endif; ?>
    </main>
    <?php get_sidebar(); ?>
</div><!--content-->
<?php get_footer(); ?>
