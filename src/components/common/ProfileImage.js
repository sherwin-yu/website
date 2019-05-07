import React from 'react';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  text-align: center;
  word-break: break-all;
`;
const StyledUserImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  text-align: center;
  bottom: 0;
  margin: 5px 5px 5px 0px;
`;

const ProfileImage = ({ src, alt, onError }) => (
  <ImageWrapper>
    <StyledUserImage src={src} alt={alt} onError={onError} />
  </ImageWrapper>
);

export default ProfileImage;
