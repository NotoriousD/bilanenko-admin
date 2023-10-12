import React from 'react'

import { Spinner } from 'shared/ui/Spinner'

import css from './appSpinner.module.scss'

export const AppSpinner = () => {
  return (
    <div className={css.root}>
      <Spinner size="24px" />
    </div>
  )
}
