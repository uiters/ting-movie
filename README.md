# Ting Movie

[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg)](#contributors)
[![Build Status](https://travis-ci.org/cuongw/ting-movie.svg?branch=master)](https://travis-ci.org/cuongw/ting-movie)
![david](https://img.shields.io/david/cuongw/ting-movie.svg)
[![Hits-of-Code](https://hitsofcode.com/github/cuongw/ting-movie)](https://hitsofcode.com/view/github/cuongw/ting-movie)
[![GitHub](https://img.shields.io/github/license/cuongw/ting-movie.svg)](https://github.com/cuongw/ting-movie/blob/master/LICENSE)

🎬 Easy way to view movie showtimes at cinemas in Ho Chi Minh city(🇻🇳 Vietnam).

![screenshot](screenshots/showtime.gif)

## Features

- Movie informations (trailer, IMDb point, duration, description, publish date).
- Movie showtimes by date and by cinema.

## Installation

**Step 1**: clone the project

```sh
$ git clone https://github.com/cuongw/ting-movie.git
$ cd ting-movie
```

**Step 2**: install dependencies

```sh
$ npm i
# or
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
# or
$ yarn start
```

## Build

```sh
$ npm run build
# or
$ yarn build
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="http://cuongw.me"><img src="https://avatars0.githubusercontent.com/u/34389409?v=4" width="100px;" alt="Cuong Duy Nguyen"/><br /><sub><b>Cuong Duy Nguyen</b></sub></a><br /><a href="https://github.com/cuongw/ting-movie/commits?author=cuongw" title="Code">💻</a> <a href="#design-cuongw" title="Design">🎨</a> <a href="https://github.com/cuongw/ting-movie/commits?author=cuongw" title="Documentation">📖</a> <a href="#review-cuongw" title="Reviewed Pull Requests">👀</a> <a href="#maintenance-cuongw" title="Maintenance">🚧</a> <a href="https://github.com/cuongw/ting-movie/commits?author=cuongw" title="Tests">⚠️</a></td><td align="center"><a href="https://www.facebook.com/tvc1212"><img src="https://avatars2.githubusercontent.com/u/35712888?v=4" width="100px;" alt="Thien Chi Vi"/><br /><sub><b>Thien Chi Vi</b></sub></a><br /><a href="https://github.com/cuongw/ting-movie/commits?author=tvc12" title="Code">💻</a> <a href="https://github.com/cuongw/ting-movie/commits?author=tvc12" title="Documentation">📖</a> <a href="#tool-tvc12" title="Tools">🔧</a> <a href="#maintenance-tvc12" title="Maintenance">🚧</a> <a href="#question-tvc12" title="Answering Questions">💬</a> <a href="https://github.com/cuongw/ting-movie/commits?author=tvc12" title="Tests">⚠️</a></td><td align="center"><a href="https://github.com/HuyenNgo"><img src="https://avatars0.githubusercontent.com/u/38158626?v=4" width="100px;" alt="HuyenNgo"/><br /><sub><b>HuyenNgo</b></sub></a><br /><a href="https://github.com/cuongw/ting-movie/commits?author=HuyenNgo" title="Code">💻</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License

MIT [cuongw](https://github.com/cuongw)
