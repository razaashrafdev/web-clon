import React from 'react';
import '../../Hero/hero.css'
const Stats = (props) => {
    return (
        <div className="stat-item">
            <span className="stat-number">{props.stats_num}</span>
            <span className="stat-label">{props.stats_label}</span>
        </div>
    )
}
export default Stats;