export interface UserProp {
  id: string
  login: string
  avatar_url: string
  html_url: string
}

export interface UserProps {
  match: any
}

export interface UserItemProps {
  user: UserProp
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

export interface AlertProp {
  msg: string
  type: string
}

export interface ContextAlert {
  alert: AlertProp | null
  setAlert: (msg: string, type: string) => void
}

export interface StateAlert {
  alert: AlertProp | null
}


export interface Context {
  users: UserProp[]
  loading: boolean
  user: GitUser
  repos: Repos[]
  getUsers: (search: string) => Promise<void>
  clearUsers: () => void
  getUser: (username: string) => Promise<void>
  getRepos: (username: string) => Promise<void>
}

export interface State {
  users: UserProp[]
  loading: boolean
  user: GitUser | null
  repos: Repos[]
}

