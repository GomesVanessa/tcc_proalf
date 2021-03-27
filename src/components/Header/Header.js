import styled from 'styled-components';

const Wrapper = styled.header`
    grid-area: header;
    background: rgb(51,170,204);
    color: white;
    display: flex;

    ul{
        list-style:nome;
        display:flex;
    }

    li{
        a{
            margin-right: 20px;
            font-size:1.25em;
            color:#fff;
            text-decoration:nome;
        }
    }
`
//logo, login, whatsapp
const Header = ({Title, Logo, Login, WhatsApp}) => { 
    const headerItems = [
        {
            text: 'Logo',
            path: '/logo'
        }, 
        {
            text: 'Login',
            path: '/login'
        }, 
        {
            text: 'WhatsApp',
            path: '/whatsApp'
        }, 
    ]

    return(
        <Wrapper>
            <ul>
                {
                    headerItems.map(item=>(
                        <li><a href={item.path}>{item.text}</a></li>
                    ))
                }
            </ul>
      </Wrapper>
    )
}
   
export default Header


