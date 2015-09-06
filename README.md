# Express goto
Middleware to let you jump between ExpressJS route handlers.

## Usage
```js
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

    // Jump to StepOne
    if (true) {
        req.goto('StepTwo');
    }
}
```
