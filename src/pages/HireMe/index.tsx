import { Content } from "./styles";
import { Lines } from "../../components/Lines";
import { ReactNode } from "react";

type SomaProps = {
    a: number;
    b: number;
}

export function HireMe() {

    const prop = { a: 5, b: 2, c: "ok" } as SomaProps;
    const array = [1, 2, 3, 10];

    function Soma(props: SomaProps) {

        const { a, b } = props;
        console.log(b + "a");

        return a;
    }

    return (
        <Content>
            <div className="incline" />

            <div className="background-text">
                <div className="text">
                    <h1>
                        About me
                    </h1>

                    <h2 onClick={() => Soma(prop)}>
                        Why hire me?
                    </h2>

                    {
                        array.map(elements => {
                            return (
                                <Lines />
                            )
                        })
                    }

                    {/* <div className="text-line">
                        <hr className="line-one" />
                        <hr className="line-two" />
                        <hr className="line-three" />
                    </div> */}


                    <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Et dui, ullamcorper ut quis
                        congue purus volutpat posuere lorem.
                        <br />
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Et dui, ullamcorper ut quis
                        congue purus volutpat posuere lorem.
                    </p>
                </div>
            </div>
        </Content>
    );
}