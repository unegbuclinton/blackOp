import { icons } from './svg'

export default function BpIcon({ iconName }: { iconName: string }) {
  return <i>{icons[iconName]}</i>
}
