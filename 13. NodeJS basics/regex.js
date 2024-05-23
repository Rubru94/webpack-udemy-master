/**
    const re = /hello/;
    const str = "Hello world";

    console.log(str.match(re)); // null
 */

/**
    const re = /hello/;
    const str = "Hello world";

    console.log(str.match(re)); // [ 'Hello', index: 0, input: 'Hello world', groups: undefined ]
 */

/**
    const re = /\d/; // digit
    const str = "Hello world 4 everyone";

    console.log(str.match(re)); // [ '4', index: 12, input: 'Hello world 4 everyone', groups: undefined ]
 */

/**
    const re = /Hello\s/; // blank
    const str = "Hello world 4 everyone";

    console.log(str.match(re)); // [ 'Hello ', index: 0, input: 'Hello world 4 everyone', groups: undefined  ]
 */

/**
    const re = /[^ell]/; // match any of characters --> At the start of a string (^)
    const str = "Hello world 4 everyone";

    console.log(str.match(re)); // [ 'H', index: 0, input: 'Hello world 4 everyone', groups: undefined ]
 */

/**
    const re = /(jpeg)/; // match grouping of characters
    const str = "abc.jpeg";

    console.log(str.match(re)); // [ 'jpeg', 'jpeg', index: 4, input: 'abc.jpeg', groups: undefined ]
 */

/**
    const re = /(jpeg|png|gif)/; // match grouping of characters OR
    const str = "abc.jpeg";
    const str2 = "abc.png";
    const str3 = "abc.gif";

    console.log(str2.match(re)); // [ 'png', 'png', index: 4, input: 'abc.png', groups: undefined ]
 */

/**
    const re = /.(jpeg|png|gif)$/; // match grouping of characters at the end of a string ($)
    const str = "abc.jpeg";
    const str2 = "abc.png";
    const str3 = "abc.gif";

    console.log(str3.match(re)); // [ '.gif', 'gif', index: 3, input: 'abc.gif', groups: undefined ]
 */

/**
    const re = /go*d/; // used to match 0 or more of the previous --> This case 'o'
    const greeting = "goooooood morning";

    console.log(greeting.match(re)); // [ 'goooooood', index: 0, input: 'goooooood morning', groups: undefined ]
 */

/**
    const re = /go?d/; // Matches 0 or 1 of the previous --> This case 'o'
    const greeting = "gd morning";

    console.log(greeting.match(re)); // [ 'gd', index: 0, input: 'gd morning', groups: undefined ]
 */

const re = /go+d/; // Matches 1 or more of the previous --> This case 'o'
const greeting = "good morning";

console.log(greeting.match(re)); // [ 'good', index: 0, input: 'good morning', groups: undefined ]
