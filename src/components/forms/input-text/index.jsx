import PropTypes from 'prop-types'
import { memo } from 'react'

function InputText(props) {
  const { name = 'Name', register = () => {} } = props
  return (
    <div className='py-2 font-titillium dark:text-gray-300 text-gray-700'>
      <label className='' htmlFor={name}>Skill Name</label>
      <input
        {...register(name)}
        className='block w-full outline-none py-1.5 px-2 border dark:border-gray-600 dark:bg-gray-600 dark:focus:bg-transparent my-1 rounded placeholder-gray-500 transition-all duration-300'
        id={name}
        placeholder={name}
        type='text'
      />
      <span className='text-red-700 text-sm' role='alert'>Error Message!</span>
    </div>
  )
}

export default memo(InputText, (prevProps, nextProps) => prevProps.isDirty === nextProps.isDirty)

InputText.propTypes = {
  name: PropTypes.string,
  register: PropTypes.func,
}
