import { Content } from "./styles";
import ImagePNG from "../../images/github.png";

export function Home() {
    return (
        <Content>
            <div className="text">
                <header>
                    Home - About Us - Service - Portfólio - Contact Us
                </header>

                <h1>
                    Hello I'm
                </h1>

                <h2>
                    Luis Gustavo
                </h2>

                <h3>
                    Digital media Strategist UX Designer
                </h3>

                <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Et dui, ullamcorper ut quis
                    congue purus volutpat posuere lorem.
                </p>

                <button>
                    Hire Me
                </button>

            </div>

            <div className="background" />

            <img src={ImagePNG} alt="Me" />

            {/* <div className="image">
                <img src={ImagePNG} alt="Me" />
            </div> */}



        </Content>



    );
}