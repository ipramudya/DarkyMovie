import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const BackdropImg = styled.img`
   height: 100%;
   display: inline-block;
   transition: all 0.5s;

   @media screen and (max-width: 970px) {
      width: 100%;
      object-fit: cover;
   }

   @media screen and (max-width: 765px) {
      object-position: top;
   }
`;

export const HeroBackdrop = styled.div`
   position: absolute;
   top: 0;
   right: 0;
   width: 70%;
   height: 100%;
   animation: fadeIn 2s;
   overflow: hidden;

   &::after {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      content: '';
      display: block;
      background-image: linear-gradient(
         90deg,
         #000 0,
         transparent 50%,
         transparent
      );
   }

   @media screen and (max-width: 765px) {
      height: 70%;
   }

   @media screen and (max-width: 970px) {
      position: relative;
      width: 100%;

      &::after {
         background-image: linear-gradient(
            0deg,
            #000 0,
            rgba(0, 0, 0, 0.1) 50%,
            rgba(0, 0, 0, 0.1)
         );
      }
   }
`;

export const HeroDescWrapper = styled.div`
   padding: 0 5rem;
   position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   z-index: 1;
   width: 50%;
   height: 100%;
   display: flex;
   align-items: center;
   animation: fadeInUp 2s;

   @media screen and (max-width: 970px) {
      order: 2;
      position: static;
      width: 100%;
      height: 50%;
   }

   @media screen and (max-width: 765px) {
      height: 30%;
      padding: 0 0 1.5em 3em;
   }

   @media screen and (max-width: 515px) {
      padding: 0 0 1em 1em;
   }
`;

export const HeroContainer = styled.div`
   width: 100%;
   padding-bottom: 40%;
   background-color: black;
   position: relative;

   @media screen and (max-width: 970px) {
      position: unset;
      padding: 0;
      height: 50rem;
      display: flex;
      flex-direction: column;
   }

   @media screen and (max-width: 765px) {
      height: 30rem;
   }

   @media screen and (max-width: 515px) {
      height: 30rem;
   }

   ${({ disable }) =>
      !disable &&
      css`
         &:hover ${BackdropImg} {
            transform: scale(1.02);
            opacity: 0.8;
         }
      `}

   ${({ disable }) =>
      disable &&
      css`
         ${HeroBackdrop}, ${HeroDescWrapper} {
            animation: none;
         }
      `}
`;

export const Title = styled.h1`
   margin-bottom: 0.5em;
   cursor: default;

   @media screen and (max-width: 970px) {
      font-size: 1.5em;
   }

   @media screen and (max-width: 515px) {
      font-size: 1.1em;
   }
`;

export const Text = styled.p`
   font-size: var(--fontSM);
   color: #787a91;
   margin-left: 1em;
   cursor: default;

   @media screen and (max-width: 515px) {
      font-size: 0.8em;
      display: ${(year) => (year ? 'none' : 'block')};
      margin-left: 0;
   }
`;

export const Text2 = styled(Link)`
   font-size: var(--fontSM);
   font-style: italic;
   color: var(--darksky);
   margin-right: 1em;
   transition: all 0.5s;

   &:hover {
      opacity: 0.8;
   }

   @media screen and (max-width: 515px) {
      font-size: 0.8em;
      margin-bottom: 0.8em;
   }
`;

export const Subtitle = styled.p`
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 4;
   -webkit-box-orient: vertical;
   font-size: var(--fontSM);
   color: var(--white);
   cursor: default;

   @media screen and (max-width: 765px) {
      display: none;
   }
`;

export const Meta = styled.div`
   display: flex;
   flex-direction: column;
`;

export const SubMeta = styled.div`
   display: flex;
   align-items: center;
   flex-wrap: wrap;
   margin-top: 0.8em;

   @media screen and (max-width: 515px) {
      flex-direction: ${({ genre }) => (genre ? 'row' : 'column')};
      align-items: ${({ genre }) => (genre ? 'center' : 'unset')};
   }
`;
