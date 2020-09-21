import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as S from './styles';

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
    allFile(filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {nin: ["background", "background-2"]}}) {
      edges {
        node {
          base
          childImageSharp {
            fluid(maxHeight: 600, maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  `)

  return (
    <S.ImageContainer>
      <S.ImageTitle>View our destinations</S.ImageTitle>
      <S.ImageGrid>
        {data.allFile.edges.map((image, index) => (
          <S.Image key={index} 
            fluid={image.node.childImageSharp.fluid}
            alt={image.node.base.split('.')[0]}
          />
        ))}
      </S.ImageGrid>
    </S.ImageContainer>
  )
}

export default Image;
