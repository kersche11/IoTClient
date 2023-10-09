export interface ILight {
    Id: number
    state: IState
    swupdate: ISwupdate
    type: string
    name: string
    modelid: string
    manufacturername: string
    productname: string
    capabilities: ICapabilities
    config: IConfig
    uniqueid: string
    swversion: string
    swconfigid: string
    productid: string
  }
  
  export interface IState {
    on: boolean
    bri: number
    hue?: number
    sat?: number
    effect?: string
    xy?: number[]
    ct?: number
    alert: string
    colormode?: string
    mode: string
    reachable: boolean
  }
  
  export interface ISwupdate {
    state: string
    lastinstall: string
  }
  
  export interface ICapabilities {
    certified: boolean
    control: IControl
    streaming: IStreaming
  }
  
  export interface IControl {
    mindimlevel: number
    maxlumen: number
    colorgamuttype?: string
    colorgamut?: number[][]
    ct?: ICt
  }
  
  export interface ICt {
    min: number
    max: number
  }
  
  export interface IStreaming {
    renderer: boolean
    proxy: boolean
  }
  
  export interface IConfig {
    archetype: string
    function: string
    direction: string
    startup?: IStartup
  }
  
  export interface IStartup {
    mode: string
    configured: boolean
  }
  