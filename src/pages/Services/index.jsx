import { useEffect, useState } from "react";
import api from "../../services/api";
import { Content } from "./styles";
import { Lines } from "../../components/Lines";
import rectangleImg from "../../assets/rectangle.svg";

export function Services() {

    const [services, setServices] = useState([]);

    useEffect(
        () => {
            async function getServices() {
                const response = await api.get('/services');
                setServices(response.data);
            }

            getServices();
        }, []
    )


    return (

        <Content>

            <div className="header-text">
                <h1>
                    Services
                </h1>

                <Lines />
            </div>


            <div className="content-text">
                <img src={rectangleImg} alt={"rectangle"} />

                <h2>
                    UX Designer
                </h2>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et dui, ullamcorper ut quis congue purus volutpat posuere lorem.
                </p>

            </div>

        </Content>

    );
}