import { useEffect, useState } from "react";
import api from "../../services/api";
import { Content } from "./styles";
import { ServiceCard } from "../../components/ServiceCard";
import { Header } from "../../components/Header";

type ServiceProps = {
    id: number,
    image: string,
    title: string,
    text: string
}

export function Services() {

    const [services, setServices] = useState<ServiceProps[]>([]);
    const [isSelected, setIsSelected] = useState(0);

    function toogleSelected(id: number) {
        setIsSelected(id);
    }

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

            <Header title="Services" />

            <div className="cards">
                {services &&
                    services.map(service => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            handleSelected={() => toogleSelected(service.id)}
                            isActive={isSelected === service.id}
                        />
                    ))
                }
            </div>


        </Content>

    );
}