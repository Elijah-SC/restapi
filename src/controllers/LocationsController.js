import { locationsService } from "../services/LocationsService.js";
import { missionsService } from "../services/MissionsService.js";
import BaseController from "../utils/BaseController.js";

export class LocationsController extends BaseController {
  constructor() {
    super(`api/locations`)
    this.router
      .get(``, this.getLocations)
      .get(`/:locationId/missions`, this.getMissionByLocation)
  }
  async getMissionByLocation(request, response, next) {
    try {
      const locationId = request.params.locationId
      const mission = await missionsService.getMissionByLocation(locationId)
      response.send(mission)
    } catch (error) {
      next(error)
    }
  }
  async getLocations(request, response, next) {
    try {
      const locations = await locationsService.getLocations()
      response.send(locations)
    } catch (error) {
      next(error)
    }
  }
}