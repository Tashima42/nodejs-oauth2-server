module.exports = function ({Client}) {
  return Object.freeze({
    saveClient,
    getClient,
  })
  async function saveClient({clientId, clientSecret, redirectUris, grants, apiKey}) {
    const insert = await Client.create({
      clientId,
      clientSecret,
      redirectUris,
      grants,
      apiKey
    })
    console.log("SAVE CLIENT", {clientId, clientSecret, redirectUris, grants, apiKey, insert})
    return insert
  }
  async function getClient(searchParams) {
    const params = typeof searchParams === "string" ? {clientId: searchParams} : searchParams
    const found = await Client.findOne(params).lean()
    console.log("GET CLIENT", {searchParams, found})
    return found ? found : null
  }
}
