import { FaGithub } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { CardStyle } from "./style"

interface IProps{
    title: string;
    lingue: string;
    descrip: string;
    linkCode: string;
    linkApli: string;
}

export const Card = (props:IProps) => {
    return(
        <CardStyle>
            <h1>{props.title}</h1>
            <div>
                <p>{props.lingue}</p>
                <p>{props.descrip}</p>
            </div>
            <div>
                <a href={props.linkCode}><FaGithub /> Github Code</a>
                <a href={props.linkApli}><FaShare />  Aplicação</a>
            </div>
        </CardStyle>
    )
}