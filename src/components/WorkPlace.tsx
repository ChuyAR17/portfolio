import React from 'react'
import { WorkPlaceInterface } from '../interfaces/interfaces'

export const WorkPlace = ({ jobPosition, companyName, year, companyWeb }: WorkPlaceInterface) => (
  <li>
    <h4>{jobPosition}</h4>
    <div className='Experience__item'>
      <a href={companyWeb} target='_blank' rel='noreferrer'>
        <span className='Experience__item-company'>@{companyName}</span>
        <span className='Experience__item-year'>{year}</span>
      </a>
    </div>
  </li>
);