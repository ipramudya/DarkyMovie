import styled from 'styled-components';

export const OverviewContainer = styled.div`
   margin: 5em 4.3em;
   display: flex;
   animation: fadeIn 1s;

   @media screen and (max-width: 970px) {
      margin: 1.5em 2.3em;
   }

   @media screen and (max-width: 515px) {
      margin: 1em 0.8em;
   }
`;

export const LeftBox = styled.div`
   padding-right: 3em;
   width: 25%;
   max-width: 400px;

   @media screen and (max-width: 970px) {
      display: none;
   }
`;

export const ImageWrapper = styled.div`
   position: relative;
   height: 0;
   padding-top: 150.27%;
   overflow: hidden;
   background-color: #202124;
`;

export const Image = styled.img`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
`;

export const RightBox = styled.div`
   flex: 1;
`;

export const OverviewContent = styled.div`
   margin-bottom: 1.5em;
   max-width: 1000px;
`;

export const Title = styled.h3`
   font-size: 1.5em;
   letter-spacing: 1.5px;
   margin-bottom: 0.5em;
`;

export const Subtitle = styled.p`
   margin-bottom: 0.8em;

   @media screen and (max-width: 970px) {
      font-size: 0.9em;
   }
`;
