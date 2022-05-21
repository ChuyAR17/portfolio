import React from 'react'
import { WorkPlaceInterface } from '../interfaces/interfaces'

export const WorkPlace = ({ jobPosition, companyName, year }: WorkPlaceInterface) => (
  <li>
    <h4>{jobPosition}</h4>
    <p>@{companyName}</p>
    <span>{year}</span>
  </li>
);