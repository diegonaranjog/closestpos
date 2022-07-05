const getCoordinatesService = require('./getCoordinatesService')
const getDistancesService = require('./getDistancesService')

const closestPOS = async (clientAddress) => {
  try {
    const coordinatesClient = [await getCoordinatesService(clientAddress)]
    const distanceService = await getDistancesService(coordinatesClient)

    const closestPOS = distanceService.reduce((acc, curr) => {
      if (acc.distance.value > curr.distance.value) {
        return curr
      }
      return acc
    })

    // return closestPOS.name
    return distanceService
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = closestPOS