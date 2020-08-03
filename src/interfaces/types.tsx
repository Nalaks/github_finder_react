export interface UserProp {
  id: string
  login: string
  avatar_url: string
  html_url: string
}

export interface UserProps {
  user: UserProp
}

export interface UsersProps {
  users: UserProp[]
}

export type Search = { text: string }

export interface SearchProps {
  getUsers: (search: string) => Promise<void>
  clearUsers: () => void
  userState: UserProp[]
}