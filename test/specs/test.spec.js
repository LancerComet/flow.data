import FlowData from 'src'

describe('FlowData single item definition testing.', () => {
  it('Define standalone item name.', () => {
    const $name = new FlowData.item('name', 'LancerComet')
    expect($name.$id).equal('name')
    expect($name.value).equal('LancerComet')
  })

  it('Get standalone item name.', () => {
    const $name = FlowData.getItem('name')
    expect($name.$id).equal('name')
    expect($name.value).equal('LancerComet')
  })

  it('Change name\'s value to "newName".', () => {
    const $name = FlowData.getItem('name')
    const newValue = 'newName'
    $name.update(newValue)
    expect($name.value).equal(newValue)
  })

})

describe('FlowData collection definition testing.', () => {

})
