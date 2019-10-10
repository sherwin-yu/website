import React from 'react';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  text-align: center;
  word-break: break-all;
`;
const StyledUserImage = styled.img`
  width: 275px;
  height: 275px;
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
