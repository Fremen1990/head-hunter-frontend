import React from 'react'
import { PageContainer } from '../../constants/Layout/Container.styles'
import {
   BackOnePage,
   NavLinkStyled,
   NotFoundCode,
   NotFoundText,
} from './NotFound.styles'
import { useNavigate } from 'react-router-dom'

export const NotFound = async () => {
   const navigate = useNavigate()

   const handleBackOnePage = () => {
      navigate(-1)
   }

   return (
      <PageContainer style={{ height: '75vh' }}>
         <NotFoundCode>Kod 404</NotFoundCode>
         <NotFoundText>Oops! Nie znaleziono takiej strony...</NotFoundText>
         <NavLinkStyled to={'/'}> Powrót do strony głownej</NavLinkStyled>
         <BackOnePage onClick={handleBackOnePage}>Wstecz</BackOnePage>
      </PageContainer>
   )
}
