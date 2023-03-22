import React from 'react'

function BeliefsList() {
    return (
        <div className="croyances">
            <h3 className="label">Croyances</h3>

            <div className="infos_list">
                <h4 className="categories">Religion</h4>
                <span className="infos_religion">
                    <h4>Christianisme</h4>
                </span>
                &nbsp; &nbsp;
            </div>

            <div className="infos_list">
                <h4 className="categories">Pratique</h4>
                <span className="infos_religion">
                    <h4 className="item">Prière</h4>
                </span>
                &nbsp; &nbsp;
            </div>

            <div className="infos_list">
                <h4 className="categories">Valeurs</h4>
                <span className="infos_religion">
                    <h4>Respect</h4>
                </span>
                &nbsp; &nbsp;
            </div>
        </div>
    )
}

export default BeliefsList