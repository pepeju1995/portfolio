'use client'

import Link from 'next/link'

interface Props {
name: string;
url: string;
}

const MyButton = ({ name, url }: Props) => {
  return (
    <li>
      <Link href={url}>
        {name}
      </Link>
    </li>
  )
}

export default MyButton
