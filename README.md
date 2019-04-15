# ting-movie

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

## Team

| [![Nguyễn Duy Cương](https://github.com/cuongw.png?size=150)](https://github.com/cuongw) | [![Vi Chí Thiện](https://github.com/tvc12.png?size=150)](https://github.com/tvc12) | [<img src="https://github.com/HuyenNgo.png" width="150">](https://github.com/HuyenNgo) |
| :---: | :---: | :---: |
| [Nguyen Duy Cuong](https://github.com/cuongw) | [Vi Chi Thien](https://github.com/tvc12) | [Ngo Thi Huyen](https://github.com/HuyenNgo) |
