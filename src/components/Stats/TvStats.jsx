import { convertDate } from '../../utils/helpers';
import { Stats, StatsUl, StatsLi, Text, TextLink } from './Stats.style';

const TvStats = ({ content, caster }) => {
   const foundDirector = caster.crew
      ?.map((person) => {
         return { name: person.name, id: person.id, job: person.jobs[0].job };
      })
      .find((person) => {
         return (
            person.job === 'Comic Book' ||
            person.job === 'Creator' ||
            person.job === 'Director' ||
            person.job === 'Executive Producer'
         );
      });

   const firstAirDate = convertDate(content?.first_air_date);
   const lastAirDate = convertDate(content?.last_air_date);

   const productionCompanies = content.production_companies
      ?.map((company) => company.name)
      .join(', ');

   return (
      <>
         <Stats>
            <StatsUl>
               {content?.first_air_date && (
                  <StatsLi>
                     <Text main>First Aired</Text>
                     <Text>{firstAirDate}</Text>
                  </StatsLi>
               )}
               {content?.last_air_date && (
                  <StatsLi>
                     <Text main>Last Aired</Text>
                     <Text>{lastAirDate}</Text>
                  </StatsLi>
               )}
               {content?.episode_run_time && (
                  <StatsLi>
                     <Text main>Episode runtime</Text>
                     <Text>
                        {content.episode_run_time
                           ?.map((item) => `${item} min`)
                           .join(', ')}
                     </Text>
                  </StatsLi>
               )}
               {foundDirector && (
                  <StatsLi>
                     <Text main>{foundDirector.job}</Text>
                     <TextLink underline to={`/person/${foundDirector.id}`}>
                        <span>{foundDirector.name}</span>
                     </TextLink>
                  </StatsLi>
               )}
               {content?.status && (
                  <StatsLi>
                     <Text main>Status</Text>
                     <Text>{content?.status}</Text>
                  </StatsLi>
               )}
               {content?.spoken_languages && (
                  <StatsLi>
                     <Text main>Language</Text>
                     <Text>{content?.spoken_languages[0]?.english_name}</Text>
                  </StatsLi>
               )}
               {productionCompanies && (
                  <StatsLi>
                     <Text main>Production</Text>
                     <Text>{productionCompanies}</Text>
                  </StatsLi>
               )}
            </StatsUl>
         </Stats>
      </>
   );
};

export default TvStats;
