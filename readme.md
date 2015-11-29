## Usage

`npm install --save convolver`

```javascript
var Convolver = require('convolver');
var emt140 = require('emt-one-forty');

var loop = getRockingLoopIWantToAddReverbTo();

var convolver = Convolver(context, emt140('bright1'))

loop.connect(master);
loop.connect(convolver);
convolver.connect(master);
convolver.gain.value = 0.1;
```
