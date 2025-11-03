let user = null;

console.log(user ?? "guest") // nullish coalescing operator

function connect(options){
    let host = options.host ?? 'localhost'
    let port = options.port ?? 3000;
    let protocol = options.protocol ?? 'http';

    return `connecting to ${protocol}://${host}:${port}`;
}

console.log(connect({host : 'nohost', protocol : 'https',port : 1204}));


// he Nullish Coalescing Operator (??) works when the left-hand side is either:

// 👉 null or undefined

// If the left-hand side is anything else (even falsy values like 0, '', or false),
// it will NOT trigger the right-hand side.