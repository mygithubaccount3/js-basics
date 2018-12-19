(() => { //function() { } for ES5; all variables is const in new ES, except for some purpose
    setTimeout(() => {
        const a = Number(prompt("Enter first arg"));
        const b =  Number(prompt("Enter second arg"));
        let action;

        do {
            action = prompt("Enter action as arithmetical operation");
        } while(
            !(
                action === '+'
                || '-' === action
                || '*' === action
                || '/' === action
                || '%' === action
                || 'power' === action
            )
            );

        (action === '+')
            ? (() => {
                alert('Result: ' + (a + b)); //or comma operator
                alert("Test");
            }) ()
            : ('-' === action)
                ? alert('Result: ' + (a - b))
                : ('*' === action)
                    ? alert('Result: ' + (a * b))
                    : ('/' === action)
                        ? alert('Result: ' + (a / b))
                        : ('%' === action)
                            ? alert('Result: ' + (a % b))
                            : ('power' === action)
                                ? alert('Result: ' + (Math.pow(a, b)/* a ** b*/))
                                : alert("Unavailable action")
        ;

        /** if else construction */
        /*if (action === '+') {
            alert('Result: ' + (a + b));
        } else if ('-' === action) {
            alert('Result: ' + (a - b));
        } else if ('*' === action) {
            alert('Result: ' + (a * b));
        } else if ('/' === action) {
            alert('Result: ' + (a / b));
        } else if ('%' === action) {
            alert('Result: ' + (a % b));
        } else {
            alert("Unavailable action");
        }*/

        /*switch (action) {
            case '+':
                alert('Result: ' + (a + b));
                break;
            case '-':
                alert('Result: ' + (a - b));
                break;
            case '*':
                alert('Result: ' + (a * b));
                break;
            case '/':
                alert('Result: ' + (a / b));
                break;
            case '%':
                alert('Result: ' + (a % b));
                break;
            default:
                alert("Unavailable action");
        }*/
    }, 100);

}) ();