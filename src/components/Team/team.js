import './team.css';

export const Team = () => {
    return (
        <div>
            <div className='heading'>
                <h2>OUR TEAM</h2>
                <p>Meet the team - our office rats:</p>
            </div>
            <div className="team-members">
                <div className="team-member">
                    <img src="team-1.jpg" alt="Team Member 1" />
                    <h4>Islam Alzatary</h4>
                    <p>Web Designer</p>
                </div>
                <div className="team-member">
                    <img src="team-2.jpg" alt="Team Member 2" />
                    <h4>Tayseer Imam</h4>
                    <p>Support</p>
                </div>
                <div className="team-member">
                    <img src="team-3.jpg" alt="Team Member 3" />
                    <h4>Eman Subhi</h4>
                    <p>Boss man</p>
                </div>
                <div className="team-member">
                    <img src="team-4.jpg" alt="Team Member 4" />
                    <h4>Raeem Yakoub</h4>
                    <p>Fixer</p>
                </div>
            </div>
        </div>
    )
}

export default Team;