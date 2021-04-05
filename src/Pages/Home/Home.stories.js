import Layout from '../../components/Layout/Layout';
import Home from './Home';

export default { 
    title: 'Proalf/Home', 
    component: Home
}; 

export const Home_ = () => {
    return(
        <Layout>
        <Home></Home>
        </Layout>
    )
}

