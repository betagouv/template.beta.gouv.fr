build:  ## Generates the static website
	hugo
run:    ## Runs a webserver that updates on changes
	hugo serve &
	yarn --cwd themes/template.beta.gouv.fr/static dev
static:
	yarn --cwd themes/template.beta.gouv.fr/static install
clean:  ## Deletes all the generates files
	rm -r ./public &
	rm -r ./themes/template.beta.gouv.fr/static/node_modules
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
publish: ## Publishes npm package
	yarn --cwd themes/template.beta.gouv.fr/static prepublish &
	yarn --cwd themes/template.beta.gouv.fr/static publish

.PHONY: build run static clean help publish
