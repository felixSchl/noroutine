# Noroutine

```javascript
no = f => Bluebird.coroutine(f)();
```

## Installation

```
$ npm install --save noroutine
```

## Usage

```javascript
import no from 'noroutine';
no(function*() {
    yield new Promise((resolve, reject) => {})
})
```
