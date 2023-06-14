import cabin from "../../src/img/cabin.png";
import cake from "../../src/img/cake.png";
import circus from "../../src/img/circus.png";
import game from "../../src/img/game.png";
import safe from "../../src/img/safe.png";
import submarine from "../../src/img/submarine.png";
import { Icon } from "../IconDesign/Icon";
import "../Portfolio/portfolio.css";



export function Portfolio (){
    return (
        <div className="portfolio">
            <h1 className="titlePortfolio">PORTFOLIO</h1>
            <Icon />
            <div className="contentImgs">
            <img src ={cabin} className="imgPortfolio"/>
            <img src = {cake} className="imgPortfolio"/>
            <img src ={circus} className="imgPortfolio"/>
            <img src ={game} className="imgPortfolio"/>
            <img src ={safe} className="imgPortfolio"/>
            <img src ={submarine} className="imgPortfolio"/>
            </div>
        </div>
    )
}