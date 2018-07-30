# Makefile

install:
	npm install

start:
	npm run babel-node -- src/bin/brain-games.js

publish:
	nom publish