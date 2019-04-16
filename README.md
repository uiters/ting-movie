# ting-movie
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

[![Build Status](https://travis-ci.org/cuongw/ting-movie.svg?branch=master)](https://travis-ci.org/cuongw/ting-movie)
[![GitHub](https://img.shields.io/github/license/cuongw/ting-movie.svg)](https://github.com/cuongw/ting-movie/blob/master/LICENSE)


🦄 Find Movie Showtimes & Buy Tickets.

![](screenshots/showtime.gif)

## Features

- Show times
- Buy ticket
- Latest News about movies
- Show informations films
- Rating and review films

## Installation

**Step 1**: clone the project

```sh
$ git clone https://github.com/cuongw/ting-movie.git
$ cd ting-movie
```

**Step 2**: install dependencies

```sh
$ npm i
## or
$ yarn
```

You're wanting to run demo now. Skip to [Usage](#usage)

**Step 3*** (option): setup hook server

- Upload all file at folder `server` in your hosting or localhost with server apache.

- Edit url at lines 4 each files in folder `src/api` (**except** `index.js`)

Example:

File `cinemas.js` and `ting.movie` is your domain: `ting.movive/server/cinemas.php`

More informations about API. See [API tutorial](server/README.md)


## Usage

```sh
$ npm start
## or
$ yarn start
```

## Build

```sh
$ npm run build
## or
$ yarn build
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="http://cuongw.me"><img src="https://avatars0.githubusercontent.com/u/34389409?v=4" width="100px;" alt="Cuong Duy Nguyen"/><br /><sub><b>Cuong Duy Nguyen</b></sub></a><br /><a href="https://github.com/cuongw/ting-movie/commits?author=cuongw" title="Code">💻</a> <a href="#design-cuongw" title="Design">🎨</a> <a href="https://github.com/cuongw/ting-movie/commits?author=cuongw" title="Documentation">📖</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!