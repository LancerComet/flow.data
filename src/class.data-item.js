import typeDetective from './util.type-detective'

/**
 * Standalone data item class.
 * 
 * @class DataItem
 * 
 * @typedef { class } DataItem
 * @prop { string } $id
 * @prop { object } $subscribers
 * @prop { function } update
 * @prop { function } subscribe
 */
class DataItem {
  constructor ($id = '') {
    this.$id = $id

    // Store functions that are registered by using subscribe().
    this.$subscribers = {}
  }

  /**
   * Update value.
   * 
   * @param { string } keyName
   * @param { any } newVal
   * @returns { DataItem }
   * 
   * @memberOf DataItem 
   */
  update (keyName, newVal) {
    this[keyName] = newVal
    return this
  }

  /**
   * Register new listener.
   * 
   * @param { string } keyName - Specify which key will be subscribed.
   * @param { function } subscriber - Callback Function.
   * @returns { DataItem }
   * 
   * @memberOf DataItem
   */
  subscribe (keyName, subscriber) {
    if (typeDetective(subscriber) !== 'Function') {
      throw new Error('[FlowData] Subscriber must be function.')
    }

    // Create $subscribers[keyName] if isn't existing.
    if (!this.$subscribers[keyName]) this.$subscribers[keyName] = []
    
    // Push subscriber into this.$subscribers[keyName]
    this.$subscribers[keyName].push(subscriber)
    return this
  }
}

export default DataItem
