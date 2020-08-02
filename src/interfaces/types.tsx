export interface Props {
  id: string
  login: string
  avatar_url: string
  html_url: string
}

export interface UserProps {
  user: Props
}

export interface GitProps {
  users: Props[]
}