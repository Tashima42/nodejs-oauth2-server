import {IClient} from "./IClient";
import {IUser} from "./IUser";

export interface IToken {
  accessToken: string,
  accessTokenExpiresAt: Date,
  refreshToken: string,
  refreshTokenExpiresAt: Date,
  client: IClient,
  user: IUser,
  id?: string,
}
