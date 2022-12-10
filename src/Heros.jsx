import React, { useState, useEffect } from "react";
import './style.css'
import Herosimg from './images/heroximg.jpg'
const url =
    "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json";

const Heros = () => {
    const [superhero, setsuperheros] = useState([]);
    const fetchHeros = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setsuperheros(data);
    };
    const Rmvhero = (name) => {
        const Hero = superhero.filter((FvrtHero) => FvrtHero.name !== name);
        setsuperheros(Hero);
    }
    useEffect(() => {
        fetchHeros();
    }, []);
    return (
        <div className="main">
            <div className="herosimg" style={{ backgroundImage: `url(${Herosimg})` }}>
                <div className="herosimgs">
                    <div className="navbar">
                        <h1> &rArr; Superheros Project</h1>
                        <div><button className="modebtn"> &#9728;</button>
                        </div>
                    </div>
                    <div className="documentary">
                        <h1>Superheros Documentary</h1>
                        <p>Anyone who has read comic books or loves superhero movies has thought about what it would be like to actually disguise oneself and take on a superhero persona to go out and fight crime. Most of us probably pretended to do so when we were kids (I, for one, always wanted to be Batman). Well, believe it or not, there are actually real-life “superheroes” out there who literally wear a mask or some sort of disguise to cover up their identities in order to perform heroic deeds (some actually don't disguise themselves).</p>
                    </div>
                </div>
            </div>
            <div className="lenght">
                <h1> &rArr; Super Heros: {superhero.length}</h1>
                <hr />
            </div>
            <div className="cards">
                {superhero.map((FvrtHero) => {
                    return (
                        <div className="card">
                            <div className="cardcontent">
                                <div className="profile">
                                    <div className="cardimg">
                                        <img src={FvrtHero.images.lg} alt="" />
                                        <div className="name">
                                            <h2>{FvrtHero.name}</h2>
                                            <p>@{FvrtHero.biography.fullName}</p>
                                        </div>
                                    </div>
                                    <div className="Button"><button className="btnread">Power: {FvrtHero.powerstats.power}</button></div>
                                </div>
                                <div className="content">
                                    <br />
                                    <p>Work:</p>
                                    <h5>{FvrtHero.work.occupation}</h5>
                                    <p>Connection:</p>
                                    <h5>{FvrtHero.connections.relatives}</h5><br />
                                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates esse accusamus porro? Veritatis asperiores omnis assumenda illum necessitatibus maxime tenetur cum est, alias eveniet exercitationem eum eligendi pariatur ducimus laborum!</h6><br />
                                </div>
                            </div>
                            <div className="footer">
                                <div className="publisher">
                                    <p>Publisher:</p>
                                    <h4>{FvrtHero.biography.publisher}</h4>
                                </div>
                                <div className="Removebtn">
                                    <button onClick={() => Rmvhero(FvrtHero.name)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Heros