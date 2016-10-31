/**
 * Flow.Data By LancerComet at 10:30, 2016.10.31.
 * # Carry Your World #
 * 
 * A tiny data flow controller.
 */

// Object to store data.
const ITEMSTORE = {}
const COLLECTIONSTEORE = {}

/**
 * Standalone data item class.
 * 
 * @class DataItem
 */
class DataItem {
  constructor (itemName = '', value) {
    // If ITEMSTORE[itemName] is existing, return false.
    if (ITEMSTORE[itemName] !== undefined) {
      return false
    }

    // Define this.value by using accessor.
    var _value = value
    Object.defineProperty(this, 'value', {
      get () { return _value },
      set (newVal) { _value = newVal }
    })

    // Register this dataItem to itemStore.
    this.$id = itemName    
    ITEMSTORE[itemName] = this
  }

  /**
   * Update value.
   * 
   * @param { any } newVal
   * @returns { boolean }
   */
  update (newVal) {
    if (newVal === undefined) { return false }
    this.value = newVal
    return this
  }
}


const FlowData = {
  // FlowData.item set to Class DataItem {}.
  item: DataItem,

  /**
   * Get a data that has been defined before.
   * 
   * @param { string } item
   * @returns { DataItem }
   */
  getItem (item) {
    return ITEMSTORE[item]
  },

  collection: {
    /**
     * 
     * 
     * @param {string} [collectionName='']
     */
    get (collectionName = '') {

    },

    /**
     * 
     * 
     * @param {string} [collectionName='']
     */
    define (collectionName = '') {

    }
  }
}

export default FlowData
