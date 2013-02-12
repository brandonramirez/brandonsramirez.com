SERVER_ADDR=173.254.28.65

upload:
	rsync -avz --delete --exclude-from=.ignorersync -e ssh . $(WEBHOST_SSH_USERNAME)@$(SERVER_ADDR):public_html
