import React from 'react'

import Home from '../Home'
import BeanBagForm from '../forms/beanBagForm'
import BrewForm from '../forms/brewForm'
import BeanBagDetail from '../components/BeanBagDetail'

import * as Actions from './actions'

const routes: {[index: string]: any} = {}

routes[Actions.HOME] = () => <Home />
routes[Actions.CREATE_BEAN_BAG] = () => <BeanBagForm />
routes[Actions.CREATE_BREW] = () => <BrewForm />
routes[Actions.SHOW_BEAN_BAG] = () => <BeanBagDetail />

export default routes