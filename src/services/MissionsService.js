import { dbContext } from "../db/DbContext.js"

class MissionsService {
  async getMissionByLocation(locationId) {
    const mission = await dbContext.Mission.find({ locationId: locationId }).populate(`rat`, `callsign specialties`).populate(`location`)
    return mission
  }
  async getMissionsByRatId(ratId) {
    const missions = await dbContext.Mission.find({ ratId: ratId }).populate(`rat`, `callsign specialties`).populate(`location`)
    return missions
  }
  async createMission(missionData) {
    const createdMission = await dbContext.Mission.create(missionData)
    await createdMission.populate(`rat`, `callsign specialties`)
    await createdMission.populate(`location`)
    return createdMission
  }
  async getMissions() {
    const missions = await dbContext.Mission.find().populate(`rat`, `callsign specialties`).populate(`location`)
    return missions
  }
  async updateMission(missionId, updateData) {
    const missionToUpdate = await dbContext.Mission.findById(missionId)
    // console.log(`updating Mission`, missionToUpdate);
    // console.log(`Update Data`, updateData);
    if (updateData.objective != undefined) missionToUpdate.objective = updateData.objective
    missionToUpdate.completed = updateData.completed

    await missionToUpdate.save()

    return missionToUpdate

  }

}

export const missionsService = new MissionsService()