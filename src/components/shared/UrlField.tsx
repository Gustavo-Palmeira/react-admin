import LaunchIcon from '@mui/icons-material/Launch'
import { useRecordContext } from 'react-admin'
import { Link, LinkProps } from '@mui/material'

export interface IUrlField extends LinkProps {
  source: string
}

const UrlField = ({ source, ...props }: IUrlField) => {
  const record = useRecordContext()
  const value = record ? record[source] : props.href || 'link'

  return (
    <Link href={value} sx={{ textDecoration: 'none' }} {...props}>
      {value}
      <LaunchIcon sx={{ fontSize: 15, ml: 1 }} />
    </Link>
  )
}

export default UrlField
