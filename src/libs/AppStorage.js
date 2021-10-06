
function proxy(storage, namespace) {
  const namespaceKey = (key) => `${namespace}/${key}`
  return new Proxy(storage, {
    get(storage, key) {
      const jsonValue = storage.getItem(namespaceKey(key))
      return JSON.parse(jsonValue)
    },
    set(storage, key, value) {
      const jsonValue = JSON.stringify(value)
      storage.setItem(namespaceKey(key), jsonValue)
      return true
    },
    deleteProperty(storage, key) {
      storage.removeItem(namespaceKey(key))
      return true
    }
  })
}

export default proxy;