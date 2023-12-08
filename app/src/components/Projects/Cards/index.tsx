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
            <div className="tech">
                <p className="lingue">{props.lingue}</p>
                <p className="descri">{props.descrip}</p>
            </div>
            <div className="buttons">
                <a className="git" href={props.linkCode}><FaGithub /> Github Code</a>
                <a className="apli" href={props.linkApli}><FaShare />  Aplicação</a>
            </div>
        </CardStyle>
    )
}