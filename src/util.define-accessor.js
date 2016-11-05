/**
 * Define new accessor.
 * 
 * @param { object } obj
 * @param { string } key
 * @param { any } value
 * @returns { object }
 */
export default function defineAccessor (obj, key, value) {
  var _value = value
  Object.defineProperty(obj, key, {
    get () { return _value },
    set (newVal) { 
      _value = newVal

      // Call subscribers of this key item.
      Object.keys(this.$subscribers).forEach(watchingTargetKeyName => {
        if (watchingTargetKeyName !== key) return
        this.$subscribers[watchingTargetKeyName].forEach(func => func(_value))
      })
      
    }
  })
  return obj
}