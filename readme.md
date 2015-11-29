## Usage

`npm install --save convolver`

```javascript
var Convolver = require('convolver');
var emt140 = require('one-forty');

var context = new AudioContext();

var loop = getRockingLoopIWantToAddReverbTo();

var convolver = Convolver(context, emt140('bright1'))
convolver.connect(context.destination);

loop.connect(context.destination);
loop.connect(convolver);
```
