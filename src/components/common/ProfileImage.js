import React from 'react';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  text-align: center;
  word-break: break-all;
`;
const StyledUserImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
`;

const ProfileImage = ({ src, alt, onError }) => (
  <ImageWrapper>
    <StyledUserImage src={src} alt={alt} onError={onError} />
  </ImageWrapper>
);

export default ProfileImage;
