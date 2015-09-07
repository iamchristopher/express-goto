# Express goto
Middleware to let you jump between ExpressJS route handlers.

## Installation
```js
npm i express-goto
```

## Usage
You can pass either a numeric key or method name for the handler to jump to.
```js
var router = require('express').Router();
router.use(require('express-goto'));

router.post('/', StepOne, StepTwo, StepThree);

function StepOne (req, res, next) {

    // Jump to StepThree
    if (true) {
        req.goto(2);
    }
}

function StepTwo (req, res, next) {
    res.end('Jump around!');
}

function StepThree (req, res, next) {

    // Jump to StepTwo
    if (true) {
        req.goto('StepTwo');
    }
}
```
