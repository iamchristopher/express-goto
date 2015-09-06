'use strict';

module.exports = function (req, res, next) {
    req.goto = function goto (step) {
        if (typeof step == 'undefined') {
            throw 'Must provide a step to jump to.';
        }

        var stack = this.route.stack;

        if (typeof stack[step] != 'undefined') {
            return this.route.stack[step].handle(req, res, next);
        }

        var handler = stack.filter(filterStack.bind(null, step)).shift();
        
        if (typeof handler != 'undefined') {
            return handler.handle(req, res, next);
        }

        throw 'Cannot jump to ' + step;
    };

    function filterStack (handler, stack) {
        return stack.name == handler;
    }

    return next();
};
