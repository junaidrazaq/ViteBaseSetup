import React, { ReactNode } from "react";
import tw, { styled } from "twin.macro";

type ContainerProps = {
  children: ReactNode;
  row?: boolean;
  center?: boolean;
  flex?: boolean;
};

const Container: React.FC<ContainerProps> = ({
  children,
  row,
  center,
  flex,
}) => {
  return (
    <StyledContainer $row={row} $center={center} $flex={flex}>
      {children}
    </StyledContainer>
  );
};

export default Container;

const StyledContainer = styled.div<{
  $row?: boolean;
  $center?: boolean;
  $flex?: boolean;
}>`
  ${({ $row }) => ($row ? tw`flex flex-row` : tw`flex flex-col`)}
  ${({ $center }) => $center && tw`justify-center items-center`}

  ${tw`py-1 md:py-4 max-w-4xl m-auto px-4`}
`;
