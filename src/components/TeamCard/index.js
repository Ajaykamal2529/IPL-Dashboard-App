import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, id, teamImageURL} = teamDetails

  return (
    <li className="item">
      <Link to={`/team-matches/${id}`} className="link">
        <img src={teamImageURL} alt={name} className="ipl-item-logo" />
        <p className="item-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
