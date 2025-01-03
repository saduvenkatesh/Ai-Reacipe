import chef from "../assets/chef.png"

export default function Header(){
    return (
        <header className="header">
        <img src={chef} alt="chef image" className="chefImg" />
        <h1 className="title">Recipe Generator</h1>
        </header>
    )
}