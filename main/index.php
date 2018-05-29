<php>
	<script>
		readfile(".\index.html");

		RewriteEngine On
		RewriteCond %{REQUEST_FILENAME} !-f
		RewriteRule ^([^\.]+)$ $1.html [NC,L]
	</script>
</php>