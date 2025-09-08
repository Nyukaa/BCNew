<?php get_header(); ?>

<div id="content">
    <main>
        <!-- <h1>Blog about Mushrooms</h1> -->
        
        <div id="blog-box" class="post-grid">
            <?php
            if (have_posts()) :
                while (have_posts()) : the_post(); ?>
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
            <?php endif; ?>
        </div><!-- blog-box -->
    </main>

    <?php get_sidebar(); ?>
</div><!-- content -->

<?php get_footer(); ?>
