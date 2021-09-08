import { Helmet } from 'react-helmet';
import { Card, Hero, List, Spinner } from '../../components';
import { usePopularContext } from '../../context/PopularContext';
import { randomNumber } from '../../utils/helpers';

const Home = () => {
   const { movies, TVs, loading, popularContents } = usePopularContext();

   const randomIndex = randomNumber(popularContents?.length);

   return (
      <>
         <Helmet title='DarkyMovie - Browse Your Favorite' />
         {popularContents && <Hero contents={popularContents[randomIndex]} />}
         {loading ? (
            <Spinner loading={loading} />
         ) : (
            <>
               <List list_header='Trending Movies' direct_to='popular' isMovie>
                  {movies?.map((content) => (
                     <Card item={content} key={content.id} />
                  ))}
               </List>
               <List list_header='Trending TVs' direct_to='popular'>
                  {TVs?.map((content) => (
                     <Card item={content} key={content.id} />
                  ))}
               </List>
            </>
         )}
      </>
   );
};

export default Home;
