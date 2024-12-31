import { create } from 'zustand'

export type UserInfo = {
  username: string
  email: string
}

export interface IUserStore {
  user?: UserInfo;
}

export const useUserStore = create<IUserStore>((set) => ({
  user: undefined,
  async login() {
    set({ user: { username: 'John', email: 'john@google.com' } })
  },
  async logout() {
    set({ user: undefined })
  }
}))