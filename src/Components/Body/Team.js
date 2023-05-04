import './team.css'
import React,{useEffect,useState} from "react";


function Team() {
const[team, setTeam]=useState([])

    useEffect(() => (
        fetch('http://localhost:3000/teamMembers')
            .then((response) => response.json())
        .then((data)=>setTeam(data))
), [])
    return (
        <section className="our_team">
            <div className="container">
                <div className="team_content">
                    <h6 className="subtitle"> Our Team </h6>
                    <h2>
                        Meet with <span className="highlight"> our team </span>
                    </h2>
                </div>
                <div className="team_wrapper">
                    {team.map((item, index) => (
                    <div className="team_item" key={index}>
                        <div className="team_img">
                            <img src={item.imgUrl} alt="" />
                        </div>
                        <div className="team_details">
                            <h4>{item.name}</h4>
                            <p className="description">{item.position}</p>
                        </div>
                        <div className="team_member-social">
                            <span><i class="ri-linkedin-line"></i></span>
                            <span><i class="ri-twitter-line"></i></span>
                        </div>
                    </div>
                    ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Team