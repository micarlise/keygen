
Key Generation Service

returns small url friendly short codes.

### API

```javascript

const keyGen = require('keyGen');

keyGen(8)
    .then((newKey) => {
        console.log(newKey)
    });
```
