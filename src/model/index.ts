export interface h5Account {
    id: number
    component_appid: string
    authorizer_appid: string
    func_info: string
    authorizer_access_token: string
    /** 服务号===2 */
    service_type_info: string
    verify_type_info: string
    nick_name: string
    user_name: string
    alias: string
    head_img: string
}

export interface ListData<T> {
    total: number
    hits: T[]
}
