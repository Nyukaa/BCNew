<?php
class TourCatalog_Widget extends WP_Widget {

    function __construct() {
        parent::__construct(
            'tourcatalog_widget', // ID
            __('Tour Catalog Widget', 'tourcatalog'), // Name
            array('description' => __('Displays the nearest upcoming tour (starting tomorrow)', 'tourcatalog'))
        );
    }

    public function widget($args, $instance) {
        echo $args['before_widget'];

        if (!empty($instance['title'])) {
            echo $args['before_title'] . apply_filters('widget_title', $instance['title']) . $args['after_title'];
        }

        
        $tomorrow = date('Y-m-d', strtotime('+1 day'));

        //  nearest tour starting tomorrow or later
        $query = new WP_Query(array(
            'post_type'      => 'tourcatalog_tour',
            'posts_per_page' => 1,
            'meta_key'       => '_tourcatalog_meta_time', 
            'meta_value'     => $tomorrow,
            'meta_compare'   => '>=',
            'orderby'        => 'meta_value',
            'order'          => 'ASC',
        ));

        if ($query->have_posts()) {
            while ($query->have_posts()) {
                $query->the_post();

                $place = get_post_meta(get_the_ID(), '_tourcatalog_meta_place', true);
                $date  = get_post_meta(get_the_ID(), '_tourcatalog_meta_time', true);
                $price = get_post_meta(get_the_ID(), '_tourcatalog_meta_price', true);
                $duration = get_post_meta(get_the_ID(), '_tourcatalog_meta_duration', true);

              echo '<div class="tour-widget">';
                    echo '<h4 class="widget-h4"><a href="' . get_permalink() . '">' . get_the_title() . '</a></h4>';

                    if (has_post_thumbnail()) {
                        echo '<div class="tour-thumb">' . get_the_post_thumbnail(get_the_ID(), 'thumbnail') . '</div>';
                    }

                    if ($place) {
                        echo '<p class="tour-meta place">' . esc_html($place) . '</p>';
                    }
                    if ($date) {
                        echo '<p class="tour-meta date">' . esc_html($date) . '</p>';
                    }
                     if ($duration) {
                        echo '<p class="tour-meta duration">' . esc_html($duration) . ' hours</p>';
                    }
                    if ($price) {
                        echo '<p class="tour-meta price">' . esc_html($price) . ' €</p>';
                    }
                   
                echo '</div>';

            }
            wp_reset_postdata();
        } else {
            echo '<p>No upcoming tours.</p>';
        }

        echo $args['after_widget'];
    }

    public function form($instance) {
        $title = !empty($instance['title']) ? $instance['title'] : __('Upcoming Tour', 'tourcatalog');
        ?>
        <p>
            <label for="<?php echo esc_attr($this->get_field_id('title')); ?>"><?php _e('Title:'); ?></label>
            <input 
                class="widefat" 
                id="<?php echo esc_attr($this->get_field_id('title')); ?>" 
                name="<?php echo esc_attr($this->get_field_name('title')); ?>" 
                type="text" 
                value="<?php echo esc_attr($title); ?>">
        </p>
        <?php
    }

    public function update($new_instance, $old_instance) {
        $instance = array();
        $instance['title'] = (!empty($new_instance['title'])) ? strip_tags($new_instance['title']) : '';
        return $instance;
    }
}


function register_tourcatalog_widget() {
    register_widget('TourCatalog_Widget');
}
add_action('widgets_init', 'register_tourcatalog_widget');
?>
