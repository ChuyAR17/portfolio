import { SchoolInterface } from "../interfaces/interfaces"

export const School = ({ title, imgUrl, schoolName }: SchoolInterface) => (
  <li>
    <img
      alt={title}
      src={imgUrl}
    />
    <div>
      <h4>{title}</h4>
      <p>@{schoolName}</p>
    </div>
  </li>
);
