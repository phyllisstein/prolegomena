/**
 * Copyright (C) 2021 Daniel P. Shannon (<daniel@fleet.i.ng>)
 *
 * This file is part of a Menagerie.
 *
 * The Menagerie is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * The Menagerie is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with the Menagerie.  If not, see <http://www.gnu.org/licenses/>.
 */

import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import bootstrap from './bootstrap'

gsap.registerPlugin(ScrollTrigger)

bootstrap().catch(err => {
    throw err
})
