import { useQuery } from 'react-query';
import axios from 'axios';


import Layout from '../components/layout/Layout';
import Content from '../components/Content';

function MainPage(props) {
    const fetchPosts = async () => await axios.get(`/`).then(res => res.data);
    const { data, isLoading, error } = useQuery(['fetchPosts'], fetchPosts);

    console.log(data);
    console.log(isLoading);
    console.log(error);

    return (
        <Layout>
            <Content/>
        </Layout>
    );
}
  
export default MainPage;