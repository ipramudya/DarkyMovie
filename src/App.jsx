import { Route } from 'react-router-dom';

import { PopularProvider, MoviesProvider, TVsProvider } from './context';
import {
   Home,
   MoviePage,
   TVPage,
   LoadMore,
   SearchPage,
   DiscoverPage,
   PersonPage,
   DetailMoviePage,
   DetailTvPage,
} from './pages';
import { Sidebar } from './components';
import { GlobalStyle } from './GlobalStyles';

const App = () => {
   return (
      <>
         <GlobalStyle />
         <Sidebar />
         <PopularProvider>
            <Route exact path='/' component={Home} />
            <Route exact path='/movie/:id' component={DetailMoviePage} />
            <Route exact path='/tv/:id' component={DetailTvPage} />
            <Route
               exact
               path={['/discover/movie/:gid', '/discover/tv/:gid']}
               component={DiscoverPage}
            />
            <Route exact path='/person/:id' component={PersonPage} />
            <MoviesProvider>
               <Route exact path='/movie' component={MoviePage} />
            </MoviesProvider>
            <TVsProvider>
               <Route exact path='/tv' component={TVPage} />
            </TVsProvider>
            <Route
               exact
               path={['/movie/category/:ctg', '/tv/category/:ctg']}
               component={LoadMore}
            />
            <Route exact path='/search' component={SearchPage} />
         </PopularProvider>
      </>
   );
};

export default App;
