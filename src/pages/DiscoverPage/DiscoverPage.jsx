import { useLocation, useParams } from 'react-router';
import { Helmet } from 'react-helmet';
import ApiDiscover from '../../api/discover';
import { Card, Grid, Spinner } from '../../components';
import useLastItemRef from '../../hooks/useLastItemRef';
import usePage from '../../hooks/usePage';

const DiscoverPage = () => {
   const {
      pathname,
      state: { genres },
   } = useLocation();
   const { gid } = useParams();
   const typeOfProvider = pathname.split('/')[2];

   const { data, loading, page, setPage, totalPages } = usePage({
      typeOfProvider,
      queryString: gid,
      cbFunction: ApiDiscover.fetchByGenreID,
   });

   const lastItemRef = useLastItemRef({
      page,
      setPage,
      totalPages,
      loading,
   });

   return (
      <>
         <Helmet title={`Genre: ${genres}`} />
         {loading && <Spinner loading={loading} />}
         <Grid header={genres}>
            {data?.map((singleData, idx) => {
               if (data?.length === idx + 1) {
                  return <Card item={singleData} key={idx} ref={lastItemRef} />;
               } else {
                  return <Card item={singleData} key={idx} />;
               }
            })}
         </Grid>
      </>
   );
};

export default DiscoverPage;
