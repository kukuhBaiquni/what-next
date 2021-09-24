import Image from 'next/image'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { Fragment } from 'react'
import JobPath from './job-path'

function Characters({ data }) {
  return (
    <Fragment>
      {data.map((item) => (
        <li
          className={`relative z-10 pl-1 hover:text-white text-gray-600 dark:text-gray-400 dark:hover:text-white group ${item.hoverBgColor} hover:translate-x-2 cursor-pointer transition-transform-opacity duration-300`}
          key={item.name}
        >
          <Link href={`/character/${item.name.toLowerCase()}`}>
            <a className='flex items-center p-1 group-hover:text-white'>
              <Image
                alt={item.name}
                className='object-cover'
                height={20}
                src={item.img}
                width={20}
              />
              <p className='ml-1.5'>{item.name}</p>
            </a>
          </Link>
          <JobPath data={item} />
        </li>
      ))}
    </Fragment>
  )
}

Characters.propTypes = {
  data: PropTypes.array,
}

export default Characters
