import { useEffect } from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Grid, Spinner, ContentsCard, Topbar } from '../../components';
import useLastItemRef from '../../hooks/useLastItemRef';
import useSearch from '../../hooks/useSearch';

const SearchPage = () => {
   // Get query strings
   const useQuery = () => {
      return new URLSearchParams(useLocation().search);
   };
   const query = useQuery().get('query');

   const { foundContent, loading, setSearchTerm, setPage, totalResults } =
      useSearch();

   useEffect(() => {
      const delay = setTimeout(() => {
         setSearchTerm(query);
      }, 500);

      return () => clearTimeout(delay);
   }, [setSearchTerm, query]);

   const lastItemRef = useLastItemRef({
      page: foundContent.length,
      setPage,
      totalPages: totalResults,
      loading,
   });

   return (
      <>
         <Helmet title='Search...' />
         {loading && <Spinner loading={loading} />}
         {query.length <= 0 && <Redirect push />}
         <Topbar header={`Results for: ${query}`} />
         <Grid header={`Results for: ${query}`}>
            {foundContent?.map((content, idx) => {
               if (foundContent?.length === idx + 1) {
                  return (
                     <ContentsCard
                        item={content}
                        key={content.id}
                        ref={lastItemRef}
                     />
                  );
               } else {
                  return <ContentsCard item={content} key={content.id} />;
               }
            })}
         </Grid>
      </>
   );
};

export default SearchPage;
