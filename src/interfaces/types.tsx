export interface UserProp {
  id: string
  login: string
  avatar_url: string
  html_url: string
}

export interface UserProps {
  user: UserProp
}

export interface SingleUserProps {
  user: GitUser | null
  getUser: (username: string) => Promise<void>
  getRepos: (username: string) => Promise<void>
  loading: boolean
  props: any
  repos: Repos[]
}

export interface GitUser {
  login: string
  name: string
  avatar_url: string
  html_url: string
  bio: string
  blog: string
  location: string
  public_repos: number
  public_gists: number
  followers: number
  following: number
  hireable: boolean
  company: string
}

export interface Repos {
  name: string
  html_url: string
}

export interface UsersProps {
  users: UserProp[]
}

export type Search = { text: string }

export interface SearchProps {
  getUsers: (search: string) => Promise<void>
  clearUsers: () => void
  userState: UserProp[]
  setAlert: (msg: string, type: string) => void
}

export interface AlertProp {
  msg: string
  type: string
}

export interface AlertProps {
  alertState: AlertProp
}
