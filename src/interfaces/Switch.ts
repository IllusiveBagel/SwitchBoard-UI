export interface Switch {
    id: string,
    name: string,
    switchDesign: SwitchDesign,
    switchConstruction: SwitchConstruction,
    actuation: number,
    bottomOut: number,
    preTravel: number,
    totalTravel: number
    spring: string,
    volume: string,
    type: string,
    factoryLubed: boolean,
    authenticated: boolean
}

export interface SwitchDesign {
    id: string,
    switchId: string,
    stemColor: number[],
    stemType: string,
    stemConstruction: string,
    housingTopType: string,
    housingTopColor: number[],
    housingBottomType: string,
    housingBottomColor: number[],
    mount: string
}

export interface SwitchConstruction {
    id: string,
    switchId: string,
    stem: string,
    housingTop: string,
    housingBottom: string
}