import { Link } from "react-router-dom"

export default function ImproveSkills(){
const list = [
    "Learn new recepies",
    "Experiment with food",
    "Write your own recipes",
    "Know nutritions facts",
    "Get cooking tips",
    "Get ranked",
    
]


    return (
        <div className="section improve-skills">
        <div className="col img">
            <img src="/img/gallery/img_10.jpg" alt="" />
            </div>
            <div className="col typography">
                <h1 className="title">Improve your Culinary Skills</h1>
           { list.map((item, index) => (
            <p className="skill-item" key={index}> {item}</p>
           ))}
            <Link to="/signup" className="btn">Sign Up</Link>
            <Link to="/login" className="btn">Login</Link>
        </div>
        </div>
  
    )
}