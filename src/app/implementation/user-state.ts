
export interface UserStateProperties {
    name:string
  userId:string


}
export interface UserStateJson{
    toJSON():UserStateProperties
}
export interface UserState extends UserStateProperties,UserStateJson{
    name:string
    userId:string
    toJSON():UserStateProperties
}