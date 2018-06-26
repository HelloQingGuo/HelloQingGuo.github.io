# Personal Website Repository

After cloning the repository, you can use the following commands to develop and build the WEBSITE.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the website on [Github Page](https://pages.github.com/).

## Prerequisites

Please download and install:
[Node.js](https://nodejs.org/en/download/)

Npm will be downloaded and installed along with Node.js

## Installing

```
cd into project directory
yarn install
```

## Building Project

it will execute `npm run clean` firstly, then build the project and place the assets in the **build** directory.

```
yarn run build
```

## Running Project in Development Environment

```
yarn run start
```

### Deploying Project

it will execute `build` firstly, then copy all the static files under **build** to the root directory

```
yarn run deploy
push all the changes to the master branch
```
