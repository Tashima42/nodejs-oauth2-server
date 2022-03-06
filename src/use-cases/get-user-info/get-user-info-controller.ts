import {Request, Response} from "express";
import {GetUserInfoResponseDTO} from "./get-user-info-response-DTO";
import {GetUserInfoUseCase} from "./get-user-info-use-case"

export class GetUserInfoController {
  constructor(private getUserInfoUseCase: GetUserInfoUseCase) {}

  async handle(request: Request, response: Response): Promise<unknown> {
    // Extract authorization access token from headers
    const token = request.headers.authorization.replace('Bearer ', '')
    try {
      // Get user information from the access token
      const userInfo: GetUserInfoResponseDTO = await this.getUserInfoUseCase.execute({token})
      return response.status(200).json(userInfo)
    } catch (error: any) {
      if (error.code)
        return response.status(401).json({success: false, message: "Authorization token not found"})
      return response.status(500).json({success: false, message: "Unexpected error, contact the developers"})
    }
  }
}
