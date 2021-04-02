import Content from './Content';

export default { 
    title: "Proalf/Content", 
    component: Content,
}; 

export const Content_ = ({title}) => {
    return( 
        <Content>{title}</Content>
    )
}

