import { Route, Routes } from 'react-router'
import { FunctionComponent } from 'react'
import { Sunday } from './sunday'

export const SundayRoutes: FunctionComponent = () => (
  <Routes>
    <Route element={ <Sunday /> } />
  </Routes>
)
