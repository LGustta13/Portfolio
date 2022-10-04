import rectangleImg from "../../assets/rectangle.svg"
import { Content } from "./styles";

type ServiceProps = {
    id: number,
    image: string,
    title: string,
    text: string
}

type ServiceCardProps = {
    isActive: boolean,
    service: ServiceProps,
    handleSelected: () => void
}

export function ServiceCard(props: ServiceCardProps) {
    const { isActive, service, handleSelected } = props;

    return (
        <Content
            onClick={handleSelected}
            activated={isActive}
        >
            <div className="rectangle">
                <div className="rectangle-image">
                    <img className="n2" src={rectangleImg} alt="rectangle" />
                    <img className="n1" src={service.image} alt={service.title} />
                </div>
            </div>

            <h2>
                {service.title}
            </h2>

            <p>
                {service.text}
            </p>

        </Content>

    );
}