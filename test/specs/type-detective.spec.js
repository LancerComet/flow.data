import typeDetective from '../../src/util.type-detective'

describe('Type detective testing.', () => {
  it('type Number.', () => {
    expect(typeDetective(10)).equal('Number')
  })

  it('type String', () => {
    expect(typeDetective('String')).equal('String')    
  })

  it('type Array', () => {
    expect(typeDetective([10, 20])).equal('Array')    
  })

  it('type Object', () => {
    expect(typeDetective({ obj: 'obj' })).equal('Object')    
  })

  it('type Function', () => {
    expect(typeDetective(function () {})).equal('Function')    
  })

  it('type Null', () => {
    expect(typeDetective(null)).equal('Null')    
  })
})
