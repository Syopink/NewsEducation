<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'education' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '_5uK/V?wvMp@Cip[*Wksm`+GUMj>:^Q:}3p@@do*5ZbIsgVT-2[t-#DV|Epd3c[V' );
define( 'SECURE_AUTH_KEY',  'FB)WDlFictHw^4#@|CP--<*3b|+g=+Nf(q*xw*ZCQkRnO_,VLJo$<$$ `p=UY]v*' );
define( 'LOGGED_IN_KEY',    '7HEN~.Bpg0m>JNhBV* { dAe?m+88=3$sF]E}LqCMGW-0?p:5)]8}sC)57%C_N@<' );
define( 'NONCE_KEY',        'GRkv.$`h<kIjbItBK}* wCXh5U4F~<Uz47$a[;&aqTc})Ag?<M:HiU?m.4b7SfTm' );
define( 'AUTH_SALT',        'EZM8;X3l+:c[}3j,BEBsn7:<zrImm^V4InN1KoNef[0$t(m!JlGJ#VI>O3Q~!LVu' );
define( 'SECURE_AUTH_SALT', '_kFZOxU:<69k=XHRp|pWczzD=O9xGVV%UCT1)G<+GCX@7<K`/.LpgT5kLhGh+/cM' );
define( 'LOGGED_IN_SALT',   'dmlIl_F/JNm0CU@m9N^@->WGC1DL.bE*Mn6/Kr@ZG>&2Xq6qH;Ga=v2MwanFf<Um' );
define( 'NONCE_SALT',       'nxI:]K=Ks<:UIe/G[}p=5F9Y-NygAmB`z}19Y15zL#biL&l!^=^SO;&5YdvC`!42' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'edu_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */

define('WP_HOME', 'http://localhost/newsEducation');
define('WP_SITEURL', 'http://localhost/newsEducation');



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
