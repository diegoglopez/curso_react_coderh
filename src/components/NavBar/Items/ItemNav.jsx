export const ItemNav = ({nombre,url}) => {
    return (
        <li className="nav-item">
            <a className="nav-link" href={url}>{nombre}</a>
        </li>
    )
}
