import { Lines } from "../../components/Lines";
import { Content } from "./styles";

export function Header(props: { title: string }) {
    const { title } = props;

    return (
        <Content>
            <div className="header-text">
                <h1>
                    {title}
                </h1>

                <Lines />
            </div>
        </Content>

    );
}