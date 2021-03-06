export interface ILoginUserResponseDTO {
  redirect_uri: string,
  code: string,
  state: string
}

export interface ILoginUserRequestDTO {
  username: string,
  password: string,
  country: string,
  redirect_uri: string,
  state: string,
  client_id: string,
  response_type?: string,
  failureRedirect?: string,
  cp_convert?: string,
}
