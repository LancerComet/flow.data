# Flow.Data
A tiny data toolkit for storing & sharing data.

Under construction.

## Usage.
```javascript
// Create flow item.
const info = FlowData.createItem('info', {
  name: 'myName', age: 10
})

// Subscribe it to watch changing.
info.subscribe('name', function (newVal) {
  console.log('info.name has been changed: ', newVal)
})

info.subscribe('age', function (newVal) {
  console.log('info.age has been changed: ', newVal)
})

// Update value.
// Both methods are ok.
info.name = 'John Hathway'
info.age = 10000

info.update('name', 'John Smith')
info.update('age', 20000)

// You can get a flow item by using Flow.getItem()
const info = FlowData.getItem('info')
// Do something else ...
```


