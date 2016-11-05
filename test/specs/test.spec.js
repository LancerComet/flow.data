import FlowData from 'src'

describe('FlowData standalone data item testing.', () => {
  it('Define standalone item name.', () => {
    const $name = FlowData.createItem('name', 'LancerComet')
    expect($name.$id).equal('name')
    expect($name.name).equal('LancerComet')
  })

  it('Get standalone item name.', () => {
    const $name = FlowData.getItem('name')
    expect($name.$id).equal('name')
    expect($name.name).equal('LancerComet')
  })

  it('Define standalone item myInfo.', () => {
    const $myInfo = FlowData.createItem('myInfo', {
      name: 'LancerComet', age: 26
    })

    expect($myInfo.$id).equal('myInfo')
    expect($myInfo.name).equal('LancerComet')
    expect($myInfo.age).equal(26)
  })

  it('Get standalone item myInfo', () => {
    const $myInfo = FlowData.getItem('myInfo')

    expect($myInfo.$id).equal('myInfo')
    expect($myInfo.name).equal('LancerComet')
    expect($myInfo.age).equal(26)
  })

  it('Change myinfo\'s name to "newName".', () => {
    const $myInfo = FlowData.getItem('name')
    const newValue = 'newName'
    $myInfo.update('name', newValue)
    expect($myInfo.name).equal(newValue)
  })

  
})

describe('FlowData collection definition testing.', () => {

})
