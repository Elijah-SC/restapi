import { Auth0Provider } from "@bcwdev/auth0provider";
import { missionsService } from "../services/MissionsService.js";
import BaseController from "../utils/BaseController.js";

export class MissionsController extends BaseController {
  constructor() {
    super(`api/missions`)
    this.router
      .get(``, this.getMissions)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post(``, this.createMission)
      .put(`/:missionId`, this.updateMission)
  }
  async getMissions(request, response, next) {
    try {
      const missions = await missionsService.getMissions()
      response.send(missions)
    } catch (error) {
      next(error)
    }
  }
  async createMission(request, response, next) {
    try {
      const missionData = request.body
      const createdMission = await missionsService.createMission(missionData)
      response.send(createdMission)
    } catch (error) {
      next(error)
    }
  }
  async updateMission(request, response, next) {
    try {
      const missionId = request.params.missionId
      const updateData = request.body
      const updatedMission = await missionsService.updateMission(missionId, updateData)
      response.send(updatedMission)
    } catch (error) {
      next(error)
    }
  }
}