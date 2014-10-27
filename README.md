# Viki

This is the main viki code. It build the website actually.
The webpage will load markdown files in viki-md repo by ajax.

# build Instruction

Prerequisite

```
gem install compass
npm install -g grunt-cli bower
```

Install dependencies

```
npm install
bower install
```

to develop:

```
grunt serve
```

to build and deploy:

```
grunt build
grunt gh-pages
```

## Change Code Theme

In `bower_components/highlightjs/bower.json`, change `main` value.
