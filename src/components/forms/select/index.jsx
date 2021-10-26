/* eslint-disable no-shadow */
import { useState, memo } from 'react'
import Transition from 'components/common/transition'
import { CheckIcon, ChevronDownIcon, ExclamationCircleIcon } from '@heroicons/react/solid'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { FormFieldWrapper } from '../FormFieldWrapper'

function Select(props) {
  const {
    name, label, options, placeholder,
  } = props
  const [selected, setSelected] = useState(options[0] || {})
  const [isVisible, setIsVisible] = useState(false)

  return (
    <FormFieldWrapper bordered label={label} name={name}>
      <button
        className='p-2 w-full flex justify-between text-sm relative'
        type='button'
        onBlur={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
      >
        <span>{selected?.label}</span>
        <ChevronDownIcon className='h-5 w-5' />
      </button>
      <div className='absolute top-20 left-0 z-50 w-full'>
        <Transition isVisible={isVisible}>
          <div className='w-full p-2 bg-gray-200 dark:bg-gray-700 border-input-focus rounded text-xs sm:text-sm shadow-xl'>
            <div className='custom-scroll max-h-[300px] overflow-y-auto pr-2 flex flex-col'>
              {options.map((item, index) => (
                <button
                  className={clsx(
                    item.value === selected.value
                      ? 'bg-sky-500 cursor-default text-white'
                      : 'hover:bg-gray-300 dark:hover:bg-gray-600',
                    'p-2 text-left rounded flex',
                  )}
                  disabled={item.value === selected.value}
                  key={index}
                  type='button'
                  onClick={() => setSelected(item)}
                >
                  {item.label}
                  {item.value === selected.value && (
                    <CheckIcon className='h-5 w-5 text-sky-500 ml-2' />
                  )}
                </button>
              ))}
            </div>
          </div>
        </Transition>
      </div>
    </FormFieldWrapper>
  )
}

Select.propTypes = {
  options: PropTypes.array,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
}

Select.defaultProps = {
  options: [],
  placeholder: 'Please select..',
}

export default memo(
  Select,
  (prevProps, nextProps) => prevProps.isDirty === nextProps.isDirty,
)
