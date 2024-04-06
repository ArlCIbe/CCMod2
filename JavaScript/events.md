# Events - actions that occur in the browser; they give an output in reponse to the user's input

### HTML allows event handler attributes with JS code

### `<button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>`

### the `onclick` attribute is the EVENT HANDLER aka the user input

### `document.getElementById('demo').innerHTML = Date()`, the value assigned to the `onclick` attribute, is the EVENT aka the "output"

### IOW, when the user clicks on the button, JS will react by changing the content of the element `<p>` because it has the word "demo" assigned to its `id` attribute

### `<p id="demo"></p>` to `<p id="demo">The time is?</p>`