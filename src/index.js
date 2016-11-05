/**
 * Flow.Data By LancerComet at 10:30, 2016.10.31.
 * # Carry Your World #
 * 
 * A tiny data flow controller.
 */
import typeDetective from './util.type-detective'
import DataItem from './class.data-item'
import defineAccessor from './util.define-accessor'

// Object to store data.
const ITEMSTORE = {}
const COLLECTIONSTEORE = {}

/**
 * FlowData main Object.
 */
const FlowData = {
  // Create new item.
  createItem (itemName = '', value = null) {
    // If ITEMSTORE[itemName] is existing, return false.
    if (ITEMSTORE[itemName] !== undefined) {
      return false
    }

    // Object for storing data.
    var _newObj = new DataItem(itemName)

    // Plain the object.
    if (typeDetective(value) === 'Object') {
      Object.keys(value).forEach(key => {
        _newObj = defineAccessor(_newObj, key, value[key])
      })
    } else {
      _newObj = defineAccessor(_newObj, itemName, value)
    }

    // Create _dataObj by using Object.create.
    const _dataObj = Object.create(_newObj)
    
    // Store object to ITEMSTORE by using Object.create.    
    ITEMSTORE[itemName] = _dataObj

    return _dataObj

  },

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

window.FlowData = FlowData
export default FlowData
