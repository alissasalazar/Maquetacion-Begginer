import profile from "../../src/img/profile.png";
import { Icon } from "../IconDesign/Icon";
import "../StartDesign/startDesign.css";

export default function Start() {
  return (
    <div className="startDesign">
      <img src={profile} />
      <h1 className="titleStart">START BOOTSTRAP</h1>
      <Icon />
      <h2 className="descriptionStart">Web Developer - Graphic Artist - User Experience Designer</h2>
    </div>
  );
}
