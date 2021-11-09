import {
  MenuAlt2Icon, PencilIcon, SwitchVerticalIcon, TrashIcon,
} from '@heroicons/react/solid'
import { useState } from 'react'
import Button from 'components/common/button'
import { useFieldArray } from 'react-hook-form'
import PropTypes from 'prop-types'
import Modal from 'components/common/modal'
import _ from 'lodash/startCase'
import { ReactSortable } from 'react-sortablejs'
import { FormFieldWrapper } from '../FormFieldWrapper'
import InputMultifieldBody from './input-multifield-body'

export default function InputMultifield(props) {
  const [isVisible, setIsVisible] = useState(false)
  const [focusedData, setFocusedData] = useState({})
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const {
    components, name, label, form,
  } = props
  const { control } = form

  const {
    fields, append, remove, move, update,
  } = useFieldArray({
    name,
    control,
    keyName: '$id',
  })

  const formSubmit = (data) => {
    console.log('DATA___', data)
    console.log(focusedIndex)
    if (focusedIndex === -1) {
      append(data)
    } else {
      update(data, focusedIndex)
    }
    setIsVisible(false)
  }

  return (
    <FormFieldWrapper label={label} name={name}>
      <ReactSortable
        animation={150}
        filter='.filtered'
        ghostClass='opacity-60'
        handle='.handle'
        list={fields}
        setList={() => { }}
        onEnd={(evt) => move(evt.oldIndex, evt.newIndex)}
      >
        {fields.map((field, index) => (
          <div className='p-2 dark:bg-gray-700 handle cursor-grab bg-warmGray-200 flex justify-between mb-2 border-input' key={field.$id}>
            <div>
              <SwitchVerticalIcon className='w-5 h-5' />
              <div>
                <h6 className='font-bold font-titillium'>{_(field.name)}</h6>
                <p className='text-sm'>{field.description}</p>
              </div>
            </div>
            <div className='flex gap-2 items-start'>
              <PencilIcon
                className='w-4 h-4 text-sky-500 cursor-pointer'
                onClick={() => {
                  setFocusedData(field)
                  setFocusedIndex(index)
                  setIsVisible(true)
                }}
              />
              <TrashIcon className='w-4 h-4 text-red-500 cursor-pointer' onClick={() => remove(index)} />
            </div>
          </div>
        ))}
      </ReactSortable>
      <Button
        label='Add Special Feature'
        leftIcon={<MenuAlt2Icon className='h-5 w-5 mr-2' />}
        onClick={() => {
          setIsVisible(true)
          setFocusedData({})
          setFocusedIndex(-1)
        }}
      />
      <Modal
        isVisible={isVisible}
        render={(
          <InputMultifieldBody
            closeModal={() => setIsVisible(false)}
            components={components}
            defaultValues={focusedData}
            formSubmit={formSubmit}
            modalTitle='Add Special Feature'
          />
        )}
        size='max-w-xl'
      />
    </FormFieldWrapper>
  )
}

InputMultifield.propTypes = {
  components: PropTypes.array,
  name: PropTypes.string,
  label: PropTypes.string,
  form: PropTypes.object,
}
