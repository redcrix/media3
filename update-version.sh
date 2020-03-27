sed -i -E 's/(<widget.+version=")[^"]*(".+)/\1'$1'\2/' config.xml
