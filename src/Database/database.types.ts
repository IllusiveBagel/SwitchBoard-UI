export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      SwitchConstruction: {
        Row: {
          housingBottom: string
          housingTop: string
          id: string
          stem: string
          switchId: string
        }
        Insert: {
          housingBottom: string
          housingTop: string
          id?: string
          stem: string
          switchId: string
        }
        Update: {
          housingBottom?: string
          housingTop?: string
          id?: string
          stem?: string
          switchId?: string
        }
        Relationships: [
          {
            foreignKeyName: "SwitchConstruction_switchId_fkey"
            columns: ["switchId"]
            isOneToOne: false
            referencedRelation: "Switches"
            referencedColumns: ["id"]
          },
        ]
      }
      SwitchDesign: {
        Row: {
          housingBottomColor: number[]
          housingBottomType: string
          housingTopColor: number[]
          housingTopType: string
          id: string
          mount: string
          stemColor: number[]
          stemConstruction: string
          stemType: string
          switchId: string | null
        }
        Insert: {
          housingBottomColor: number[]
          housingBottomType: string
          housingTopColor: number[]
          housingTopType: string
          id?: string
          mount: string
          stemColor: number[]
          stemConstruction: string
          stemType: string
          switchId?: string | null
        }
        Update: {
          housingBottomColor?: number[]
          housingBottomType?: string
          housingTopColor?: number[]
          housingTopType?: string
          id?: string
          mount?: string
          stemColor?: number[]
          stemConstruction?: string
          stemType?: string
          switchId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "SwitchDesign_switchId_fkey"
            columns: ["switchId"]
            isOneToOne: false
            referencedRelation: "Switches"
            referencedColumns: ["id"]
          },
        ]
      }
      Switches: {
        Row: {
          actuation: number
          authenticated: boolean
          bottomOut: number
          factoryLubed: boolean
          id: string
          manufacturer: string
          name: string
          preTravel: number
          spring: Database["public"]["Enums"]["SpringType"]
          totalTravel: number
          type: string
          volume: string
        }
        Insert: {
          actuation: number
          authenticated: boolean
          bottomOut: number
          factoryLubed: boolean
          id?: string
          manufacturer: string
          name: string
          preTravel: number
          spring: Database["public"]["Enums"]["SpringType"]
          totalTravel: number
          type: string
          volume: string
        }
        Update: {
          actuation?: number
          authenticated?: boolean
          bottomOut?: number
          factoryLubed?: boolean
          id?: string
          manufacturer?: string
          name?: string
          preTravel?: number
          spring?: Database["public"]["Enums"]["SpringType"]
          totalTravel?: number
          type?: string
          volume?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      SpringType: "stainless" | "goldPlated" | "symmetric"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
